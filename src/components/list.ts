import type { ListComponent } from '../../types/components';
const listComponent = ({ content }) => {
  return `<ul dir="ltr">${content}</ul>`;
};

export default listComponent;
