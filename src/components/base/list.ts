/**
 * Base list component - contains only the data/logic
 * The layout/rendering is handled by a separate layout function
 */
export interface BaseListProps {
  content: string;
}

export const baseList = ({ content }: BaseListProps) => {
  return {
    type: 'list',
    content,
  };
};
