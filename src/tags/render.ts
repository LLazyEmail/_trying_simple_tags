import type { ContentBlockTag, FooterTag, HeaderTag, Tag } from '../../types/tags';
import type { HeroSection, TwoColumnLayout } from '../../types/layouts';
import type { IEmailRenderer, IRenderer } from '../../types/renderer';
import { RenderError } from '../errors';

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"');

const styleToString = (style?: Record<string, string>, extra?: string) => {
  const parts = [
    ...Object.entries(style ?? {}).map(([key, value]) => `${key}:${value}`),
    ...(extra ? [extra] : []),
  ];
  return parts.length ? ` style="${escapeHtml(parts.join(';'))}"` : '';
};

const openAttrs = (tag: { id?: string; className?: string }, styleAttr: string) => {
  const id = tag.id ? ` id="${escapeHtml(tag.id)}"` : '';
  const className = tag.className ? ` class="${escapeHtml(tag.className)}"` : '';
  return `${id}${className}${styleAttr}`;
};

const requireText = (tagName: string, value: string | undefined, label: string) => {
  if (!value || !value.trim()) {
    throw new RenderError(tagName, `${label} is required`);
  }
  return value;
};

export const headerRenderer: IRenderer<HeaderTag> = {
  render(tag) {
    const text = requireText('header', tag.text, 'text');
    const align = tag.align ? `text-align:${tag.align}` : '';
    return `<h1${openAttrs(tag, styleToString(tag.style, align))}>${escapeHtml(text)}</h1>`;
  },
};

export const footerRenderer: IRenderer<FooterTag> = {
  render(tag) {
    const text = requireText('footer', tag.text, 'text');
    return `<footer${openAttrs(tag, styleToString(tag.style))}>${escapeHtml(text)}</footer>`;
  },
};

export const contentBlockRenderer: IRenderer<ContentBlockTag> = {
  render(tag) {
    const content = requireText('content', tag.content, 'content');
    const width = tag.width != null ? `width:${tag.width}px` : '';
    return `<div${openAttrs(tag, styleToString(tag.style, width))}>${content}</div>`;
  },
};

export const twoColumnRenderer: IRenderer<TwoColumnLayout> = {
  render(tag) {
    const gap = tag.gap ?? 16;
    return `<table${openAttrs(tag, styleToString(tag.style, 'width:100%;border-collapse:collapse'))}><tr><td style="width:50%;vertical-align:top;padding-right:${gap / 2}px">${tag.left}</td><td style="width:50%;vertical-align:top;padding-left:${gap / 2}px">${tag.right}</td></tr></table>`;
  },
};

export const heroRenderer: IRenderer<HeroSection> = {
  render(tag) {
    const title = requireText('hero', tag.title, 'title');
    const align = tag.align ? `text-align:${tag.align}` : '';
    const image = tag.imageSrc
      ? `<img src="${escapeHtml(tag.imageSrc)}" alt="${escapeHtml(tag.imageAlt ?? '')}" />`
      : '';
    const subtitle = tag.subtitle ? `<p>${escapeHtml(tag.subtitle)}</p>` : '';
    return `<section${openAttrs(tag, styleToString(tag.style, align))}>${image}<h1>${escapeHtml(title)}</h1>${subtitle}</section>`;
  },
};

export class EmailRenderer implements IEmailRenderer {
  renderAll(tags: Tag[]): string {
    return tags.map((tag) => renderTag(tag)).join('');
  }
}

export const renderTag = (tag: Tag): string => {
  switch (tag.kind) {
    case 'header':
      return headerRenderer.render(tag);
    case 'footer':
      return footerRenderer.render(tag);
    case 'content':
      return contentBlockRenderer.render(tag);
    case 'two-column':
      return twoColumnRenderer.render(tag);
    case 'hero':
      return heroRenderer.render(tag);
    default: {
      const unknown: never = tag;
      throw new RenderError('tag', `unsupported tag ${JSON.stringify(unknown)}`);
    }
  }
};
