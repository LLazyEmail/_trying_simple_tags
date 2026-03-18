import stringifyAttributes from 'stringify-attributes';
import { LINK_STYLE } from '../helpers';

const buttonComponent = ({ href, content }) => {
  const attributes = {
    class: `mlContentButton`,
    href: href,
    target: `_blank`,
    style: LINK_STYLE,
  };

  const attributesStr = stringifyAttributes(attributes);

  return `<a ${attributesStr} >${content}</a>`;
};

export default buttonComponent;
