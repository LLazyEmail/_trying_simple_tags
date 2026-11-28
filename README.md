# @llazyemail/simple-tags

Runtime library that turns email component props into HTML strings.

The **contract** lives in the Postmark repo. This package is the **implementation**. It does not render a document, talk to Postmark, or know about templates. A caller passes props; a function returns markup.

Package: `@llazyemail/simple-tags` · Repo: [`LLazyEmail/_trying_simple_tags`](https://github.com/LLazyEmail/_trying_simple_tags) · Registry: GitHub Packages

## What it does

Each public component is a pure function:

```ts
(props) => htmlString;
```

There is no DOM, no network, and no shared state. The default export is the map of those functions. It satisfies `TypographyComponents` from `@llazyemail/component-types`, so a contract change fails typecheck here instead of in a consumer.

```ts
import typography from '@llazyemail/simple-tags';

typography.paragraphComponent({ content: 'Hello' });
typography.linkComponent({ href: 'https://example.com', content: 'Read' });
typography.imageComponent({
  src: 'https://example.com/img.png',
  altText: 'cover',
});
```

The default markup is the old newsletter style: inline styles, a fixed 220×134 image, `data-file-id="1041068"`, and `{href}` as the placeholder on a linked image. That is intentional. Postmark templates use classes (`f-fallback`, `button`) and must not call these default components directly. They need a Postmark layout (see below).

## How it connects to the Postmark repo

```text
postmark-transactional-template-simple
  packages/component-types          @llazyemail/component-types
  src/templates/*                   Postmark templates (not a consumer yet)

_trying_simple_tags                 @llazyemail/simple-tags
  depends on component-types
  implements the component functions
```

| Piece                         | Where                                                                                                                                                                        | Role                                                                             |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `@llazyemail/component-types` | [`postmark-transactional-template-simple/packages/component-types`](https://github.com/LLazyEmail/postmark-transactional-template-simple/tree/main/packages/component-types) | Props and function signatures only. No renderer. Published to GitHub Packages.   |
| `@llazyemail/simple-tags`     | this repo                                                                                                                                                                    | The functions. Depends on `component-types`.                                     |
| Postmark templates            | `src/templates` in the Postmark repo                                                                                                                                         | Not wired to this package yet. They emit their own tags and a class-based shell. |

The two packages stay separate on purpose. The Postmark repo's rules say `@llazyemail/*` is installed from npm, not copied in, and `packages/*` must not import template code. So the contract moved out, and the runtime stayed here.

Adoption, when it happens, looks like this: the Postmark repo writes a `postmarkLayout` that implements this package's `Layouts`, builds `t = createComponents(postmarkLayout)`, and templates import `t`. This package never learns Postmark class names.

## Hierarchy

```text
atoms                         dumb HTML builders
  text, link, image, spacer, divider

components                    one file per public function
  most compose atoms
  heading, listItem, paragraph go base -> layout

components.ts                 the default export
  the 15 components + atoms
  satisfies TypographyComponents

tag renderer                  a second, structured API
  header, footer, content, two-column, hero

pipeline                      a string transform chain
```

### 1. Atoms

`src/components/atoms/`

The smallest builders. `text` emits a tag, `link` an anchor, `image` an `img`, plus `spacer` and `divider`. They do not know about newsletter chrome. Public components pass them style and content.

### 2. Components

`src/components/*.ts`

One file per key on `TypographyComponents`:

| Key                                                                                                                                                                                           | File             | Built from                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------------------------------- |
| `headingComponent`                                                                                                                                                                            | `heading.ts`     | base + default layout           |
| `paragraphComponent`                                                                                                                                                                          | `paragraph.ts`   | base + default layout           |
| `listItemComponent`                                                                                                                                                                           | `listItem.ts`    | base + default layout           |
| `linkComponent`                                                                                                                                                                               | `link.ts`        | link atom                       |
| `imageComponent`                                                                                                                                                                              | `image.ts`       | image atom, not linked          |
| `imageLinkedComponent`                                                                                                                                                                        | `imageLinked.ts` | link atom around the image atom |
| `italicComponent`, `strongComponent`, `listComponent`, `titleComponent`, `subtitleComponent`, `buttonComponent`, `separatorComponent`, `mainTitleImageComponent`, `paragraphComponentUpdated` | matching files   | atoms or `stringify-attributes` |

`imageComponent` is the image. `imageLinkedComponent` is the anchor around that same image. Do not fold the link back into the image.

### 3. Base and layout

`src/components/base/`, `src/components/layouts/`, `src/components/factory.ts`

This is the theme seam. A base function normalizes props. A layout function turns that data into markup. `createComponents(layouts)` builds a component set for a theme.

The template set uses this path: italic, link, list, list item, paragraph, strong, image, heading, and title. `createComponents` and `Layouts` are exported. A Postmark theme implements `Layouts` and does not change this package. Button, separator, subtitle, and the updated paragraph stay hand-written; they are Postmark blocks or unused by templates.

### 4. The map

`src/components.ts`

Assembles the fifteen components and the atom bag into the default export. The `satisfies TypographyComponents` line is the conformance gate against the Postmark contract.

### 5. Tag renderer and pipeline

`src/tags/render.ts`, `src/pipeline.ts`, `types/`

A separate API for structured blocks: header, footer, content, two-column, hero. `EmailRenderer` and `renderTag` live here. `Pipeline` runs string steps in order. These types stay internal to this package until a second consumer needs them.

## Layout of the repo

```text
src/
  index.ts                 public entry
  components.ts            default export map
  components/              one component per file
    atoms/                 text, link, image, spacer, divider
    base/                  normalized props for the layout path
    layouts/               default and minimal layouts
    factory.ts             createComponents(layouts)
  tags/render.ts           structured tag renderer
  pipeline.ts              string step chain
  helpers.ts               shared inline-style fragments
  errors.ts                RenderError
types/                     tag, layout, renderer, pipeline types
tests/                     Vitest
dist/                      tsup output, do not edit
```

## Public surface

From `src/index.ts`:

- default export: the component map
- `atoms`, `text`, `link`, `image`, `spacer`, `divider`
- atom prop types, and the component prop types re-exported from `@llazyemail/component-types`
- `renderTag`, `EmailRenderer`, and the other tag renderers
- `Pipeline`, `RenderError`

## Install

GitHub Packages, scope `@llazyemail`:

```ini
@llazyemail:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

```bash
npm install @llazyemail/simple-tags
```

## Build output

| File                 | Format                                                    | package.json field |
| -------------------- | --------------------------------------------------------- | ------------------ |
| `dist/index.cjs.js`  | CommonJS                                                  | `main`             |
| `dist/index.es.js`   | ESM                                                       | `module`           |
| `dist/index.iife.js` | Browser IIFE, global `newsletterLayoutsTypographyPlainJS` | `browser`          |
| `dist/index.d.ts`    | Types                                                     | `types`            |

## For agents

TypeScript source. Vitest. tsup. ESLint and Prettier. Entry is `src/index.ts`, not `src/index.js`.

After a change, in order: `npm run format`, `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`.

Do not vendor this package into the Postmark repo. Depend on the published version. Do not import Postmark template code from here.

## License

MIT
