import stringifyAttributes from 'stringify-attributes';

/**
 * Email-client compatibility inline style fragment.
 * Used across multiple components for consistent rendering in Outlook, Windows Phone, and iOS Mail.
 */
export const EMAIL_CLIENT_STYLES =
  'mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;';

/**
 * Common link/button anchor inline style combining email-client compatibility
 * with standard link appearance used throughout the newsletter templates.
 */
export const LINK_STYLE = `${EMAIL_CLIENT_STYLES}color: #111111;font-weight: bold;text-decoration: underline;`;

/**
 * Standard image inline style used by image components.
 */
export const IMAGE_STYLE =
  'border: 0px initial;width: 220px;height: 134px;margin: 0px;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;';

/**
 * Builds the standard stringified HTML attributes string for an email image element.
 * @param {string} src - Image source URL.
 * @param {string} altText - Image alt text.
 * @returns {string} Stringified HTML attributes.
 */
export const buildImageAttributes = (src, altText) =>
  stringifyAttributes({
    'data-file-id': '1041068',
    src,
    style: IMAGE_STYLE,
    alt: altText,
  });

/**
 * Wraps an <img> HTML string in the standard paragraph/span/anchor wrapper
 * used for linked email images.
 *
 * Note: the anchor `href` contains the literal placeholder `{href}` that was
 * present in the original component templates. Consumers are expected to
 * perform their own string replacement on the returned HTML if a real URL
 * is needed (e.g. `result.replace('{href}', actualUrl)`).
 *
 * @param {string} imgHtml - The <img> element HTML string.
 * @returns {string} Full paragraph-wrapped image HTML.
 */
export const buildImageWrapper = (imgHtml) =>
  `<p dir="ltr" 
    style="text-align: center;line-height: 150%;margin: 10px 0;padding: 0;${EMAIL_CLIENT_STYLES}color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;"><span style="font-family:georgia,times,times new roman,serif"><span style="font-size:17px"><a href="{href}" target="_blank" style="${LINK_STYLE}">    
        ${imgHtml}
    </a>
    </span></span></p>`;
