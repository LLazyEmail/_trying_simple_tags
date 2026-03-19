const divider = ({
  color = '#E5E7EB',
  thickness = 1,
  margin = '16px 0',
  attributes = '',
} = {}) => {
  const extraAttr = attributes ? ` ${attributes}` : '';
  return `<hr style="border:0;border-top:${thickness}px solid ${color};margin:${margin};"${extraAttr} />`;
};

export default divider;
