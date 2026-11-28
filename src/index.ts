import typographyComponents from './components';

export { atoms, text, link, image, spacer, divider } from './components/atoms';
export type { TextProps, LinkProps, ImageProps, SpacerProps, DividerProps } from './components/atoms';

export default typographyComponents;

export { RenderError } from './errors';
export { Pipeline } from './pipeline';
export { EmailRenderer, renderTag, headerRenderer, footerRenderer, contentBlockRenderer, twoColumnRenderer, heroRenderer } from './tags/render';
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
  ImageProps as ComponentImageProps,
  ImageComponent,
  ImageLinkedProps,
  ImageLinkedComponent,
  MainTitleImageProps,
  MainTitleImageComponent,
  ButtonProps,
  ButtonComponent,
  LinkProps as ComponentLinkProps,
  LinkComponent,
  SeparatorProps,
  SeparatorComponent,
  ListProps,
  ListComponent,
  ListItemProps,
  ListItemComponent,
  TypographyComponents,
} from '@llazyemail/component-types';
