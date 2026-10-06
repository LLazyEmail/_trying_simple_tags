import type { LinkComponent } from '../../types/components';
import link from './atoms/link';
import { LINK_STYLE } from '../helpers';

const linkComponent: LinkComponent = ({ href, content }) =>
  link({
    href,
    content,
    target: '_blank',
    rel: '',
    style: LINK_STYLE,
  });

export default linkComponent;
