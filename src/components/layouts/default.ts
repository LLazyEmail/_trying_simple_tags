import stringifyAttributes from 'stringify-attributes';
import { EMAIL_CLIENT_STYLES, LINK_STYLE, IMAGE_STYLE } from '../../helpers';

/**
 * Default layout functions for rendering base components
 * These contain the current hardcoded layouts
 */

export const italicLayout = (data: { content: string }): string => {
  return `<i>${data.content}</i>`;
};

export const linkLayout = (data: { href: string; content: string }): string => {
  return `<a href="${data.href}" target="_blank" style="${LINK_STYLE}">${data.content}</a>`;
};

export const listLayout = (data: { content: string }): string => {
  return `<ul dir="ltr">${data.content}</ul>`;
};

export const listItemLayout = (data: { content: string }): string => {
  const attributes = {
    style: EMAIL_CLIENT_STYLES,
  };

  const attributesStr = stringifyAttributes(attributes);

  const attributes2 = {
    dir: `ltr`,
    role: `presentation`,
    style: `line-height: 125%;margin: 10px 0;padding: 0;${EMAIL_CLIENT_STYLES}color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;text-align: left;`,
  };

  const attributesStr2 = stringifyAttributes(attributes2);

  return `<li ${attributesStr} ><p ${attributesStr2} >${data.content}</p></li>`;
};

export const paragraphLayout = (data: { content: string }): string => {
  return `<div dir="ltr" style="text-align: justify;">
    <span style="font-size:16px"><span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif">
    ${data.content}
    </span></span></div>`;
};

export const strongLayout = (data: { content: string }): string => {
  return `<strong style="font-weight: bolder;">${data.content}</strong>`;
};

export const imageLayout = (data: { src: string; altText: string }): string => {
  const attributes = {
    'data-file-id': `1041068`,
    src: data.src,
    style: IMAGE_STYLE,
    alt: data.altText,
  };

  const attributesStr = stringifyAttributes(attributes);

  return `<p dir="ltr" 
    style="text-align: center;line-height: 150%;margin: 10px 0;padding: 0;${EMAIL_CLIENT_STYLES}color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;"><span style="font-family:georgia,times,times new roman,serif"><span style="font-size:17px"><a href="{href}" target="_blank" style="${LINK_STYLE}">    
        <img ${attributesStr} />
    </a>
    </span></span></p>`;
};

export const headingLayout = (data: { content: string }): string => {
  const attributes = {
    class: `mc-toc-title`,
    dir: `ltr`,
    style: `text-align: center;display: block;margin: 0;padding: 0;color: #111111;font-family: 'Merriweather Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: normal;`,
  };

  const attributesStr = stringifyAttributes(attributes);

  return `<h3 ${attributesStr} >
    <span style="font-family:trebuchet ms,lucida grande,lucida sans unicode,lucida sans,tahoma,sans-serif">
    <span style="font-size:18px">${data.content}</span></span>
  </h3>`;
};
