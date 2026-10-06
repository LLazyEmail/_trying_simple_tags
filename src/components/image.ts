import type { ImageComponent } from '../../types/components';
import image from './atoms/image';
import text from './atoms/text';
import { EMAIL_CLIENT_STYLES, IMAGE_STYLE } from '../helpers';

const IMAGE_PARAGRAPH_STYLE = `text-align: center;line-height: 150%;margin: 10px 0;padding: 0;${EMAIL_CLIENT_STYLES}color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;`;
const IMAGE_FONT_STYLE = 'font-family:georgia,times,times new roman,serif';
const IMAGE_SIZE_STYLE = 'font-size:17px';

const escapeAttr = (value: string) =>
  value
    .replace(/&/g, '&')
    .replace(/"/g, '"')
    .replace(/</g, '<')
    .replace(/>/g, '>');

/** Email <img> built from the image atom. Not linked. */
export const renderEmailImage = ({ src, altText = '' }: { src: string; altText?: string }) =>
  image({
    src: escapeAttr(src),
    alt: escapeAttr(altText),
    style: IMAGE_STYLE,
    attributes: 'data-file-id="1041068"',
  });

/** Paragraph/span chrome around an image or a linked image. */
export const wrapEmailImage = (content: string) =>
  text({
    tag: 'p',
    attributes: 'dir="ltr"',
    style: IMAGE_PARAGRAPH_STYLE,
    content: text({
      tag: 'span',
      style: IMAGE_FONT_STYLE,
      content: text({
        tag: 'span',
        style: IMAGE_SIZE_STYLE,
        content,
      }),
    }),
  });

const imageComponent: ImageComponent = ({ src, altText }) =>
  wrapEmailImage(renderEmailImage({ src, altText }));

export default imageComponent;
