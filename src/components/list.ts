import type { ListComponent } from '@llazyemail/component-types';
import { baseList } from './base/list';
import { listLayout } from './layouts/default';

const listComponent: ListComponent = ({ content }) =>
  listLayout(baseList({ content }));

export default listComponent;
