/**
 * Typography Components — Test Suite
 *
 * Tests for all HTML email typography components.
 * Each component section covers: output structure, attributes, styling,
 * content handling, and edge cases.
 */

import headingComponent from '../src/components/heading';
import imageComponent from '../src/components/image';
import italicComponent from '../src/components/italic';
import linkComponent from '../src/components/link';
import listComponent from '../src/components/list';
import listItemComponent from '../src/components/listItem';
import titleComponent from '../src/components/mainTitle';
import paragraphComponent from '../src/components/paragraph';
import strongComponent from '../src/components/strong';
import subtitleComponent from '../src/components/subtitle';
import separatorComponent from '../src/components/separator';
import buttonComponent from '../src/components/button2';
import typographyComponents from '../src/index';

// ---------------------------------------------------------------------------
// strongComponent
// ---------------------------------------------------------------------------

describe('strongComponent', () => {
  describe('HTML structure', () => {
    test('returns a string', () => {
      expect(typeof strongComponent({ content: 'x' })).toBe('string');
    });

    test('wraps content in <strong> tags', () => {
      const result = strongComponent({ content: 'bold text' });
      expect(result).toContain('<strong');
      expect(result).toContain('bold text');
      expect(result).toContain('</strong>');
    });

    test('opening tag appears before content, closing tag appears after', () => {
      const result = strongComponent({ content: 'text' });
      expect(result.indexOf('<strong')).toBeLessThan(result.indexOf('text'));
      expect(result.indexOf('text')).toBeLessThan(result.indexOf('</strong>'));
    });
  });

  describe('styling', () => {
    test('applies font-weight: bolder', () => {
      const result = strongComponent({ content: 'test' });
      expect(result).toContain('font-weight: bolder');
    });
  });

  describe('content handling', () => {
    test('preserves the exact content string', () => {
      const result = strongComponent({ content: 'exact content here' });
      expect(result).toContain('exact content here');
    });

    test('handles empty string content without throwing', () => {
      expect(() => strongComponent({ content: '' })).not.toThrow();
      expect(strongComponent({ content: '' })).toContain('<strong');
    });

    test('passes through nested HTML content unchanged', () => {
      const result = strongComponent({ content: '<em>nested</em>' });
      expect(result).toContain('<em>nested</em>');
    });
  });
});

// ---------------------------------------------------------------------------
// italicComponent
// ---------------------------------------------------------------------------

describe('italicComponent', () => {
  describe('HTML structure', () => {
    test('returns a string', () => {
      expect(typeof italicComponent({ content: 'x' })).toBe('string');
    });

    test('wraps content in <i> tags producing exact output', () => {
      const result = italicComponent({ content: 'italic text' });
      expect(result).toBe('<i>italic text</i>');
    });

    test('opening <i> tag appears before content', () => {
      const result = italicComponent({ content: 'text' });
      expect(result.indexOf('<i>')).toBeLessThan(result.indexOf('text'));
    });

    test('closing </i> tag appears after content', () => {
      const result = italicComponent({ content: 'text' });
      expect(result.indexOf('text')).toBeLessThan(result.indexOf('</i>'));
    });
  });

  describe('content handling', () => {
    test('preserves exact content', () => {
      const result = italicComponent({ content: 'exact content' });
      expect(result).toContain('exact content');
    });

    test('handles empty content producing <i></i>', () => {
      expect(() => italicComponent({ content: '' })).not.toThrow();
      expect(italicComponent({ content: '' })).toBe('<i></i>');
    });

    test('passes through nested HTML content', () => {
      const result = italicComponent({ content: '<strong>bold italic</strong>' });
      expect(result).toContain('<strong>bold italic</strong>');
    });
  });
});

// ---------------------------------------------------------------------------
// listComponent
// ---------------------------------------------------------------------------

describe('listComponent', () => {
  describe('HTML structure', () => {
    test('returns a string', () => {
      expect(typeof listComponent({ content: '' })).toBe('string');
    });

    test('wraps content in a <ul> element', () => {
      const result = listComponent({ content: '<li>item</li>' });
      expect(result).toContain('<ul');
      expect(result).toContain('</ul>');
    });

    test('content appears inside the <ul> element', () => {
      const result = listComponent({ content: '<li>item</li>' });
      const ulStart = result.indexOf('<ul');
      const ulEnd = result.indexOf('</ul>');
      const contentPos = result.indexOf('<li>item</li>');
      expect(contentPos).toBeGreaterThan(ulStart);
      expect(contentPos).toBeLessThan(ulEnd);
    });
  });

  describe('attributes', () => {
    test('sets left-to-right text direction', () => {
      const result = listComponent({ content: '' });
      expect(result).toContain('dir="ltr"');
    });
  });

  describe('content handling', () => {
    test('preserves multiple list items', () => {
      const items = '<li>one</li><li>two</li><li>three</li>';
      const result = listComponent({ content: items });
      expect(result).toContain('<li>one</li>');
      expect(result).toContain('<li>two</li>');
      expect(result).toContain('<li>three</li>');
    });

    test('handles empty content without throwing', () => {
      expect(() => listComponent({ content: '' })).not.toThrow();
    });
  });
});

// ---------------------------------------------------------------------------
// listItemComponent
// ---------------------------------------------------------------------------

describe('listItemComponent', () => {
  describe('HTML structure', () => {
    test('returns a string', () => {
      expect(typeof listItemComponent({ content: 'item' })).toBe('string');
    });

    test('wraps content in a <li> element', () => {
      const result = listItemComponent({ content: 'item text' });
      expect(result).toContain('<li');
      expect(result).toContain('</li>');
    });

    test('contains an inner <p> element', () => {
      const result = listItemComponent({ content: 'item text' });
      expect(result).toContain('<p');
      expect(result).toContain('</p>');
    });

    test('<li> wraps the inner <p> element', () => {
      const result = listItemComponent({ content: 'x' });
      expect(result.indexOf('<li')).toBeLessThan(result.indexOf('<p'));
      expect(result.indexOf('</p>')).toBeLessThan(result.indexOf('</li>'));
    });

    test('content is rendered inside the <p> element', () => {
      const result = listItemComponent({ content: 'item text' });
      expect(result).toContain('item text');
    });
  });

  describe('attributes', () => {
    test('inner paragraph has left-to-right direction', () => {
      const result = listItemComponent({ content: 'x' });
      expect(result).toContain('dir="ltr"');
    });

    test('inner paragraph has role="presentation"', () => {
      const result = listItemComponent({ content: 'x' });
      expect(result).toContain('role="presentation"');
    });

    test('includes email-client MSO compatibility style', () => {
      const result = listItemComponent({ content: 'x' });
      expect(result).toContain('mso-line-height-rule: exactly');
    });
  });

  describe('content handling', () => {
    test('preserves the content string inside the paragraph', () => {
      const result = listItemComponent({ content: 'important item' });
      expect(result).toContain('important item');
    });
  });
});

// ---------------------------------------------------------------------------
// linkComponent
// ---------------------------------------------------------------------------

describe('linkComponent', () => {
  describe('HTML structure', () => {
    test('returns a string', () => {
      expect(typeof linkComponent({ href: '#', content: 'x' })).toBe('string');
    });

    test('creates an <a> element', () => {
      const result = linkComponent({ href: 'https://example.com', content: 'click here' });
      expect(result).toContain('<a ');
      expect(result).toContain('</a>');
    });

    test('content appears between the opening and closing anchor tags', () => {
      const result = linkComponent({ href: '#', content: 'the text' });
      const openTagEnd = result.indexOf('>');
      const closeTagStart = result.indexOf('</a>');
      const innerContent = result.slice(openTagEnd + 1, closeTagStart);
      expect(innerContent).toBe('the text');
    });
  });

  describe('attributes', () => {
    test('sets the href attribute correctly', () => {
      const result = linkComponent({ href: 'https://example.com', content: 'x' });
      expect(result).toContain('href="https://example.com"');
    });

    test('sets target="_blank" to open in a new tab', () => {
      const result = linkComponent({ href: '#', content: 'x' });
      expect(result).toContain('target="_blank"');
    });

    test('applies color #111111', () => {
      const result = linkComponent({ href: '#', content: 'x' });
      expect(result).toContain('color: #111111');
    });

    test('applies bold font weight', () => {
      const result = linkComponent({ href: '#', content: 'x' });
      expect(result).toContain('font-weight: bold');
    });

    test('applies underline text decoration', () => {
      const result = linkComponent({ href: '#', content: 'x' });
      expect(result).toContain('text-decoration: underline');
    });

    test('includes MSO email-client compatibility style', () => {
      const result = linkComponent({ href: '#', content: 'x' });
      expect(result).toContain('mso-line-height-rule: exactly');
    });

    test('includes -ms-text-size-adjust for Windows Phone', () => {
      const result = linkComponent({ href: '#', content: 'x' });
      expect(result).toContain('-ms-text-size-adjust: 100%');
    });

    test('includes -webkit-text-size-adjust for iOS', () => {
      const result = linkComponent({ href: '#', content: 'x' });
      expect(result).toContain('-webkit-text-size-adjust: 100%');
    });
  });

  describe('content handling', () => {
    test('preserves exact link text', () => {
      const result = linkComponent({ href: '#', content: 'Read more' });
      expect(result).toContain('Read more');
    });

    test('works with complex URLs containing query strings', () => {
      const url = 'https://example.com/path?ref=newsletter&id=123';
      const result = linkComponent({ href: url, content: 'article' });
      expect(result).toContain(`href="${url}"`);
    });
  });
});

// ---------------------------------------------------------------------------
// paragraphComponent
// ---------------------------------------------------------------------------

describe('paragraphComponent', () => {
  describe('HTML structure', () => {
    test('returns a string', () => {
      expect(typeof paragraphComponent({ content: 'x' })).toBe('string');
    });

    test('wraps content in a <div> element', () => {
      const result = paragraphComponent({ content: 'Hello world' });
      expect(result).toContain('<div');
      expect(result).toContain('</div>');
    });

    test('content appears inside the div', () => {
      const result = paragraphComponent({ content: 'Hello world' });
      expect(result).toContain('Hello world');
    });
  });

  describe('attributes', () => {
    test('sets left-to-right text direction', () => {
      const result = paragraphComponent({ content: 'text' });
      expect(result).toContain('dir="ltr"');
    });

    test('applies justified text alignment', () => {
      const result = paragraphComponent({ content: 'text' });
      expect(result).toContain('text-align: justify');
    });
  });

  describe('styling', () => {
    test('applies 16px font size', () => {
      const result = paragraphComponent({ content: 'text' });
      expect(result).toContain('font-size:16px');
    });

    test('applies Trebuchet MS font family', () => {
      const result = paragraphComponent({ content: 'text' });
      expect(result).toContain('trebuchet ms');
    });
  });

  describe('content handling', () => {
    test('preserves exact content string', () => {
      const result = paragraphComponent({ content: 'My paragraph text' });
      expect(result).toContain('My paragraph text');
    });

    test('handles empty content without throwing', () => {
      expect(() => paragraphComponent({ content: '' })).not.toThrow();
    });

    test('passes through inline HTML content', () => {
      const result = paragraphComponent({ content: '<strong>bold</strong> normal' });
      expect(result).toContain('<strong>bold</strong>');
    });
  });
});

// ---------------------------------------------------------------------------
// separatorComponent
// ---------------------------------------------------------------------------

describe('separatorComponent', () => {
  describe('HTML structure', () => {
    test('returns a string', () => {
      expect(typeof separatorComponent()).toBe('string');
    });

    test('returns a non-empty string', () => {
      expect(separatorComponent().length).toBeGreaterThan(0);
    });

    test('produces a <div> element', () => {
      const result = separatorComponent();
      expect(result).toContain('<div');
      expect(result).toContain('</div>');
    });

    test('wraps the *** separator marker in <em> tags', () => {
      const result = separatorComponent();
      expect(result).toContain('<em>***</em>');
    });
  });

  describe('attributes', () => {
    test('centers the separator horizontally', () => {
      const result = separatorComponent();
      expect(result).toContain('text-align: center');
    });
  });

  describe('stability', () => {
    test('takes no arguments and does not throw', () => {
      expect(() => separatorComponent()).not.toThrow();
    });

    test('produces identical output on every call (no side-effects)', () => {
      expect(separatorComponent()).toBe(separatorComponent());
    });
  });
});

// ---------------------------------------------------------------------------
// titleComponent (mainTitle)
// ---------------------------------------------------------------------------

describe('titleComponent', () => {
  describe('HTML structure', () => {
    test('returns a string', () => {
      expect(typeof titleComponent({ content: 'x' })).toBe('string');
    });

    test('wraps content in an <h1> element', () => {
      const result = titleComponent({ content: 'My Title' });
      expect(result).toContain('<h1');
      expect(result).toContain('</h1>');
    });

    test('content appears inside the <h1> element', () => {
      const result = titleComponent({ content: 'My Title' });
      expect(result).toContain('My Title');
    });
  });

  describe('attributes', () => {
    test('applies mc-toc-title class', () => {
      const result = titleComponent({ content: 'x' });
      expect(result).toContain('class="mc-toc-title"');
    });

    test('sets left-to-right text direction', () => {
      const result = titleComponent({ content: 'x' });
      expect(result).toContain('dir="ltr"');
    });

    test('centers the title', () => {
      const result = titleComponent({ content: 'x' });
      expect(result).toContain('text-align: center');
    });

    test('applies bold font weight', () => {
      const result = titleComponent({ content: 'x' });
      expect(result).toContain('font-weight: bold');
    });
  });

  describe('content handling', () => {
    test('preserves exact content string', () => {
      const result = titleComponent({ content: 'Newsletter Headline' });
      expect(result).toContain('Newsletter Headline');
    });

    test('handles empty content without throwing', () => {
      expect(() => titleComponent({ content: '' })).not.toThrow();
    });
  });
});

// ---------------------------------------------------------------------------
// headingComponent
// ---------------------------------------------------------------------------

describe('headingComponent', () => {
  describe('HTML structure', () => {
    test('returns a string', () => {
      expect(typeof headingComponent({ content: 'x' })).toBe('string');
    });

    test('wraps content in an <h3> element', () => {
      const result = headingComponent({ content: 'Section Heading' });
      expect(result).toContain('<h3');
      expect(result).toContain('</h3>');
    });

    test('content appears inside the <h3> element', () => {
      const result = headingComponent({ content: 'Section Heading' });
      expect(result).toContain('Section Heading');
    });
  });

  describe('attributes', () => {
    test('applies mc-toc-title class', () => {
      const result = headingComponent({ content: 'x' });
      expect(result).toContain('mc-toc-title');
    });

    test('sets left-to-right text direction', () => {
      const result = headingComponent({ content: 'x' });
      expect(result).toContain('ltr');
    });

    test('centers the heading text', () => {
      const result = headingComponent({ content: 'x' });
      expect(result).toContain('text-align: center');
    });

    test('applies bold font weight', () => {
      const result = headingComponent({ content: 'x' });
      expect(result).toContain('font-weight: bold');
    });

    test('applies 18px font size', () => {
      const result = headingComponent({ content: 'x' });
      expect(result).toContain('font-size:18px');
    });
  });

  describe('content handling', () => {
    test('preserves exact content string', () => {
      const result = headingComponent({ content: 'My Section Title' });
      expect(result).toContain('My Section Title');
    });
  });
});

// ---------------------------------------------------------------------------
// imageComponent
// ---------------------------------------------------------------------------

describe('imageComponent', () => {
  describe('HTML structure', () => {
    test('returns a string', () => {
      expect(typeof imageComponent({ src: 'img.png', altText: 'test' })).toBe('string');
    });

    test('contains an <img> element', () => {
      const result = imageComponent({ src: 'https://example.com/img.png', altText: 'photo' });
      expect(result).toContain('<img');
    });

    test('is wrapped in a paragraph element', () => {
      const result = imageComponent({ src: 'img.png', altText: 'alt' });
      expect(result).toContain('<p');
      expect(result).toContain('</p>');
    });

    test('image is wrapped in an anchor element', () => {
      const result = imageComponent({ src: 'img.png', altText: 'alt' });
      expect(result).toContain('<a ');
      expect(result).toContain('</a>');
    });
  });

  describe('attributes', () => {
    test('sets the src attribute to the provided URL', () => {
      const result = imageComponent({ src: 'https://example.com/photo.jpg', altText: 'alt' });
      expect(result).toContain('src="https://example.com/photo.jpg"');
    });

    test('sets the alt attribute from altText', () => {
      const result = imageComponent({ src: 'img.png', altText: 'my image description' });
      expect(result).toContain('alt="my image description"');
    });

    test('includes a data-file-id attribute', () => {
      const result = imageComponent({ src: 'img.png', altText: 'alt' });
      expect(result).toContain('data-file-id');
    });

    test('applies fixed 220px image width', () => {
      const result = imageComponent({ src: 'img.png', altText: 'alt' });
      expect(result).toContain('width: 220px');
    });

    test('applies fixed 134px image height', () => {
      const result = imageComponent({ src: 'img.png', altText: 'alt' });
      expect(result).toContain('height: 134px');
    });
  });

  describe('content handling', () => {
    test('handles different image source URLs', () => {
      const url = 'https://cdn.example.com/images/hero.png';
      const result = imageComponent({ src: url, altText: 'hero' });
      expect(result).toContain(url);
    });
  });
});

// ---------------------------------------------------------------------------
// subtitleComponent
// ---------------------------------------------------------------------------

describe('subtitleComponent', () => {
  describe('HTML structure', () => {
    test('returns a string', () => {
      expect(typeof subtitleComponent({ content: 'x' })).toBe('string');
    });

    test('wraps content in a <p> element', () => {
      const result = subtitleComponent({ content: 'Subtitle Text' });
      expect(result).toContain('<p');
      expect(result).toContain('</p>');
    });

    test('content is placed inside a <strong> tag', () => {
      const result = subtitleComponent({ content: 'Subtitle Text' });
      expect(result).toContain('<strong');
      expect(result).toContain('Subtitle Text');
    });

    test('<strong> tag is nested inside <p>', () => {
      const result = subtitleComponent({ content: 'x' });
      expect(result.indexOf('<p')).toBeLessThan(result.indexOf('<strong'));
      expect(result.indexOf('</strong>')).toBeLessThan(result.indexOf('</p>'));
    });
  });

  describe('attributes', () => {
    test('sets left-to-right text direction', () => {
      const result = subtitleComponent({ content: 'x' });
      expect(result).toContain('ltr');
    });

    test('applies 17px font size to the content', () => {
      const result = subtitleComponent({ content: 'x' });
      expect(result).toContain('font-size:17px');
    });

    test('<strong> tag carries a stable id attribute (hardcoded in source template)', () => {
      // The id "dofc6f2" is a static value written directly in the subtitle template literal.
      // This test guards against accidental removal of that intentional anchor point.
      const result = subtitleComponent({ content: 'x' });
      expect(result).toContain('id="dofc6f2"');
    });
  });

  describe('content handling', () => {
    test('preserves exact content string', () => {
      const result = subtitleComponent({ content: 'Important Subtitle' });
      expect(result).toContain('Important Subtitle');
    });
  });
});

// ---------------------------------------------------------------------------
// buttonComponent
// ---------------------------------------------------------------------------

describe('buttonComponent', () => {
  describe('HTML structure', () => {
    test('returns a string', () => {
      expect(typeof buttonComponent({ href: '#', content: 'x' })).toBe('string');
    });

    test('creates an <a> element', () => {
      const result = buttonComponent({ href: 'https://example.com', content: 'Click me' });
      expect(result).toContain('<a ');
      expect(result).toContain('</a>');
    });

    test('content appears inside the anchor element', () => {
      const result = buttonComponent({ href: '#', content: 'Subscribe' });
      expect(result).toContain('Subscribe');
    });
  });

  describe('attributes', () => {
    test('sets the href attribute correctly', () => {
      const result = buttonComponent({ href: 'https://example.com', content: 'x' });
      expect(result).toContain('href="https://example.com"');
    });

    test('sets target="_blank" to open in a new tab', () => {
      const result = buttonComponent({ href: '#', content: 'x' });
      expect(result).toContain('target="_blank"');
    });

    test('applies mlContentButton CSS class', () => {
      const result = buttonComponent({ href: '#', content: 'x' });
      expect(result).toContain('mlContentButton');
    });

    test('applies bold font weight', () => {
      const result = buttonComponent({ href: '#', content: 'x' });
      expect(result).toContain('font-weight: bold');
    });

    test('applies underline text decoration', () => {
      const result = buttonComponent({ href: '#', content: 'x' });
      expect(result).toContain('text-decoration: underline');
    });

    test('applies color #111111', () => {
      const result = buttonComponent({ href: '#', content: 'x' });
      expect(result).toContain('color: #111111');
    });

    test('includes MSO email-client compatibility style', () => {
      const result = buttonComponent({ href: '#', content: 'x' });
      expect(result).toContain('mso-line-height-rule: exactly');
    });

    test('includes -ms-text-size-adjust for Windows Phone', () => {
      const result = buttonComponent({ href: '#', content: 'x' });
      expect(result).toContain('-ms-text-size-adjust: 100%');
    });

    test('includes -webkit-text-size-adjust for iOS', () => {
      const result = buttonComponent({ href: '#', content: 'x' });
      expect(result).toContain('-webkit-text-size-adjust: 100%');
    });
  });

  describe('content handling', () => {
    test('preserves exact content string', () => {
      const result = buttonComponent({ href: '#', content: 'Sponsor Us' });
      expect(result).toContain('Sponsor Us');
    });

    test('works with URLs containing query strings', () => {
      const result = buttonComponent({ href: 'https://sponsor.example.com/newsletter?ref=test', content: 'Sponsor' });
      expect(result).toContain('href="https://sponsor.example.com/newsletter?ref=test"');
    });

    test('HTML-encodes "&" in href when URL contains multiple query params', () => {
      // stringifyAttributes HTML-encodes "&" as "&amp;" — this is correct HTML attribute syntax.
      const result = buttonComponent({ href: 'https://example.com/?a=1&b=2', content: 'x' });
      expect(result).toContain('href="https://example.com/?a=1&amp;b=2"');
    });
  });
});

// ---------------------------------------------------------------------------
// Module exports — typographyComponents default export
// ---------------------------------------------------------------------------

describe('typographyComponents (main module export)', () => {
  test('exports all expected component keys', () => {
    const expectedKeys = [
      'headingComponent',
      'imageComponent',
      'italicComponent',
      'linkComponent',
      'listComponent',
      'listItemComponent',
      'titleComponent',
      'paragraphComponent',
      'strongComponent',
      'subtitleComponent',
      'separatorComponent',
      'buttonComponent',
    ];

    expectedKeys.forEach((key) => {
      expect(typographyComponents).toHaveProperty(key);
    });
  });

  test('every exported component is a callable function', () => {
    Object.entries(typographyComponents).forEach(([, component]) => {
      expect(typeof component).toBe('function');
    });
  });

  test('exported components produce the same output as direct imports', () => {
    expect(typographyComponents.strongComponent({ content: 'hello' })).toBe(
      strongComponent({ content: 'hello' }),
    );
    expect(typographyComponents.italicComponent({ content: 'hello' })).toBe(
      italicComponent({ content: 'hello' }),
    );
    expect(typographyComponents.separatorComponent()).toBe(separatorComponent());
    expect(typographyComponents.listComponent({ content: '<li>x</li>' })).toBe(
      listComponent({ content: '<li>x</li>' }),
    );
  });
});

// ---------------------------------------------------------------------------
// Integration — composing components together
// ---------------------------------------------------------------------------

describe('component composition', () => {
  test('listComponent wrapping multiple listItemComponents renders all items', () => {
    const item1 = listItemComponent({ content: 'First item' });
    const item2 = listItemComponent({ content: 'Second item' });
    const result = listComponent({ content: item1 + item2 });

    expect(result).toContain('<ul');
    expect(result).toContain('</ul>');
    expect(result).toContain('First item');
    expect(result).toContain('Second item');
  });

  test('paragraphComponent containing a linkComponent renders both', () => {
    const link = linkComponent({ href: 'https://example.com', content: 'read more' });
    const result = paragraphComponent({ content: `Some text. ${link}` });

    expect(result).toContain('Some text.');
    expect(result).toContain('href="https://example.com"');
    expect(result).toContain('read more');
  });

  test('paragraphComponent containing strongComponent text renders bold inline', () => {
    const strong = strongComponent({ content: 'important point' });
    const result = paragraphComponent({ content: `Here is an ${strong} to make.` });

    expect(result).toContain('<strong');
    expect(result).toContain('important point');
  });

  test('paragraphComponent containing italicComponent text renders italic inline', () => {
    const italic = italicComponent({ content: 'Note' });
    const result = paragraphComponent({ content: `${italic}: pay attention.` });

    expect(result).toContain('<i>Note</i>');
  });

  test('full article section: title + heading + paragraph + separator', () => {
    const title = titleComponent({ content: 'Article Title' });
    const heading = headingComponent({ content: 'Section One' });
    const para = paragraphComponent({ content: 'Body text here.' });
    const sep = separatorComponent();

    const section = title + heading + para + sep;

    expect(section).toContain('Article Title');
    expect(section).toContain('Section One');
    expect(section).toContain('Body text here.');
    expect(section).toContain('***');
  });
});