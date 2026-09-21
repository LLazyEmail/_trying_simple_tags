/**
 * Component factory - creates components with custom layouts
 * This demonstrates how to use the same base components with different layouts
 */

import { baseItalic, baseLink, baseList, baseListItem, baseParagraph, baseStrong, baseImage, baseHeading } from './base';
import type { BaseItalicProps, BaseLinkProps, BaseListProps, BaseListItemProps, BaseParagraphProps, BaseStrongProps, BaseImageProps, BaseHeadingProps } from './base';

export interface Layouts {
  italicLayout: (data: { content: string }) => string;
  linkLayout: (data: { href: string; content: string }) => string;
  listLayout: (data: { content: string }) => string;
  listItemLayout: (data: { content: string }) => string;
  paragraphLayout: (data: { content: string }) => string;
  strongLayout: (data: { content: string }) => string;
  imageLayout: (data: { src: string; altText: string }) => string;
  headingLayout: (data: { content: string }) => string;
}

export const createComponents = (layouts: Layouts) => {
  return {
    italic: (props: BaseItalicProps) => {
      const data = baseItalic(props);
      return layouts.italicLayout(data);
    },
    link: (props: BaseLinkProps) => {
      const data = baseLink(props);
      return layouts.linkLayout(data);
    },
    list: (props: BaseListProps) => {
      const data = baseList(props);
      return layouts.listLayout(data);
    },
    listItem: (props: BaseListItemProps) => {
      const data = baseListItem(props);
      return layouts.listItemLayout(data);
    },
    paragraph: (props: BaseParagraphProps) => {
      const data = baseParagraph(props);
      return layouts.paragraphLayout(data);
    },
    strong: (props: BaseStrongProps) => {
      const data = baseStrong(props);
      return layouts.strongLayout(data);
    },
    image: (props: BaseImageProps) => {
      const data = baseImage(props);
      return layouts.imageLayout(data);
    },
    heading: (props: BaseHeadingProps) => {
      const data = baseHeading(props);
      return layouts.headingLayout(data);
    },
  };
};
