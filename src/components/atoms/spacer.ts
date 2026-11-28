export interface SpacerAtomProps {
  size?: number;
  attributes?: string;
}

const spacer = ({ size = 16, attributes = '' }: SpacerAtomProps = {}) => {
  const extraAttr = attributes ? ` ${attributes}` : '';
  return `<div style="display:block;height:${size}px;line-height:${size}px;font-size:${size}px;"${extraAttr}>&nbsp;</div>`;
};

export default spacer;

/** @deprecated Use SpacerAtomProps. Removed in the next major. */
export type SpacerProps = SpacerAtomProps;
