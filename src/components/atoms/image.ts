export interface ImageAtomProps {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  style?: string;
  className?: string;
  attributes?: string;
}

const image = ({
  src = '',
  alt = '',
  width = '',
  height = '',
  style = '',
  className = '',
  attributes = '',
}: ImageAtomProps = {}) => {
  const widthAttr = width ? ` width="${width}"` : '';
  const heightAttr = height ? ` height="${height}"` : '';
  const classAttr = className ? ` class="${className}"` : '';
  const styleAttr = style ? ` style="${style}"` : '';
  const extraAttr = attributes ? ` ${attributes}` : '';
  return `<img src="${src}" alt="${alt}"${widthAttr}${heightAttr}${classAttr}${styleAttr}${extraAttr} />`;
};

export default image;

/** @deprecated Use ImageAtomProps. Removed in the next major. */
export type ImageProps = ImageAtomProps;
