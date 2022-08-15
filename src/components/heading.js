import stringifyAttributes from 'stringify-attributes';

const headingComponent = ({content}) => {

  const attributes = {
    class: `mc-toc-title`,
    dir: `ltr`,
    style: `text-align: center;display: block;margin: 0;padding: 0;color: #111111;font-family: 'Merriweather Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: normal;`,
  };

  const attributesStr = stringifyAttributes(attributes);

  console.log(attributesStr);

  return `<h3 ${attributesStr} >
    <span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif">
    <span style="font-size:18px">${content}</span></span>
  </h3>`
}

export default headingComponent;
