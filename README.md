# atherdon-newsletter-js-layouts-typography

Plain-JavaScript typography component library for HTML email newsletters (MTE plugin).

Each component is a **pure function** that accepts a props object and returns an HTML string ready for use inside an email template. No framework, no virtual DOM — just HTML strings with inline styles tuned for broad email-client compatibility (Outlook, iOS Mail, Windows Phone).

More information: https://github.com/LLazyEmail/documentation/blob/main/docs/templates/hn/details.md

---

## Setup

```bash
npm install
```

## Available Commands

| Command | Description |
|---|---|
| `npm test` | Run all Jest tests |
| `npm run lint` | Check code with ESLint |
| `npm run lint:fix` | Auto-fix ESLint issues |
| `npm run format` | Format source files with Prettier |
| `npm run format:check` | Check formatting without writing |
| `npm run build` | Build all distribution bundles (CJS, ES, IIFE) |
| `npm run dev` | Watch mode build |

## Project Structure

```
src/
  components/    # One file per typography component (default export)
  components.js  # Named map of all components (re-exported from index)
  config.js      # Shared configuration values (contact URL, mailing address)
  helpers.js     # Shared style constants and attribute-builder utilities
  index.js       # Package entry point (default export = components map)
tests/
  *.test.js                    # Per-component unit tests
  stringifyAttributes.test.js  # Edge-case regression tests for attribute serialization
  composition.test.js          # Integration tests for composed component output
  index.exports.test.js        # Verifies the module export surface
```

## Components

Each component is a plain function: `(props) => htmlString`.

| Export key | Props | Output element | Description |
|---|---|---|---|
| `titleComponent` | `{ content }` | `<h1>` | Main article title |
| `headingComponent` | `{ content }` | `<h3>` | Section heading |
| `subtitleComponent` | `{ content }` | `<p>` | Bold subtitle paragraph |
| `paragraphComponent` | `{ content }` | `<div>` | Body text wrapper |
| `strongComponent` | `{ content }` | `<strong>` | Inline bold text |
| `italicComponent` | `{ content }` | `<i>` | Inline italic text |
| `linkComponent` | `{ href, content }` | `<a>` | Inline anchor link |
| `buttonComponent` | `{ href, content }` | `<a>` | Styled call-to-action button |
| `listComponent` | `{ content }` | `<ul>` | Unordered list wrapper |
| `listItemComponent` | `{ content }` | `<li>` | List item with inner `<p>` |
| `imageComponent` | `{ src, altText }` | `<p><a><img></a></p>` | Centered image inside a linked wrapper |
| `imageLinkedComponent` | `{ src, altText }` | `<p><a><img></a></p>` | Alias of `imageComponent` |
| `separatorComponent` | `{ src?, altText? }` | `<div>` | `***` text separator, or an `<img>` when `src` is provided |

### Usage examples

```js
import components from 'atherdon-newsletter-js-layouts-typography';

// or import individual components directly:
import titleComponent from 'atherdon-newsletter-js-layouts-typography/src/components/mainTitle';

// Plain text title
components.titleComponent({ content: 'Weekly Digest' });
// → <h1 class="mc-toc-title" …>…Weekly Digest…</h1>

// Section heading
components.headingComponent({ content: 'Top Stories' });
// → <h3 class="mc-toc-title" …>…Top Stories…</h3>

// Paragraph with inline link
const link = components.linkComponent({ href: 'https://example.com', content: 'read more' });
components.paragraphComponent({ content: `Here is the full story — ${link}` });

// Unordered list
const item1 = components.listItemComponent({ content: 'First point' });
const item2 = components.listItemComponent({ content: 'Second point' });
components.listComponent({ content: item1 + item2 });

// Image (the `{href}` placeholder can be replaced after rendering)
const html = components.imageComponent({ src: 'https://cdn.example.com/hero.jpg', altText: 'Hero' });
const finalHtml = html.replace('{href}', 'https://example.com/article');

// Text separator (no args)
components.separatorComponent();
// → <div …><span …><em>***</em></span></div>

// Image separator
components.separatorComponent({ src: 'https://cdn.example.com/sep.png', altText: 'divider' });
```

## HTML Output Conventions

- All components return a **single HTML string** — no arrays or fragments.
- Inline styles are applied directly on elements for maximum email-client compatibility.
- Attribute values are serialized by the [`stringify-attributes`](https://github.com/sindresorhus/stringify-attributes) package, which:
  - **HTML-escapes** special characters in attribute values (`&`, `"`, `'`, `<`, `>`)
  - **Omits** attributes whose value is `false`
  - Emits **bare attribute names** (no `=value`) when the value is `true`
  - Converts all other values (numbers, strings, arrays) to strings
- The `imageComponent` / `imageLinkedComponent` / `separatorComponent` (image mode) embed a literal `{href}` placeholder in the anchor `href`. Replace it with the real URL after rendering if a clickable link is needed.

## Testing

### Running tests

```bash
npm test          # run all tests
```

### Test coverage

| Test file | What it covers |
|---|---|
| `button2.test.js` | `buttonComponent` HTML structure, attributes, styling |
| `heading.test.js` | `headingComponent` HTML structure and attributes |
| `image.test.js` | `imageComponent` structure, src/alt/data-file-id attributes |
| `imageLinked.test.js` | `imageLinkedComponent` (alias of imageComponent) |
| `italic.test.js` | `italicComponent` |
| `link.test.js` | `linkComponent` href, target, style |
| `list.test.js` | `listComponent` `<ul>` wrapper |
| `listItem.test.js` | `listItemComponent` `<li><p>` nesting and attributes |
| `mainTitle.test.js` | `titleComponent` `<h1>` output |
| `mainTitleImage.test.js` | `mainTitleImageComponent` |
| `paragraph.test.js` | `paragraphComponent` `<div>` wrapper |
| `separator.test.js` | `separatorComponent` text mode and image mode |
| `strong.test.js` | `strongComponent` |
| `subtitle.test.js` | `subtitleComponent` |
| `helpers.test.js` | Shared style constants and `buildImageAttributes` / `buildImageWrapper` helpers |
| `stringifyAttributes.test.js` | **Regression tests** for `stringify-attributes` edge cases and per-component attribute serialization correctness (see below) |
| `composition.test.js` | Component composition — nesting components inside each other |
| `index.exports.test.js` | Module export surface verification |

### `stringify-attributes` regression scenarios

`tests/stringifyAttributes.test.js` explicitly documents and guards against known edge cases in attribute serialization:

| Input value | Expected output behaviour |
|---|---|
| `false` | Attribute is **omitted** entirely |
| `true` | Attribute emitted as a **bare name** (no `="value"`) |
| `undefined` | Serialised as the literal string `"undefined"` ⚠️ |
| `null` | Serialised as the literal string `"null"` ⚠️ |
| `0` or other numbers | Correctly serialized as a quoted numeric string |
| `['a', 'b']` (array) | Joined with a space: `"a b"` |
| `"say \"hello\""` | Double-quotes escaped as `&quot;` |
| `"a=1&b=2"` | Ampersand escaped as `&amp;` |
| `"<script>"` | Angle brackets escaped as `&lt;script&gt;` |

> ⚠️ **Important:** passing `undefined` or `null` as a prop value (e.g. `altText: undefined`) will produce a visible `alt="undefined"` / `alt="null"` attribute in the HTML. Always provide defined string values for props that flow into element attributes.

