export interface DividerProps {
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
}: DividerProps = {}) => {
  const extraAttr = attributes ? ` ${attributes}` : '';
  return `<hr style="border:0;border-top:${thickness}px solid ${color};margin:${margin};"${extraAttr} />`;
};

export default divider;
