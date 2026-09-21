import type { StrongComponent } from '../../types/components';
import { baseStrong } from './base/strong';
import { strongLayout } from './layouts/default';

const strongComponent: StrongComponent = ({ content }) => {
  const data = baseStrong({ content });
  return strongLayout(data);
};

export default strongComponent;
