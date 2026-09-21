/**
 * Base heading component - contains only the data/logic
 * The layout/rendering is handled by a separate layout function
 */
export interface BaseHeadingProps {
  content: string;
}

export const baseHeading = ({ content }: BaseHeadingProps) => {
  return {
    type: 'heading',
    content,
  };
};
