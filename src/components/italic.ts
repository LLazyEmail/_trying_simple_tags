import type { ItalicComponent } from '@llazyemail/component-types';
import text from './atoms/text';

const italicComponent: ItalicComponent = ({ content }) => text({ tag: 'i', content });

export default italicComponent;
