import stringifyAttributes from 'stringify-attributes';
import type { ButtonComponent } from '../../types/components';
const buttonComponent: ButtonComponent = ({ href, content }) => {
  const attributes = {
    class: `mlContentButton`,
    href: href,
    target: `_blank`,
    style: `mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #111111;font-weight: bold;text-decoration: underline;`,
  };

  const attributesStr = stringifyAttributes(attributes);

  return `<a ${attributesStr} >${content}</a>`;
};

export default buttonComponent;
