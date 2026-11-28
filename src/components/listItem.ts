import type { ListItemComponent } from '@llazyemail/component-types';
import { baseListItem } from './base/listItem';
import { listItemLayout } from './layouts/default';

const listItemComponent: ListItemComponent = ({ content }) => {
  const data = baseListItem({ content });
  return listItemLayout(data);
};

export default listItemComponent;
