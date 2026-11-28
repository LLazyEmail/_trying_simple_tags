type AttrValue = string | number | boolean | null | undefined | Array<string | number>;

declare module 'stringify-attributes' {
  export default function stringifyAttributes(attributes: Record<string, AttrValue>): string;
}
