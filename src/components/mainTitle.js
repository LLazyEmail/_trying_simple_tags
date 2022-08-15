import stringifyAttributes from 'stringify-attributes';

const imageComponent = ({src, altText}) => {

    const attributes = {
      "data-file-id": `1041068`,
      src: src,
      style: `border: 0px initial;width: 220px;height: 134px;margin: 0px;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;`,
      alt: altText
    };
  
    const attributesStr = stringifyAttributes(attributes);
  
    console.log(attributesStr);
  
    return `<p dir="ltr" 
    style="text-align: center;line-height: 150%;margin: 10px 0;padding: 0;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;"><span style="font-family:georgia,times,times new roman,serif"><span style="font-size:17px"><a href="{href}" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-weight: bold;text-decoration: underline;">    
        <img ${attributesStr} />
    </a>
    </span></span></p>`
}

const titleComponent = ({content}) => {
    return `<h1 class="mc-toc-title" dir="ltr" style="text-align: center;display: block;margin: 0;padding: 0;color: #111111;font-family: 'Merriweather Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 26px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: normal;"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif"><span style="font-size:30px">${content}</span></span></h1>`;
}

export default titleComponent;
