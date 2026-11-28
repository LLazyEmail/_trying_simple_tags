import type { ListComponent } from '@llazyemail/component-types';
import text from './atoms/text';

const listComponent: ListComponent = ({ content }) =>
  text({ tag: 'ul', attributes: 'dir="ltr"', content });

export default listComponent;
