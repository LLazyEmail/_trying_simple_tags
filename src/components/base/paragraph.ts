/**
 * Base paragraph component - contains only the data/logic
 * The layout/rendering is handled by a separate layout function
 */
export interface BaseParagraphProps {
  content: string;
}

export const baseParagraph = ({ content }: BaseParagraphProps) => {
  return {
    type: 'paragraph',
    content,
  };
};
