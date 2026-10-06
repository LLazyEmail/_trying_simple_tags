import type { ListComponent } from '../../types/components';
import text from './atoms/text';

const listComponent: ListComponent = ({ content }) =>
  text({ tag: 'ul', attributes: 'dir="ltr"', content });

export default listComponent;
