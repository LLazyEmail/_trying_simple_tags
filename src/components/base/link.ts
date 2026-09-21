/**
 * Base link component - contains only the data/logic
 * The layout/rendering is handled by a separate layout function
 */
export interface BaseLinkProps {
  href: string;
  content: string;
}

export const baseLink = ({ href, content }: BaseLinkProps) => {
  return {
    type: 'link',
    href,
    content,
  };
};
