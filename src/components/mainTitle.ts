import type { TitleComponent } from '@llazyemail/component-types';
import { baseTitle } from './base/title';
import { titleLayout } from './layouts/default';

const titleComponent: TitleComponent = ({ content }) => titleLayout(baseTitle({ content }));

export default titleComponent;
