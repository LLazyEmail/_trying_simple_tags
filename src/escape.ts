/** Escape a value for an HTML attribute or text node. */
export const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '\u0026amp;')
    .replace(/</g, '\u0026lt;')
    .replace(/>/g, '\u0026gt;')
    .replace(/"/g, '\u0026quot;');

export const escapeAttr = escapeHtml;
