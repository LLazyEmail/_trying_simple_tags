export interface DividerAtomProps {
  color?: string;
  thickness?: number;
  margin?: string;
  attributes?: string;
}

const divider = ({
  color = '#E5E7EB',
  thickness = 1,
  margin = '16px 0',
  attributes = '',
}: DividerAtomProps = {}) => {
  const extraAttr = attributes ? ` ${attributes}` : '';
  return `<hr style="border:0;border-top:${thickness}px solid ${color};margin:${margin};"${extraAttr} />`;
};

export default divider;

/** @deprecated Use DividerAtomProps. Removed in the next major. */
export type DividerProps = DividerAtomProps;
