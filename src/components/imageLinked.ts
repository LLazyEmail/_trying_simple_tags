import type { ImageLinkedComponent } from '@llazyemail/component-types';
import link from './atoms/link';
import { LINK_STYLE } from '../helpers';
import { escapeAttr } from '../escape';
import { renderEmailImage, wrapEmailImage } from './image';

/**
 * Linked image: the link atom is the anchor wrapper around the image atom.
 * `href` defaults to the `{href}` placeholder used by newsletter templates.
 */
const imageLinkedComponent: ImageLinkedComponent = ({ src, altText, href = '{href}' }) => {
  const img = renderEmailImage({ src, altText });
  const anchor = link({
    href: escapeAttr(href),
    target: '_blank',
    content: img,
    style: LINK_STYLE,
  });

  return wrapEmailImage(anchor);
};

export default imageLinkedComponent;
