export interface TextAtomProps {
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
}: TextAtomProps = {}) => {
  const classAttr = className ? ` class="${className}"` : '';
  const styleAttr = style ? ` style="${style}"` : '';
  const extraAttr = attributes ? ` ${attributes}` : '';
  return `<${tag}${classAttr}${styleAttr}${extraAttr}>${content}</${tag}>`;
};

export default text;

/** @deprecated Use TextAtomProps. Removed in the next major. */
export type TextProps = TextAtomProps;
