export interface LinkProps {
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
}: LinkProps = {}) => {
  const classAttr = className ? ` class="${className}"` : '';
  const styleAttr = style ? ` style="${style}"` : '';
  const extraAttr = attributes ? ` ${attributes}` : '';
  return `<a href="${href}" target="${target}" rel="${rel}"${classAttr}${styleAttr}${extraAttr}>${content}</a>`;
};

export default link;
