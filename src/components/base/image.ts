/**
 * Base image component - contains only the data/logic
 * The layout/rendering is handled by a separate layout function
 */
export interface BaseImageProps {
  src: string;
  altText: string;
}

export const baseImage = ({ src, altText }: BaseImageProps) => {
  return {
    type: 'image',
    src,
    altText,
  };
};
