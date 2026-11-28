export interface BaseTitleProps {
  content: string;
}

export const baseTitle = ({ content }: BaseTitleProps) => ({
  type: 'title',
  content,
});
