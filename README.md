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

---

## 📊 Comprehensive Repository Analysis

### 🗂️ Repository Metadata

| Property | Value |
|---|---|
| **Repo** | `LLazyEmail/_trying_simple_tags` |
| **Repo ID** | `503538517` |

---

### 🌐 Language Composition

| Language | Percentage |
|---|---|
| HTML | 56.5% |
| JavaScript | 43.5% |

---

### 🗃️ Repository Structure

This project is organized around reusable typography components for HTML email generation, with dedicated tests and a modern JS build/test toolchain.

```text
/home/runner/work/_trying_simple_tags/_trying_simple_tags/
├── src/
│   ├── components/
│   │   ├── button2.js
│   │   ├── heading.js
│   │   ├── image.js
│   │   ├── italic.js
│   │   ├── link.js
│   │   ├── list.js
│   │   ├── listItem.js
│   │   ├── mainTitle.js
│   │   ├── mainTitleImage.js
│   │   ├── paragraph.js
│   │   ├── paragraphComponentUpdated.js
│   │   ├── separator.js
│   │   ├── strong.js
│   │   └── subtitle.js
│   ├── components.js
│   ├── config.js
│   └── index.js
├── tests/ (14 test files)
├── package.json
├── babel.config.json
├── rollup.config.js
└── [config files: .eslintrc.json, .prettierrc, etc.]
```

---

### 🧩 Directory Breakdown

#### `src/components/`
Contains the core presentational building blocks for HTML email typography:

- **Text emphasis** – `strong`, `italic`
- **Structural text** – `paragraph`, `heading`, `mainTitle`, `subtitle`
- **List rendering** – `list`, `listItem`
- **Interactive / content** – `link`, `button2`, `image`
- **Utility / presentation** – `separator`
- **Alternate versions** – `mainTitleImage`, `paragraphComponentUpdated`

#### `src/index.js`
Primary entry point that exposes the component API for external consumption.

#### `src/components.js`
Aggregates and re-exports component modules for convenient imports.

#### `src/config.js`
Holds shared configuration/constants used across rendering logic.

#### `tests/`
Houses **14 test files**, reflecting a split-by-component testing strategy for better maintainability and clearer test ownership.

---

### ⚙️ Tooling & Configuration

| File | Purpose |
|---|---|
| `package.json` | Project metadata, scripts, and dependencies |
| `babel.config.json` | Transpilation configuration |
| `rollup.config.js` | Bundling and build pipeline |
| `.eslintrc.json` | Linting rules and standards |
| `.prettierrc` | Code formatting configuration |

---

### ✅ Architecture Summary

The repository follows a **component-first architecture** with:

- **Clear separation** between source (`src/`) and tests (`tests/`)
- **Modular, single-purpose** rendering components — one component per file
- **Build + lint + format** tooling for reliability and consistency
- **Scalable testing layout** aligned with component boundaries (14 dedicated test files)
- **Plain JavaScript** (no TypeScript, no JSX) for maximum compatibility in email toolchains

