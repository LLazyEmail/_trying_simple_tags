# _trying_simple_tags


## atherdon-newsletter-js-layouts-typography

Plain JS typography template for MTE plugin

More information about the project is located here:
https://github.com/LLazyEmail/documentation/blob/main/docs/templates/hn/details.md

---

## Setup

```bash
npm install
```

## Available Commands

| Command | Description |
|---|---|
| `npm test` | Run tests with Jest (native ESM, no Babel) |
| `npm run lint` | Check code with ESLint |
| `npm run lint:fix` | Auto-fix ESLint issues |
| `npm run format` | Format source files with Prettier |
| `npm run format:check` | Check formatting without writing |
| `npm run build` | Build CJS, ESM, and IIFE bundles with tsup |
| `npm run dev` | Watch mode build |

## Project Structure

```
src/
  components/    # Individual typography component functions
  components.js  # Aggregates all components into a single export
  config.js      # Shared configuration values
  index.js       # Package entry point
tests/
  *.test.js      # Component unit tests
```

## Components

Each component is a plain function that accepts props and returns an HTML string:

- `headingComponent` – `<h3>` section heading
- `titleComponent` – `<h1>` main title
- `subtitleComponent` – styled `<p>` subtitle
- `paragraphComponent` – body text wrapper `<div>`
- `strongComponent` – `<strong>` bold text
- `italicComponent` – `<i>` italic text
- `linkComponent` – `<a>` anchor tag
- `listComponent` – `<ul>` unordered list
- `listItemComponent` – `<li>` list item with inner `<p>`
- `imageComponent` – `<img>` inside a centered `<p>`
- `separatorComponent` – horizontal `***` separator
- `buttonComponent` – styled `<a>` button link

---

## Build

The library is bundled with [tsup](https://tsup.egoist.dev/). `npm run build` writes:

- `dist/index.cjs.js` — CommonJS (`main`)
- `dist/index.es.js` — ESM (`module`)
- `dist/index.iife.js` — browser IIFE (`browser`, global `newsletterLayoutsTypographyPlainJS`)

There is no Babel in the toolchain. Jest runs as native ESM.
