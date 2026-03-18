import stringifyAttributes from 'stringify-attributes';
import { EMAIL_CLIENT_STYLES } from '../helpers';

const listItemComponent = ({ content }) => {
  const attributes = {
    style: EMAIL_CLIENT_STYLES,
  };

  const attributesStr = stringifyAttributes(attributes);

  const attributes2 = {
    dir: `ltr`,
    role: `presentation`,
    style: `line-height: 125%;margin: 10px 0;padding: 0;${EMAIL_CLIENT_STYLES}color: #111111;font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 18px;text-align: left;`,
  };

  const attributesStr2 = stringifyAttributes(attributes2);

  return `<li ${attributesStr} ><p ${attributesStr2} >${content}</p></li>`;
};

export default listItemComponent;
