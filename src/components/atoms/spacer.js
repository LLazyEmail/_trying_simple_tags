const spacer = ({ size = 16, attributes = '' } = {}) => {
  const extraAttr = attributes ? ` ${attributes}` : '';
  return `<div style="display:block;height:${size}px;line-height:${size}px;font-size:${size}px;"${extraAttr}>&nbsp;</div>`;
};

export default spacer;
