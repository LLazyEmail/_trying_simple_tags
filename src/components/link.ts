import type { LinkComponent } from '@llazyemail/component-types';
import { baseLink } from './base/link';
import { linkLayout } from './layouts/default';

const linkComponent: LinkComponent = ({ href, content }) =>
  linkLayout(baseLink({ href, content }));

export default linkComponent;
