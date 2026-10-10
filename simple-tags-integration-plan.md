# simple-tags ⇄ component-types: integration plan

Date: 2026-10-10 · Status: proposal, needs owner decisions (see §6) · §7 added: adoption across 20+ templates

Repos reviewed (shallow clones, default branch):
- OLD `LLazyEmail/_trying_simple_tags` → `@llazyemail/simple-tags` v5.0.0 (runtime library, publishes to GitHub Packages)
- NEW `LLazyEmail/postmark-transactional-template-simple`, package `packages/component-types` → `@llazyemail/component-types` v0.1.0 (types only, `private: true`)

## 1. What is actually true today (verified)

**The contracts almost match.** A type-level parity test (old `types/components.ts` vs the new package, `Equal<>` per type, TS 6.0.3, strict) passes for 14 of 15 props interfaces plus `HtmlString`. Exactly one root cause breaks the rest: new `ImageLinkedProps` lacks `href?: string`. That also breaks `ImageLinkedComponent` and the `TypographyComponents` aggregate. Adding that one field to a scratch copy gives full parity. The new repo's only type test (`tests/unit/component-types.test-d.ts`) covers `ButtonProps` only, so it cannot catch this.

**Rewiring cost is small.** Pointing the old runtime's 15 component files at the new package and compiling with the new repo's strict flags gives 4 errors: 1 × `href` (above), 3 × implicit `any` in `src/helpers.ts` (hidden today by `strict: false`).

**The new repo has no runtime consumer of typography.** `component-types` is only re-exported (`src/types/components/index.ts` shim, `export type *` in `src/types/index.ts`). `NEXT/typography` is name-only stubs (`button()` returns `"button"`), uses different names (`imageLink`, `mainTitle`, `button`), is not tied to `component-types`, and is excluded from tsconfig.

**Old repo internals:**
- Only 3 of 15 public components (`heading`, `listItem`, `paragraph`) use the base→layout path. `factory.ts` is used only by `tests/abstraction.test.ts` and is not exported from `src/index.ts`. `docs/ABSTRACTION.md` overstates what is wired (its `italic.ts` example does not match the real file).
- `buildImageAttributes` / `buildImageWrapper` (helpers.ts) and `src/config.ts` are not used by any `src/` code.
- `src/js-modules.d.ts` declares `module '*'`, which makes every untyped import `any`.
- **`escapeHtml` (src/tags/render.ts) and `escapeAttr` (src/components/image.ts, imageLinked.ts) are no-ops.** Every pattern/replacement pair has identical code points (38→38, 60→60, 62→62, 34→34). `src`, `alt`, `href` and tag text are therefore not escaped.
- Public type exports: the component prop types (`types/components.ts`) are not reachable from the package entry. The entry exports the *atom* types `LinkProps` and `ImageProps`, which share names with differently shaped `component-types` types (`alt` vs `altText`, all-optional vs required `href`/`content`).

**Rules already in force in the new repo** (AGENTS.md): install `@llazyemail/*` with npm only, no git URLs, no vendoring/submodules as a substitute for a published package; `packages/component-types` is "the move-out boundary" and must not import from the repo. Its ADR forbids `packages/*` importing `src/templates/*`.

**Style mismatch.** Old output is newsletter-style inline markup (`mc-toc-title`, `mlContentButton`, hard-coded `data-file-id="1041068"`, fixed 220×134 image, `{href}` placeholder). The new repo's Postmark shell is class-based (`f-fallback`, `button`). §7 resolves this with a second layout rather than reusing the default one.

## 2. Options considered

| Option | Verdict |
|---|---|
| **A. Keep two packages.** `component-types` = contract, `simple-tags` = implementation that depends on it; new repo consumes `simple-tags` from npm | **Recommended.** Matches AGENTS.md, keeps the "standalone" charter |
| B. Copy the old runtime into new repo `packages/` | Rejected: AGENTS.md forbids vendoring `@llazyemail/*` as a substitute for publishing |
| C. Merge into one monorepo | Rejected: contradicts the new repo's "no monorepo" charter; large blast radius |

## 3. Target architecture (Option A)

- `@llazyemail/component-types`: props + function signatures only. Zero runtime, zero dependencies. Single source of truth.
- `@llazyemail/simple-tags`: implementation. Depends on `component-types`. Keeps tag/renderer/pipeline/layout/base types internal until a second consumer needs them.
- New repo: depends on both by exact version. `NEXT/typography` stubs deleted once a real import exists.
- Conformance gate in `simple-tags`: a compile-time check that the default export satisfies `Omit<TypographyComponents, 'atoms'>`, so contract drift fails CI instead of surfacing in a consumer.

## 4. Phases and gates

**Phase 0 (new repo, contract)**
1. Add `href?: string` to `ImageLinkedProps`.
2. Replace the one-type test with a per-type test so drift is caught (the parity harness used here is a ready model).
3. Decide on publishing: flip `private`, set version, and decide raw `.ts` vs built `.d.ts` (see unknowns).
Gate: new repo typecheck + tests green.

**Phase 1 (simple-tags, type rewiring) — non-breaking at runtime**
1. Depend on `@llazyemail/component-types`; rewire the 15 imports; delete `types/components.ts`.
2. Fix the 3 implicit-`any` params in `helpers.ts` (or delete the dead helpers and their test) and turn on `strict`.
3. Add the conformance check from §3.
Gate: the repo's own loop (`format`, `lint`, `typecheck`, `test`, `build`) green; snapshots unchanged.

**Phase 2 (simple-tags, correctness) — behavior change, release as breaking**
1. Make `escapeHtml` / `escapeAttr` actually escape, with tests for `& < > "` in `src`, `alt`, `href` and tag text. Output changes for any input containing those characters (for example `&` in a URL becomes `&amp;`), so treat it as a downstream-visible change.
2. Rename atom types (`LinkAtomProps`, `ImageAtomProps`, …) and export the component prop types under the `component-types` names; keep deprecated aliases for one major. Bump to 6.0.0.
3. Remove `module '*'`; type `stringify-attributes` explicitly.
Gate: full loop green; changelog lists the output and type-name changes.

**Phase 3 (base/layout)** — finish it for all components the templates need (see §7.2 for the required set), with the default layout reproducing today's output byte-for-byte (snapshot-gated). Do not leave the 3-of-15 split. (The alternative, deleting `factory.ts`, `base/`, `layouts/`, is only sensible if templates will not use typography.)

**Phase 4 (new repo, adoption)** — detailed in §7.

## 5. What I could not verify

- **No test, lint or build was run in either repo.** `registry.npmjs.org` is blocked by the sandbox's egress policy (403 on CONNECT), so `npm install` could not complete. All findings are from reading the code plus local `tsc` runs on scratch copies. Run each repo's own verification loop before trusting the baseline.
- **CI status of both repos could not be read** (the GitHub API is not enabled for this session).
- `@llazyemail/template-runtime-display` (used for escaping in the new repo) was not inspected. Because it comes from npm, the new repo's templates could not be rendered here either.
- Whether `tsup` `dts` bundling works when `simple-tags` imports types from a raw-`.ts` package. A plain `tsc` consumer without `allowImportingTsExtensions` compiled clean in my test; the tsup path is untested. A value (non-type) import of the package at runtime was also not tested; the package is types-only, so consumers should use `import type`.
- The "MailerLite" origin of `mlContentButton` is an inference from the class name.

## 6. Decisions

Assumed from the owner's later messages (typography logic complete; templates will adopt it; at least 20 templates eventually): decisions 1 and 3 are resolved as "yes, templates use typography" and "finish the layout abstraction". Please confirm. Still open: 2, 4, 5, 6.

1. ~~Do transactional templates need these components?~~ Assumed yes.
2. Is a breaking release of `simple-tags` (6.0.0: escaping fix + type renames) acceptable now?
3. ~~Finish the layout abstraction?~~ Assumed yes (needed for the Postmark layout, §7).
4. Publish `component-types` as its own package now, or keep the path-mapping until the first consumer lands?
5. Buttons: extend the contract with `variant?: 'green' | 'red'`, or keep `bulletproofButton` in `src/layout/blocks.ts` and leave `buttonComponent` for the newsletter side only?
6. Alignment: add a semantic `align?: 'left' | 'center' | 'right'` to the relevant props, or keep aligned elements hand-written in the two templates that use them?

## 7. Adopting typography across 20+ templates

### 7.1 What the 8 current templates actually use (regex counts over `src/templates/*/*Email.ts`, indicative)

| Primitive | Templates using it (of 8) | Maps to typography? |
|---|---|---|
| `<p>` | 8 | `paragraph` |
| inline `<a href>` | 8 | `link` |
| `<h1>` | 7 (not comment-notification) | `title`, but see §7.2 |
| `<strong>` | 6 | `strong` |
| `<h2>`/`<h3>` | 3 (invoice, order-confirmation, example) | `heading` (default layout emits `<h3>`) |
| `<ul>`/`<ol>`/`<li>`, `<i>`/`<em>`/`<b>` | 1 (example only) | `list`, `listItem`, `italic` |
| `<img>` | 0 | image family unused |
| `bulletproofButton` + `subCopy` | 7 | Postmark blocks, not typography (see 7.2) |
| `attributeTable`/`attributeRow` | 5 | Postmark blocks |
| `purchase` table | 2 (invoice, order-confirmation) | Postmark block |
| `f-fallback` class | 5 | layout concern (the Postmark layout adds it) |
| `align-*` classes | 2 | needs contract decision 6 |

The templates emit bare semantic tags and rely on the shell stylesheet (`h1`, `p`, `a`, `.button`, `.attributes`, `.purchase`, …). The old default layout emits inline-styled newsletter markup, so templates cannot call the default components directly; they need a Postmark layout.

### 7.2 Design

1. **One theme object, owned by the new repo.** `src/layout/typography.ts` implements simple-tags' `Layouts` as `postmarkLayout` (class-based markup, `f-fallback` where Postmark uses it) and exports `t = createComponents(postmarkLayout)`. Templates import only `t`. This respects the ADR: `src/layout/` is product layout; `packages/*` stay generic; simple-tags knows nothing about Postmark. `postmarkLayout satisfies Layouts` makes a new component in simple-tags a compile error until the theme implements it.
2. **Acceptance criteria for the seam (simple-tags).** Today's `factory.ts` `Layouts` has 8 entries (italic, link, list, listItem, paragraph, strong, image, heading) and **no title/h1 entry**, although `<h1>` is in 7 of 8 templates. The seam must include title before adoption starts. `image` entries can wait: no template uses images.
3. **Contract grows by semantics, never by styling.** No `className`/`style` props on `component-types`. Where templates need variation, add semantic optional props (decisions 5 and 6) and let the layout map them to classes.
4. **What stays out of typography.** Button, attribute table, purchase table, sub-copy, masthead and footer remain in `src/layout/blocks.ts` (already shared by 5 to 7 of 8 templates). Promotion rule: a block moves into simple-tags only if 2+ templates use it **and** its props are theme-agnostic; otherwise it stays in the repo (mirrors ADR rule 2).
5. **Escaping has one owner.** Text `content` is trusted HTML so components can nest; the **caller escapes text**. **Attributes (`href`, `src`, `alt`) are escaped by the component**, so templates stop calling `escapeHtml` on values they pass to `t.link` and friends. Mixing these produces double escaping (`&amp;amp;`) or none. This depends on Phase 2 (today's escapes are no-ops).

### 7.3 Safety net before the first migration (generic, iterates the manifest, zero per-template test code)

Existing coverage is substring assertions only (76 `toContain`, 10 `toBe`, 7 `toMatch`, 1 `toEqual`; no snapshots). At 20+ templates that is not enough for a refactor.

1. **Golden snapshot test**: render every `templates[*].sample` through `renderTemplate`, normalize whitespace between tags, snapshot. Generate it on the current code **before** touching any template; a pure refactor PR must leave it unchanged.
2. **Escape probe** (proposal, not yet run): replace every string in each `sample` with a marker such as `"><b id="x">` and assert the raw marker never appears in output and `&amp;amp;` never appears.
3. **Class coupling test** (proposal): every class emitted by `postmarkLayout` exists in `postmarkStyles.ts`.
4. **Contract test**: `postmarkLayout satisfies Layouts`, plus the existing component-types type tests.

### 7.4 Migration order and PR shape

One PR per template, snapshot unchanged, so any diff is a bug, not a design opinion. Order (simplest first): password-reset, welcome, comment-notification, user-invitation, trial-expiring, order-confirmation, invoice, example (a kitchen-sink showcase; last). Intentional markup changes are separate PRs with the snapshot update reviewed. All new templates are written with `t` from day one; update README "Adding a new template" accordingly.

### 7.5 Upgrade policy at scale

Pin `@llazyemail/simple-tags` and `@llazyemail/component-types` to exact versions (AGENTS.md). A bump must pass the full snapshot suite; a markup change in simple-tags that is intentional shows up as one reviewed snapshot update across all templates instead of 20 silent differences.

### 7.6 Not verified here

Templates could not be rendered in this sandbox (their dependency comes from the blocked npm registry), so the snapshots, escape probe and class coupling test are proposals that must be generated and run on your side. Counts in 7.1 are regex counts over source and indicative only.
