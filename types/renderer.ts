import type { BaseTag, Tag } from './tags';

export interface IRenderer<T extends BaseTag> {
  render(tag: T): string;
}

export interface IEmailRenderer {
  renderAll(tags: Tag[]): string;
}
