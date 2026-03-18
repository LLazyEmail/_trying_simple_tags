import stringifyAttributes from 'stringify-attributes';
import { IMAGE_STYLE } from '../helpers';

const paragraphComponentUpdated = ({ content, src, altText }) => {
  const attributes = {
    src: src,
    style: IMAGE_STYLE,
    alt: altText,
  };

  const attributesStr = stringifyAttributes(attributes);

  return `<div dir="ltr" style="text-align: justify;">
    <img ${attributesStr} />
    <span style="font-size:16px"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif">
    ${content}
    </span></span></div>`;
};

export default paragraphComponentUpdated;
