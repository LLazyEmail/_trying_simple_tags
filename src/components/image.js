import { buildImageAttributes, buildImageWrapper } from '../helpers';

const imageComponent = ({ src, altText }) => {
  const attributesStr = buildImageAttributes(src, altText);
  return buildImageWrapper(`<img ${attributesStr} />`);
};

export default imageComponent;
