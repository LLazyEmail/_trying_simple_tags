import type { BaseTag, TextAlign } from './tags';

/** Two email columns. `left` and `right` are already rendered HTML. */
export interface TwoColumnLayout extends BaseTag {
  kind: 'two-column';
  left: string;
  right: string;
  gap?: number;
}

/** Hero block: title, optional subtitle, optional image. */
export interface HeroSection extends BaseTag {
  kind: 'hero';
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  align?: TextAlign;
}
