import type { ParagraphComponent } from '@llazyemail/component-types';
import { baseParagraph } from './base/paragraph';
import { paragraphLayout } from './layouts/default';

const paragraphComponent: ParagraphComponent = ({ content }) => {
  const data = baseParagraph({ content });
  return paragraphLayout(data);
};

export default paragraphComponent;
