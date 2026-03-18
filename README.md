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
| `npm test` | Run tests with Jest |
| `npm run lint` | Check code with ESLint |
| `npm run lint:fix` | Auto-fix ESLint issues |
| `npm run format` | Format source files with Prettier |
| `npm run format:check` | Check formatting without writing |
| `npm run build` | Build all distribution bundles |
| `npm run dev` | Watch mode build |

## Project Structure

```
src/
  components/    # Individual typography component functions
  components.js  # Aggregates all components into a single export
  config.js      # Shared configuration values
  index.js       # Package entry point
tests/
  index.test.js  # Component unit tests
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

- https://www.npmjs.com/package/htmlhammer
- https://www.npmjs.com/package/html-template-tag
- https://lit.dev/docs/v1/lit-html/introduction/ + https://www.npmjs.com/package/tag-html
- https://www.npmjs.com/package/common-tags
- https://github.com/teleporthq/teleport-code-generators
- https://www.npmjs.com/package/@jkob/node-html-renderer
- https://www.npmjs.com/package/premail
- https://dev.to/azure/too-hard-too-soft-just-right-rendering-html-with-lit-html-1km8
- https://github.com/runem/lit-analyzer/tree/master/packages/ts-lit-plugin
- https://github.com/web-padawan/awesome-lit
