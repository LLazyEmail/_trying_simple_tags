import typographyComponents from './components';

export { atoms, text, link, image, spacer, divider } from './components/atoms';
export type {
  TextAtomProps,
  LinkAtomProps,
  ImageAtomProps,
  SpacerAtomProps,
  DividerAtomProps,
} from './components/atoms';
/** @deprecated Use LinkAtomProps. */
export type { LinkProps as DeprecatedLinkAtomProps } from './components/atoms';
/** @deprecated Use ImageAtomProps. */
export type { ImageProps as DeprecatedImageAtomProps } from './components/atoms';

export default typographyComponents;

export { RenderError } from './errors';
export { Pipeline } from './pipeline';
export {
  EmailRenderer,
  renderTag,
  headerRenderer,
  footerRenderer,
  contentBlockRenderer,
  twoColumnRenderer,
  heroRenderer,
} from './tags/render';
export type {
  TextAlign,
  BaseTag,
  HeaderTag,
  FooterTag,
  ContentBlockTag,
  Tag,
  TwoColumnLayout,
  HeroSection,
  IRenderer,
  IEmailRenderer,
  PipelineStep,
  IPipeline,
} from '../types';

export type {
  HtmlString,
  TypographyComponent,
  HeadingProps,
  HeadingComponent,
  TitleProps,
  TitleComponent,
  SubtitleProps,
  SubtitleComponent,
  ParagraphProps,
  ParagraphComponent,
  ParagraphUpdatedProps,
  ParagraphUpdatedComponent,
  StrongProps,
  StrongComponent,
  ItalicProps,
  ItalicComponent,
  ImageProps,
  ImageComponent,
  ImageLinkedProps,
  ImageLinkedComponent,
  MainTitleImageProps,
  MainTitleImageComponent,
  ButtonProps,
  ButtonComponent,
  LinkProps,
  LinkComponent,
  SeparatorProps,
  SeparatorComponent,
  ListProps,
  ListComponent,
  ListItemProps,
  ListItemComponent,
  TypographyComponents,
} from '@llazyemail/component-types';

export { createComponents } from './components/factory';
export type { Layouts } from './components/factory';

export * as defaultLayouts from './components/layouts/default';
export * as minimalLayouts from './components/layouts/minimal';
