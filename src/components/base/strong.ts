/**
 * Base strong component - contains only the data/logic
 * The layout/rendering is handled by a separate layout function
 */
export interface BaseStrongProps {
  content: string;
}

export const baseStrong = ({ content }: BaseStrongProps) => {
  return {
    type: 'strong',
    content,
  };
};
