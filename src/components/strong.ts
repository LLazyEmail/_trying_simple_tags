import type { StrongComponent } from '@llazyemail/component-types';
import text from './atoms/text';

const strongComponent: StrongComponent = ({ content }) =>
  text({ tag: 'strong', style: 'font-weight: bolder;', content });

export default strongComponent;
