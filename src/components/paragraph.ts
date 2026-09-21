import type { ParagraphComponent } from '../../types/components';
import { baseParagraph } from './base/paragraph';
import { paragraphLayout } from './layouts/default';

const paragraphComponent: ParagraphComponent = ({ content }) => {
  const data = baseParagraph({ content });
  return paragraphLayout(data);
};

export default paragraphComponent;
