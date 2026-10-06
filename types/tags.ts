import type { HeroSection, TwoColumnLayout } from './layouts';

export type TextAlign = 'left' | 'center' | 'right';

export interface BaseTag {
  id?: string;
  className?: string;
  style?: Record<string, string>;
}

export interface HeaderTag extends BaseTag {
  kind: 'header';
  text: string;
  align?: TextAlign;
}

export interface FooterTag extends BaseTag {
  kind: 'footer';
  text: string;
}

export interface ContentBlockTag extends BaseTag {
  kind: 'content';
  content: string;
  width?: number;
}

export type Tag = HeaderTag | FooterTag | ContentBlockTag | TwoColumnLayout | HeroSection;
