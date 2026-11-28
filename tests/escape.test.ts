import { describe, expect, test } from 'vitest';
import imageComponent from '../src/components/image';
import imageLinkedComponent from '../src/components/imageLinked';
import { renderTag } from '../src/tags/render';

const amp = '\u0026amp;';
const lt = '\u0026lt;';
const gt = '\u0026gt;';
const quot = '\u0026quot;';

describe('attribute and text escaping', () => {
  test('escapes ampersand, brackets, and quotes in image src and alt', () => {
    const result = imageComponent({
      src: 'https://x.com/img?a=1&b=2',
      altText: 'say "hi" <tag>',
    });
    expect(result).toContain('src="https://x.com/img?a=1' + amp + 'b=2"');
    expect(result).toContain(
      'alt="say ' + quot + 'hi' + quot + ' ' + lt + 'tag' + gt + '"',
    );
    expect(result).not.toContain('a=1&b=2');
  });

  test('escapes href on a linked image', () => {
    const result = imageLinkedComponent({
      src: 'img.png',
      altText: 'alt',
      href: 'https://x.com/?a=1&b=2',
    });
    expect(result).toContain('href="https://x.com/?a=1' + amp + 'b=2"');
  });

  test('escapes header tag text', () => {
    const result = renderTag({ kind: 'header', text: '<script>"&"' });
    expect(result).toContain(lt + 'script' + gt + quot + amp + quot);
    expect(result).not.toContain('<script>');
  });
});
