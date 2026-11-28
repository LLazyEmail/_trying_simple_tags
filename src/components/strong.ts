import type { StrongComponent } from '@llazyemail/component-types';
import { baseStrong } from './base/strong';
import { strongLayout } from './layouts/default';

const strongComponent: StrongComponent = ({ content }) =>
  strongLayout(baseStrong({ content }));

export default strongComponent;
