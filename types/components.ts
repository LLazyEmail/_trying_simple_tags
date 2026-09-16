/**
 * Typed prop contracts for the plain-JS typography components in
 * `src/components/`.
 *
 * These are typed AS-IS — they mirror current runtime behavior exactly,
 * not a proposed redesign. Where a component's real behavior differs from
 * its neighbors (e.g. `altText` required in one, optional in another),
 * that inconsistency is preserved and called out below rather than
 * silently "fixed". Fix the component first if you want the type to
 * change — that keeps this file a safe, non-breaking addition you can
 * merge today without touching runtime behavior.
 *
 * Drop this in as `src/types/components.ts` (or wire it up via JSDoc
 * `@type` imports if you want to type-check the existing .js files
 * without renaming them yet — ask and I'll draft that version too).
 */

/** Every component returns a raw HTML string, ready to drop into a template. */
export type HtmlString = string;

/** Shared shape: a plain function taking a props object, returning HTML. */
export type TypographyComponent<Props> = (props: Props) => HtmlString;

// ---------------------------------------------------------------------------
// heading.js — headingComponent  →  <h3 class="mc-toc-title">
// ---------------------------------------------------------------------------
export interface HeadingProps {
  /** Rendered inside the <h3>. May itself be an HTML string (e.g. nested <strong>). */
  content: string;
}
export type HeadingComponent = TypographyComponent<HeadingProps>;

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
// paragraphComponentUpdated.js — paragraph + leading <img>
// NOT in the README's component table — this is an undocumented variant.
// `src` is rendered unconditionally (no fallback branch), so it's typed as
// required even though the JS itself won't throw if it's missing at runtime.
// Imports IMAGE_STYLE from '../helpers' — a module the README's project
// structure doesn't mention either; worth reconciling docs against reality.
// ---------------------------------------------------------------------------
export interface ParagraphWithImageProps {
  content: string;
  src: string;
  /** Rendered as-is even when undefined. Recommend always passing this for accessibility. */
  altText?: string;
}
export type ParagraphWithImageComponent = TypographyComponent<ParagraphWithImageProps>;

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
// `content` is expected to already be one or more listItemComponent()
// outputs concatenated together — this wrapper does no iteration itself,
// so the type can't express "array of items" without changing behavior.
// ---------------------------------------------------------------------------
export interface ListProps {
  /** Pre-rendered <li> markup, e.g. `items.map(listItemComponent).join('')`. */
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
// README describes this as a "horizontal *** separator", but the real
// component renders an <img> whenever `src` is passed, and only falls back
// to a literal "***" when it isn't. The whole props object is optional
// (defaults to {} in the function signature) — typed that way below.
// ---------------------------------------------------------------------------
export interface SeparatorProps {
  src?: string;
  altText?: string;
}
export type SeparatorComponent = (props?: SeparatorProps) => HtmlString;

// ---------------------------------------------------------------------------
// mainTitleImage.js — mainTitleImageComponent
// NOT in the README's component table either. Renders a fixed 220x134
// linked image with a hardcoded `data-file-id="1041068"` and a literal
// `{href}` in the anchor (not `${href}` — no prop backs it). That may be an
// intentional placeholder meant for a downstream string-replace step
// (this org has separate "replacer" packages elsewhere), or it may be a
// stale/broken component. Worth confirming with whoever owns it before
// this type gets treated as a real contract — flagged, not assumed.
// ---------------------------------------------------------------------------
export interface MainTitleImageProps {
  src: string;
  altText?: string;
}
export type MainTitleImageComponent = TypographyComponent<MainTitleImageProps>;

// ---------------------------------------------------------------------------
// button2.js — buttonComponent  →  <a class="mlContentButton">
// File is named `button2.js` but exports the same `buttonComponent` name
// the README documents. Worth confirming this is the file actually
// aggregated in components.js, and that there isn't a stale `button.js`
// (the "2" suffix usually means an earlier version is still lying around).
// ---------------------------------------------------------------------------
export interface ButtonProps {
  href: string;
  content: string;
}
export type ButtonComponent = TypographyComponent<ButtonProps>;

// ---------------------------------------------------------------------------
// Aggregate map — INFERRED, not yet verified against components.js/index.js.
// Key names assume components.js re-exports each const under its own name.
// I haven't seen components.js, index.js, or config.js — fetch those too
// and I'll correct this block against the real export names.
// ---------------------------------------------------------------------------
export interface TypographyComponents {
  headingComponent: HeadingComponent;
  subtitleComponent: SubtitleComponent;
  paragraphComponent: ParagraphComponent;
  paragraphComponentUpdated: ParagraphWithImageComponent;
  strongComponent: StrongComponent;
  italicComponent: ItalicComponent;
  linkComponent: LinkComponent;
  listComponent: ListComponent;
  listItemComponent: ListItemComponent;
  separatorComponent: SeparatorComponent;
  mainTitleImageComponent: MainTitleImageComponent;
  buttonComponent: ButtonComponent;
}