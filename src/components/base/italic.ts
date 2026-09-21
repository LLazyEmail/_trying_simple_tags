/**
 * Base italic component - contains only the data/logic
 * The layout/rendering is handled by a separate layout function
 */
export interface BaseItalicProps {
  content: string;
}

export const baseItalic = ({ content }: BaseItalicProps) => {
  return {
    type: 'italic',
    content,
  };
};
