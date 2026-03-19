const link = ({
  content = '',
  href = '#',
  target = '_blank',
  rel = 'noopener noreferrer',
  style = '',
  className = '',
  attributes = '',
} = {}) => {
  const classAttr = className ? ` class="${className}"` : '';
  const styleAttr = style ? ` style="${style}"` : '';
  const extraAttr = attributes ? ` ${attributes}` : '';
  return `<a href="${href}" target="${target}" rel="${rel}"${classAttr}${styleAttr}${extraAttr}>${content}</a>`;
};

export default link;
