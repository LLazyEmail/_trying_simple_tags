# Changelog

## 6.0.0

Breaking correctness release.

- `escapeAttr` and `escapeHtml` now escape `&`, `<`, `>`, and `"`. Image `src`/`alt`, linked-image `href`, and tag text that contain those characters change in the output (`&` becomes `&`).
- Atom prop types are renamed to `TextAtomProps`, `LinkAtomProps`, `ImageAtomProps`, `SpacerAtomProps`, and `DividerAtomProps`. The old names remain as deprecated aliases for this major.
- Component prop types (`ImageProps`, `LinkProps`, and the rest) are exported from the package entry under the `@llazyemail/component-types` names.
- Removed the `declare module '*'` catch-all. `stringify-attributes` has an explicit declaration.
