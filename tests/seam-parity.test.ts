import { describe, expect, test } from 'vitest';
import { createComponents } from '../src/components/factory';
import * as defaultLayouts from '../src/components/layouts/default';
import italic from '../src/components/italic';
import link from '../src/components/link';
import list from '../src/components/list';
import listItem from '../src/components/listItem';
import paragraph from '../src/components/paragraph';
import strong from '../src/components/strong';
import image from '../src/components/image';
import heading from '../src/components/heading';
import title from '../src/components/mainTitle';

describe('default seam matches public components', () => {
  const themed = createComponents(defaultLayouts);

  test('text components', () => {
    expect(themed.italic({ content: 'i' })).toBe(italic({ content: 'i' }));
    expect(themed.link({ href: 'https://x.com', content: 'go' })).toBe(
      link({ href: 'https://x.com', content: 'go' }),
    );
    expect(themed.list({ content: '<li>a</li>' })).toBe(list({ content: '<li>a</li>' }));
    expect(themed.listItem({ content: 'a' })).toBe(listItem({ content: 'a' }));
    expect(themed.paragraph({ content: 'p' })).toBe(paragraph({ content: 'p' }));
    expect(themed.strong({ content: 'b' })).toBe(strong({ content: 'b' }));
    expect(themed.heading({ content: 'h' })).toBe(heading({ content: 'h' }));
    expect(themed.title({ content: 't' })).toBe(title({ content: 't' }));
  });

  test('image', () => {
    expect(themed.image({ src: 'img.png', altText: 'alt' })).toBe(
      image({ src: 'img.png', altText: 'alt' }),
    );
  });
});
