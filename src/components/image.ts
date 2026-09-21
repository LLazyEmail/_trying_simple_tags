import type { ImageComponent } from '../../types/components';
import { baseImage } from './base/image';
import { imageLayout } from './layouts/default';

const imageComponent: ImageComponent = ({ src, altText }) => {
  const data = baseImage({ src, altText });
  return imageLayout(data);
};

export default imageComponent;
