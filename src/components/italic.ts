import type { ItalicComponent } from '../../types/components';
import text from './atoms/text';

const italicComponent: ItalicComponent = ({ content }) => text({ tag: 'i', content });

export default italicComponent;
