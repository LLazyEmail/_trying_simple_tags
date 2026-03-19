import headingComponent from './components/heading';
import imageComponent from './components/image';
import imageLinkedComponent from './components/imageLinked';
import italicComponent from './components/italic';
import linkComponent from './components/link';
import listComponent from './components/list';
import listItemComponent from './components/listItem';
import titleComponent from './components/mainTitle';
import paragraphComponent from './components/paragraph';
import strongComponent from './components/strong';
import subtitleComponent from './components/subtitle';
import separatorComponent from './components/separator';
import buttonComponent from './components/button2';

import atomText from './components/atoms/text';
import atomLink from './components/atoms/link';
import atomImage from './components/atoms/image';
import atomSpacer from './components/atoms/spacer';
import atomDivider from './components/atoms/divider';

const typographyComponents = {
  headingComponent,
  imageComponent,
  imageLinkedComponent,
  italicComponent,
  linkComponent,
  listComponent,
  listItemComponent,
  titleComponent,
  paragraphComponent,
  strongComponent,
  subtitleComponent,
  separatorComponent,
  buttonComponent,

  atoms: {
    text: atomText,
    link: atomLink,
    image: atomImage,
    spacer: atomSpacer,
    divider: atomDivider,
  },
};

export default typographyComponents;
