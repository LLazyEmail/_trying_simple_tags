/**
 * Regression tests for stringify-attributes behavior across components.
 *
 * stringify-attributes v5 omits null/undefined attributes.
 */

import stringifyAttributes from 'stringify-attributes';

import buttonComponent from '../src/components/button2';
import headingComponent from '../src/components/heading';
import imageComponent from '../src/components/image';
import imageLinkedComponent from '../src/components/imageLinked';
import listItemComponent from '../src/components/listItem';
import separatorComponent from '../src/components/separator';
import subtitleComponent from '../src/components/subtitle';

describe('stringify-attributes edge cases', () => {
  describe('false values', () => {
    test('false attribute value is omitted from output', () => {
      const result = stringifyAttributes({ disabled: false });
      expect(result).not.toContain('disabled');
    });

    test('other attributes are still included when one value is false', () => {
      const result = stringifyAttributes({ class: 'btn', hidden: false });
      expect(result).toContain('class="btn"');
      expect(result).not.toContain('hidden');
    });
  });

  describe('true values (boolean attributes)', () => {
    test('true attribute value produces a bare attribute with no value', () => {
      const result = stringifyAttributes({ disabled: true });
      expect(result).toContain('disabled');
      expect(result).not.toContain('disabled="');
    });

    test('multiple boolean attributes are both included', () => {
      const result = stringifyAttributes({ disabled: true, readonly: true });
      expect(result).toContain('disabled');
      expect(result).toContain('readonly');
    });
  });

  describe('undefined values', () => {
    test('undefined value is omitted', () => {
      const result = stringifyAttributes({ alt: undefined });
      expect(result).not.toContain('alt');
    });

    test('src attribute set to undefined is omitted', () => {
      const result = stringifyAttributes({ src: undefined });
      expect(result).not.toContain('src');
    });
  });

  describe('null values', () => {
    test('null value is omitted', () => {
      const result = stringifyAttributes({ alt: null });
      expect(result).not.toContain('alt');
    });
  });

  describe('numeric values', () => {
    test('zero is serialized as "0"', () => {
      const result = stringifyAttributes({ tabindex: 0 });
      expect(result).toContain('tabindex="0"');
    });

    test('positive integer is serialized correctly', () => {
      const result = stringifyAttributes({ width: 220 });
      expect(result).toContain('width="220"');
    });

    test('negative number is serialized correctly', () => {
      const result = stringifyAttributes({ tabindex: -1 });
      expect(result).toContain('tabindex="-1"');
    });
  });

  describe('array values', () => {
    test('array is joined with spaces to form a class list', () => {
      const result = stringifyAttributes({ class: ['foo', 'bar', 'baz'] });
      expect(result).toContain('class="foo bar baz"');
    });

    test('single-element array produces a single class', () => {
      const result = stringifyAttributes({ class: ['only'] });
      expect(result).toContain('class="only"');
    });
  });

  describe('special character escaping', () => {
    test('double quotes in attribute values are escaped as "', () => {
      const result = stringifyAttributes({ title: 'say "hello"' });
      expect(result).toContain('"');
      expect(result).not.toContain('"hello"');
    });

    test('ampersands in attribute values are escaped as &', () => {
      const result = stringifyAttributes({ href: 'a=1&b=2' });
      expect(result).toContain('&');
    });

    test('angle brackets in values are escaped', () => {
      const result = stringifyAttributes({ title: '<script>' });
      expect(result).toContain('<script>');
      expect(result).not.toContain('<script>');
    });

    test('single quotes in values are preserved', () => {
      const result = stringifyAttributes({ title: "it's" });
      expect(result).toContain("it's");
    });
  });

  describe('empty and no-op cases', () => {
    test('empty object returns an empty string', () => {
      expect(stringifyAttributes({})).toBe('');
    });

    test('non-empty attributes return a leading-space-prefixed string', () => {
      const result = stringifyAttributes({ class: 'btn' });
      expect(result.startsWith(' ')).toBe(true);
    });

    test('empty string value produces attribute with empty value', () => {
      const result = stringifyAttributes({ alt: '' });
      expect(result).toContain('alt=""');
    });
  });
});

describe('buttonComponent – stringifyAttributes integration', () => {
  test('href is included verbatim in the rendered anchor', () => {
    const result = buttonComponent({ href: 'https://example.com', content: 'Go' });
    expect(result).toContain('href="https://example.com"');
  });

  test('class attribute is serialized and present in output', () => {
    const result = buttonComponent({ href: '#', content: 'x' });
    expect(result).toContain('class="mlContentButton"');
  });

  test('target="_blank" is present', () => {
    const result = buttonComponent({ href: '#', content: 'x' });
    expect(result).toContain('target="_blank"');
  });

  test('href with query-string ampersand is HTML-escaped in output', () => {
    const result = buttonComponent({ href: 'https://x.com/?a=1&b=2', content: 'x' });
    expect(result).toContain('&');
  });

  test('content text is placed inside the anchor element', () => {
    const result = buttonComponent({ href: '#', content: 'Subscribe Now' });
    const anchorOpen = result.indexOf('<a ');
    const anchorClose = result.indexOf('</a>');
    const contentPos = result.indexOf('Subscribe Now');
    expect(contentPos).toBeGreaterThan(anchorOpen);
    expect(contentPos).toBeLessThan(anchorClose);
  });
});

describe('headingComponent – stringifyAttributes integration', () => {
  test('class attribute is present and correctly quoted', () => {
    const result = headingComponent({ content: 'x' });
    expect(result).toContain('class="mc-toc-title"');
  });

  test('dir attribute is present with ltr value', () => {
    const result = headingComponent({ content: 'x' });
    expect(result).toContain('dir="ltr"');
  });

  test('style attribute is present and properly quoted', () => {
    const result = headingComponent({ content: 'x' });
    expect(result).toMatch(/style="[^"]+"/);
  });

  test('the rendered <h3> contains no unquoted attribute values', () => {
    const result = headingComponent({ content: 'Title' });
    const attrValuePattern = /\w+=(?!")[^\s>]/;
    expect(attrValuePattern.test(result)).toBe(false);
  });
});

describe('imageComponent – stringifyAttributes integration', () => {
  test('src attribute value is correctly set', () => {
    const result = imageComponent({ src: 'https://cdn.example.com/img.jpg', altText: 'hero' });
    expect(result).toContain('src="https://cdn.example.com/img.jpg"');
  });

  test('alt attribute value is correctly set', () => {
    const result = imageComponent({ src: 'img.png', altText: 'Newsletter banner' });
    expect(result).toContain('alt="Newsletter banner"');
  });

  test('data-file-id attribute is present', () => {
    const result = imageComponent({ src: 'img.png', altText: 'alt' });
    expect(result).toContain('data-file-id=');
  });

  test('style attribute on img is properly quoted', () => {
    const result = imageComponent({ src: 'img.png', altText: 'alt' });
    const imgMatch = result.match(/<img([^>]+)\/>/);
    expect(imgMatch).not.toBeNull();
    expect(imgMatch[1]).toContain('style="');
  });

  test('src URL with ampersand in query string is HTML-escaped', () => {
    const result = imageComponent({ src: 'https://x.com/img?a=1&b=2', altText: 'x' });
    expect(result).toContain('&');
  });
});

describe('imageLinkedComponent – stringifyAttributes integration', () => {
  test('produces identical structure to imageComponent for same inputs', () => {
    const props = { src: 'https://example.com/img.jpg', altText: 'photo' };
    const imgResult = imageComponent(props);
    const imgLinkedResult = imageLinkedComponent(props);
    expect(imgLinkedResult).toBe(imgResult);
  });

  test('alt attribute is set from altText prop', () => {
    const result = imageLinkedComponent({ src: 'img.png', altText: 'linked image' });
    expect(result).toContain('alt="linked image"');
  });
});

describe('listItemComponent – stringifyAttributes integration', () => {
  test('li element has a style attribute', () => {
    const result = listItemComponent({ content: 'item' });
    const liMatch = result.match(/<li([^>]*)>/);
    expect(liMatch).not.toBeNull();
    expect(liMatch[1]).toContain('style="');
  });

  test('inner p element has dir, role, and style attributes all quoted', () => {
    const result = listItemComponent({ content: 'item' });
    const pMatch = result.match(/<p([^>]*)>/);
    expect(pMatch).not.toBeNull();
    expect(pMatch[1]).toContain('dir="ltr"');
    expect(pMatch[1]).toContain('role="presentation"');
    expect(pMatch[1]).toContain('style="');
  });
});

describe('separatorComponent – stringifyAttributes integration', () => {
  test('image mode: src attribute is correctly set', () => {
    const result = separatorComponent({ src: 'https://example.com/sep.png', altText: 'sep' });
    expect(result).toContain('src="https://example.com/sep.png"');
  });

  test('image mode: alt attribute is correctly set', () => {
    const result = separatorComponent({ src: 'img.png', altText: 'divider' });
    expect(result).toContain('alt="divider"');
  });

  test('no-arg mode: fallback *** marker is used, no stray "undefined" in output', () => {
    const result = separatorComponent();
    expect(result).toContain('<em>***</em>');
    expect(result).not.toContain('"undefined"');
  });

  test('image mode: style attribute on img is properly quoted', () => {
    const result = separatorComponent({ src: 'img.png', altText: 'alt' });
    const imgMatch = result.match(/<img([^>]+)\/>/);
    expect(imgMatch).not.toBeNull();
    expect(imgMatch[1]).toContain('style="');
  });
});

describe('subtitleComponent – stringifyAttributes integration', () => {
  test('p element has dir attribute', () => {
    const result = subtitleComponent({ content: 'sub' });
    expect(result).toContain('dir="ltr"');
  });

  test('p element has a style attribute', () => {
    const result = subtitleComponent({ content: 'sub' });
    const pMatch = result.match(/<p([^>]*)>/);
    expect(pMatch).not.toBeNull();
    expect(pMatch[1]).toContain('style="');
  });
});
