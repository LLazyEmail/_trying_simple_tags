import type { LinkComponent } from '../../types/components';
import { baseLink } from './base/link';
import { linkLayout } from './layouts/default';

const linkComponent: LinkComponent = ({ href, content }) => {
  const data = baseLink({ href, content });
  return linkLayout(data);
};

export default linkComponent;
