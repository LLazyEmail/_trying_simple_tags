import stringifyAttributes from 'stringify-attributes';

const separatorComponent = () => {

    // const attributes = {

    //   src: src,
    //   style: `border: 0px initial;width: 220px;height: 134px;margin: 0px;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;`,
    //   alt: altText
    // };
  
    // const attributesStr = stringifyAttributes(attributes);
  
    // console.log(attributesStr);
  
    return `<div dir="ltr" style="text-align: center;">
    <span style="font-size:16px"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif"><em>***</em></span></span>
    </div>`;
    
}


export default separatorComponent;