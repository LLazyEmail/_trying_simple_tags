import type { StrongComponent } from '../../types/components';
import text from './atoms/text';

const strongComponent: StrongComponent = ({ content }) =>
  text({ tag: 'strong', style: 'font-weight: bolder;', content });

export default strongComponent;
