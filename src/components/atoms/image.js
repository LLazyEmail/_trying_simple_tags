const image = ({
  src = '',
  alt = '',
  width = '',
  height = '',
  style = '',
  className = '',
  attributes = '',
} = {}) => {
  const widthAttr = width ? ` width="${width}"` : '';
  const heightAttr = height ? ` height="${height}"` : '';
  const classAttr = className ? ` class="${className}"` : '';
  const styleAttr = style ? ` style="${style}"` : '';
  const extraAttr = attributes ? ` ${attributes}` : '';
  return `<img src="${src}" alt="${alt}"${widthAttr}${heightAttr}${classAttr}${styleAttr}${extraAttr} />`;
};

export default image;
