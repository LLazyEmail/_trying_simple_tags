import type { ItalicComponent } from '@llazyemail/component-types';
import { baseItalic } from './base/italic';
import { italicLayout } from './layouts/default';

const italicComponent: ItalicComponent = ({ content }) => italicLayout(baseItalic({ content }));

export default italicComponent;
