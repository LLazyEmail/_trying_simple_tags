export interface LinkAtomProps {
  content?: string;
  href?: string;
  target?: string;
  rel?: string;
  style?: string;
  className?: string;
  attributes?: string;
}

const link = ({
  content = '',
  href = '#',
  target = '_blank',
  rel = 'noopener noreferrer',
  style = '',
  className = '',
  attributes = '',
}: LinkAtomProps = {}) => {
  const classAttr = className ? ` class="${className}"` : '';
  const styleAttr = style ? ` style="${style}"` : '';
  const relAttr = rel ? ` rel="${rel}"` : '';
  const extraAttr = attributes ? ` ${attributes}` : '';
  return `<a href="${href}" target="${target}"${relAttr}${classAttr}${styleAttr}${extraAttr}>${content}</a>`;
};

export default link;

/** @deprecated Use LinkAtomProps. Removed in the next major. */
export type LinkProps = LinkAtomProps;
