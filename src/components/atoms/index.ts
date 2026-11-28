export { default as text } from './text';
export { default as link } from './link';
export { default as image } from './image';
export { default as spacer } from './spacer';
export { default as divider } from './divider';

export type { TextAtomProps, TextProps } from './text';
export type { LinkAtomProps, LinkProps } from './link';
export type { ImageAtomProps, ImageProps } from './image';
export type { SpacerAtomProps, SpacerProps } from './spacer';
export type { DividerAtomProps, DividerProps } from './divider';

import text from './text';
import link from './link';
import image from './image';
import spacer from './spacer';
import divider from './divider';

export const atoms = {
  text,
  link,
  image,
  spacer,
  divider,
};
