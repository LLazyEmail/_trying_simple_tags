/**
 * Typed prop contracts for the typography components actually exported by
 * `src/components.js` (verified against that file directly — this is the
 * real public API surface, confirmed, not inferred).
 *
 * These are typed AS-IS — they mirror current runtime behavior exactly,
 * not a proposed redesign. Inconsistencies between components are
 * preserved and called out rather than silently "fixed", so this file
 * stays a safe, non-breaking addition. Fix the component first if you
 * want the type to change.
 */

export type HtmlString = string;
export type TypographyComponent<Props> = (props: Props) => HtmlString;

// ---------------------------------------------------------------------------
// heading.js — headingComponent  →  <h3 class="mc-toc-title">
// ---------------------------------------------------------------------------
export interface HeadingProps {
  content: string;
}
export type HeadingComponent = TypographyComponent<HeadingProps>;

// ---------------------------------------------------------------------------
// mainTitle.js — titleComponent  →  <h1 class="mc-toc-title">
// (the README's "titleComponent" — file is named mainTitle.js, not title.js)
// ---------------------------------------------------------------------------
export interface TitleProps {
  content: string;
}
export type TitleComponent = TypographyComponent<TitleProps>;

// ---------------------------------------------------------------------------
// subtitle.js — subtitleComponent  →  <p><span><span><strong>
// ---------------------------------------------------------------------------
export interface SubtitleProps {
  content: string;
}
export type SubtitleComponent = TypographyComponent<SubtitleProps>;

// ---------------------------------------------------------------------------
// paragraph.js — paragraphComponent  →  plain text/HTML paragraph, no image
// ---------------------------------------------------------------------------
export interface ParagraphProps {
  content: string;
}
export type ParagraphComponent = TypographyComponent<ParagraphProps>;

// ---------------------------------------------------------------------------
// strong.js — strongComponent  →  <strong style="font-weight: bolder;">
// ---------------------------------------------------------------------------
export interface StrongProps {
  content: string;
}
export type StrongComponent = TypographyComponent<StrongProps>;

// ---------------------------------------------------------------------------
// italic.js — italicComponent  →  <i>
// ---------------------------------------------------------------------------
export interface ItalicProps {
  content: string;
}
export type ItalicComponent = TypographyComponent<ItalicProps>;

// ---------------------------------------------------------------------------
// link.js — linkComponent  →  <a target="_blank">
// ---------------------------------------------------------------------------
export interface LinkProps {
  href: string;
  content: string;
}
export type LinkComponent = TypographyComponent<LinkProps>;

// ---------------------------------------------------------------------------
// list.js — listComponent  →  <ul>
// `content` must already be one or more listItemComponent() outputs
// concatenated together — this wrapper does no iteration itself.
// ---------------------------------------------------------------------------
export interface ListProps {
  content: string;
}
export type ListComponent = TypographyComponent<ListProps>;

// ---------------------------------------------------------------------------
// listItem.js — listItemComponent  →  <li><p>
// ---------------------------------------------------------------------------
export interface ListItemProps {
  content: string;
}
export type ListItemComponent = TypographyComponent<ListItemProps>;

// ---------------------------------------------------------------------------
// separator.js — separatorComponent
// README calls this a "horizontal *** separator"; the real component
// renders an <img> whenever `src` is passed, and only falls back to a
// literal "***" otherwise. Whole props object is optional (defaults to {}).
// ---------------------------------------------------------------------------
export interface SeparatorProps {
  src?: string;
  altText?: string;
}
export type SeparatorComponent = (props?: SeparatorProps) => HtmlString;

// ---------------------------------------------------------------------------
// button2.js — buttonComponent  →  <a class="mlContentButton">
// Confirmed this IS the aggregated button component (no stray button.js).
// ---------------------------------------------------------------------------
export interface ButtonProps {
  href: string;
  content: string;
}
export type ButtonComponent = TypographyComponent<ButtonProps>;

// ---------------------------------------------------------------------------
// image.js — imageComponent  &  imageLinked.js — imageLinkedComponent
//
// ⚠ ACTION ITEM, not just a typing note: these two are byte-for-byte
// identical implementations exported under different names. Both:
//   - hardcode data-file-id="1041068"
//   - render a literal `{href}` in the anchor (not `${href}`) — no prop
//     backs it, so every real call ships that literal string in the output
//     HTML, unless something downstream string-replaces `{href}` later
//     (this org has separate "replacer" packages in sibling repos, so that
//     may be intentional — worth confirming with whoever owns this before
//     treating it as either "fine" or "broken").
// Typed identically below since the implementations are identical. If
// they're meant to diverge (e.g. imageLinked should accept its own href),
// that's a behavior fix to make in the .js first — the type should follow,
// not lead.
// ---------------------------------------------------------------------------
export interface ImageProps {
  src: string;
  altText?: string;
}
export type ImageComponent = TypographyComponent<ImageProps>;

export interface ImageLinkedProps {
  src: string;
  altText?: string;
}
export type ImageLinkedComponent = TypographyComponent<ImageLinkedProps>;

// ---------------------------------------------------------------------------
// Aggregate map — verified directly against src/components.js.
//
// `atoms` is a second, undocumented component system living at
// src/components/atoms/{text,link,image,spacer,divider}.js. Not typed here
// yet — I haven't seen those files. Send them over and I'll extend this
// (and flag whether they overlap with the components above, given the
// duplication already found between image.js and imageLinked.js).
// ---------------------------------------------------------------------------
export interface TypographyComponents {
  headingComponent: HeadingComponent;
  imageComponent: ImageComponent;
  imageLinkedComponent: ImageLinkedComponent;
  italicComponent: ItalicComponent;
  linkComponent: LinkComponent;
  listComponent: ListComponent;
  listItemComponent: ListItemComponent;
  titleComponent: TitleComponent;
  paragraphComponent: ParagraphComponent;
  strongComponent: StrongComponent;
  subtitleComponent: SubtitleComponent;
  separatorComponent: SeparatorComponent;
  buttonComponent: ButtonComponent;
  /** TODO: type once atoms/*.js are reviewed. */
  atoms: {
    text: unknown;
    link: unknown;
    image: unknown;
    spacer: unknown;
    divider: unknown;
  };
}

// ---------------------------------------------------------------------------
// NOT exported by components.js — confirmed dead code, kept out of
// TypographyComponents above. Either wire these up or delete the files;
// right now they're untyped, untested, and unreachable from the public API.
// ---------------------------------------------------------------------------

/** mainTitleImage.js — never imported in components.js. */
export interface UnusedMainTitleImageProps {
  src: string;
  altText?: string;
}

/** paragraphComponentUpdated.js — never imported in components.js. Imports
 *  IMAGE_STYLE from '../helpers', a module the README doesn't mention. */
export interface UnusedParagraphWithImageProps {
  content: string;
  src: string;
  altText?: string;
}