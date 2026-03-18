import { LINK_STYLE } from '../helpers';

const linkComponent = ({ href, content }) => {
  return `<a href="${href}" target="_blank" style="${LINK_STYLE}">${content}</a>`;
};

export default linkComponent;
