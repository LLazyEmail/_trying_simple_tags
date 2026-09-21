import type { ItalicComponent } from '../../types/components';
import { baseItalic } from './base/italic';
import { italicLayout } from './layouts/default';

const italicComponent: ItalicComponent = ({ content }) => {
  const data = baseItalic({ content });
  return italicLayout(data);
};

export default italicComponent;
