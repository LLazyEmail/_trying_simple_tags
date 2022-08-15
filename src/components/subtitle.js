import stringifyAttributes from 'stringify-attributes';

const subtitleComponent = ({content}) => {

    const attributes = {
      
      dir: `ltr`,
      style: `text-align: left;line-height: 150%;margin: 10px 0;padding: 0;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;`,
    //   alt: altText
    };
  
    const attributesStr = stringifyAttributes(attributes);
  
    console.log(attributesStr);
  
    return `<p ${attributesStr} >
        <span style="font-size:17px">
        <span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif">
            <strong id="dofc6f2">${content}</strong>
        </span></span>
    </p>`;
}

export default subtitleComponent;
