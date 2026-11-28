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
