export interface TextProps {
  content?: string;
  tag?: string;
  style?: string;
  className?: string;
  attributes?: string;
}

const text = ({
  content = '',
  tag = 'p',
  style = '',
  className = '',
  attributes = '',
}: TextProps = {}) => {
  const classAttr = className ? ` class="${className}"` : '';
  const styleAttr = style ? ` style="${style}"` : '';
  const extraAttr = attributes ? ` ${attributes}` : '';
  return `<${tag}${classAttr}${styleAttr}${extraAttr}>${content}</${tag}>`;
};

export default text;
