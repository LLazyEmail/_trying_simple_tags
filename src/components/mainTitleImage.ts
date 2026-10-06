import type { MainTitleImageComponent } from '../../types/components';
import imageComponent from './image';

/** Same unlinked image as imageComponent. Use imageLinkedComponent for an anchor wrapper. */
const mainTitleImageComponent: MainTitleImageComponent = (props) => imageComponent(props);

export default mainTitleImageComponent;
