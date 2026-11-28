import { describe, expect, test } from 'vitest';
import image from '../src/components/image';
import imageLinked from '../src/components/imageLinked';

describe('image boundary', () => {
  test('a plain image is not an anchor', () => {
    const html = image({ src: 'img.png', altText: 'alt' });
    expect(html).toContain('<img');
    expect(html).not.toContain('<a');
  });

  test('a linked image wraps that image in an anchor', () => {
    const html = imageLinked({ src: 'img.png', altText: 'alt', href: 'https://x.com' });
    expect(html).toContain('<img');
    expect(html).toContain('<a');
    expect(html).toContain('href="https://x.com"');
  });
});
