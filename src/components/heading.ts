import type { HeadingComponent } from '../../types/components';
import { baseHeading } from './base/heading';
import { headingLayout } from './layouts/default';

const headingComponent: HeadingComponent = ({ content }) => {
  const data = baseHeading({ content });
  return headingLayout(data);
};

export default headingComponent;