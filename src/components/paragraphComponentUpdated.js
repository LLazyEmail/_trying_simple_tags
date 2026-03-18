import stringifyAttributes from 'stringify-attributes';

const paragraphComponentUpdated = ({ content, src, altText }) => {
  const attributes = {
    src: src,
    style: `border: 0px initial;width: 220px;height: 134px;margin: 0px;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;`,
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
