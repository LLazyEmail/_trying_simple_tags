import type { ListComponent } from '../../types/components';
import { baseList } from './base/list';
import { listLayout } from './layouts/default';

const listComponent: ListComponent = ({ content }) => {
  const data = baseList({ content });
  return listLayout(data);
};

export default listComponent;
