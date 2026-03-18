# Copilot Instructions

## Project Overview

This repository is a plain-JavaScript typography component library (`atherdon-newsletter-js-layouts-typography`) designed for HTML email newsletters. Each component is a function that accepts a props object and returns an HTML string suitable for use in email templates.

## Technology Stack

- **Language**: JavaScript (ES modules, no TypeScript)
- **Bundler**: Rollup (outputs CJS, ES, and IIFE bundles)
- **Testing**: Jest with Babel transform
- **Linting**: ESLint with `@babel/eslint-parser`
- **Formatting**: Prettier

## Development Workflow

```bash
npm install          # Install dependencies
npm test             # Run Jest tests
npm run lint         # Check code with ESLint
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Format source files with Prettier
npm run build        # Build distribution bundles (clean + rollup)
npm run dev          # Watch mode build
```

CI runs `npm run lint` and `npm test` on every push/PR to `main`/`master`.

## Repository Structure

```
src/
  components/    # One file per typography component
  components.js  # Re-exports all components as a named map
  config.js      # Shared configuration values
  index.js       # Package entry point (default export)
tests/
  index.test.js  # Jest unit tests for all components
```

## Component Conventions

- Each component lives in `src/components/<name>.js` and is the **default export**.
- A component is a plain function: `({ content, ...rest }) => string`.
- Inline styles are built with the `stringify-attributes` package.
- HTML is returned as a template-literal string; no JSX or virtual DOM.
- After adding a new component, register it in `src/components.js`.

## Testing Conventions

- Tests live in `tests/index.test.js` and use `describe`/`test` blocks.
- Each component section is organised into nested `describe` blocks:
  - **HTML structure** – tag presence and order
  - **styling** – expected inline style values
  - **content handling** – content is preserved, edge cases don't throw
- Import components directly from `../src/components/<name>`.
- Do **not** snapshot-test; assert specific substrings or structure instead.
- Run `npm test` to verify; tests must pass before merging.

## Code Style

- Single quotes for strings; trailing commas follow Prettier's default (`"all"` in Prettier 3).
- ESLint `max-len` is set to 850 characters (long inline styles are acceptable).
- Prettier is configured via `.prettierrc`; run `npm run format` before committing.
- Keep component files small and focused — one component per file.
