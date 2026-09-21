/**
 * Base list item component - contains only the data/logic
 * The layout/rendering is handled by a separate layout function
 */
export interface BaseListItemProps {
  content: string;
}

export const baseListItem = ({ content }: BaseListItemProps) => {
  return {
    type: 'listItem',
    content,
  };
};
