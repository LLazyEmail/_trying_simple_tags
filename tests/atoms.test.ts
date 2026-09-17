import text from '../src/components/atoms/text';
import link from '../src/components/atoms/link';
import image from '../src/components/atoms/image';
import spacer from '../src/components/atoms/spacer';
import divider from '../src/components/atoms/divider';

describe('atoms/text', () => {
  describe('HTML structure', () => {
    test('returns a string', () => {
      expect(typeof text()).toBe('string');
    });

    test('uses <p> tag by default', () => {
      const result = text({ content: 'hello' });
      expect(result).toContain('<p>');
      expect(result).toContain('</p>');
    });

    test('uses the tag prop when provided', () => {
      const result = text({ content: 'hello', tag: 'span' });
      expect(result).toContain('<span>');
      expect(result).toContain('</span>');
    });
  });

  describe('styling', () => {
    test('renders style attribute when style is provided', () => {
      const result = text({ content: 'x', style: 'color:red;' });
      expect(result).toContain('style="color:red;"');
    });

    test('omits style attribute when style is not provided', () => {
      const result = text({ content: 'x' });
      expect(result).not.toContain('style=');
    });

    test('renders class attribute when className is provided', () => {
      const result = text({ content: 'x', className: 'my-class' });
      expect(result).toContain('class="my-class"');
    });
  });

  describe('content handling', () => {
    test('renders content inside the tag', () => {
      const result = text({ content: 'Hello World' });
      expect(result).toContain('Hello World');
    });

    test('renders empty string for content by default', () => {
      const result = text();
      expect(result).toContain('<p></p>');
    });

    test('does not throw when called with no arguments', () => {
      expect(() => text()).not.toThrow();
    });
  });
});

describe('atoms/link', () => {
  describe('HTML structure', () => {
    test('returns a string', () => {
      expect(typeof link()).toBe('string');
    });

    test('renders an <a> element', () => {
      const result = link({ content: 'click', href: 'https://example.com' });
      expect(result).toContain('<a ');
      expect(result).toContain('</a>');
    });
  });

  describe('styling', () => {
    test('uses # as default href', () => {
      const result = link({ content: 'x' });
      expect(result).toContain('href="#"');
    });

    test('uses _blank as default target', () => {
      const result = link({ content: 'x' });
      expect(result).toContain('target="_blank"');
    });

    test('includes rel attribute by default', () => {
      const result = link({ content: 'x' });
      expect(result).toContain('rel="noopener noreferrer"');
    });

    test('renders style attribute when provided', () => {
      const result = link({ content: 'x', style: 'color:blue;' });
      expect(result).toContain('style="color:blue;"');
    });
  });

  describe('content handling', () => {
    test('renders content inside <a>', () => {
      const result = link({ content: 'Click me' });
      expect(result).toContain('Click me');
    });

    test('does not throw when called with no arguments', () => {
      expect(() => link()).not.toThrow();
    });
  });
});

describe('atoms/image', () => {
  describe('HTML structure', () => {
    test('returns a string', () => {
      expect(typeof image()).toBe('string');
    });

    test('renders an <img /> element', () => {
      const result = image({ src: 'photo.jpg', alt: 'photo' });
      expect(result).toContain('<img ');
      expect(result).toContain('src="photo.jpg"');
      expect(result).toContain('alt="photo"');
    });
  });

  describe('styling', () => {
    test('renders width attribute when provided', () => {
      const result = image({ src: '', alt: '', width: '100' });
      expect(result).toContain('width="100"');
    });

    test('renders height attribute when provided', () => {
      const result = image({ src: '', alt: '', height: '200' });
      expect(result).toContain('height="200"');
    });

    test('omits width/height attributes when not provided', () => {
      const result = image({ src: '', alt: '' });
      expect(result).not.toContain('width=');
      expect(result).not.toContain('height=');
    });

    test('renders style attribute when provided', () => {
      const result = image({ src: '', alt: '', style: 'border:0;' });
      expect(result).toContain('style="border:0;"');
    });
  });

  describe('content handling', () => {
    test('uses empty string for src/alt by default', () => {
      const result = image();
      expect(result).toContain('src=""');
      expect(result).toContain('alt=""');
    });

    test('does not throw when called with no arguments', () => {
      expect(() => image()).not.toThrow();
    });
  });
});

describe('atoms/spacer', () => {
  describe('HTML structure', () => {
    test('returns a string', () => {
      expect(typeof spacer()).toBe('string');
    });

    test('renders a <div> element', () => {
      const result = spacer();
      expect(result).toContain('<div ');
      expect(result).toContain('</div>');
    });
  });

  describe('styling', () => {
    test('uses 16px size by default', () => {
      const result = spacer();
      expect(result).toContain('height:16px');
      expect(result).toContain('line-height:16px');
    });

    test('uses the size prop when provided', () => {
      const result = spacer({ size: 32 });
      expect(result).toContain('height:32px');
      expect(result).toContain('line-height:32px');
    });

    test('sets display:block in style', () => {
      const result = spacer();
      expect(result).toContain('display:block');
    });
  });

  describe('content handling', () => {
    test('does not throw when called with no arguments', () => {
      expect(() => spacer()).not.toThrow();
    });
  });
});

describe('atoms/divider', () => {
  describe('HTML structure', () => {
    test('returns a string', () => {
      expect(typeof divider()).toBe('string');
    });

    test('renders an <hr /> element', () => {
      const result = divider();
      expect(result).toContain('<hr ');
    });
  });

  describe('styling', () => {
    test('uses default color #E5E7EB', () => {
      const result = divider();
      expect(result).toContain('#E5E7EB');
    });

    test('uses default thickness of 1px', () => {
      const result = divider();
      expect(result).toContain('border-top:1px solid');
    });

    test('uses default margin of 16px 0', () => {
      const result = divider();
      expect(result).toContain('margin:16px 0');
    });

    test('uses custom color when provided', () => {
      const result = divider({ color: '#000000' });
      expect(result).toContain('#000000');
    });

    test('uses custom thickness when provided', () => {
      const result = divider({ thickness: 2 });
      expect(result).toContain('border-top:2px solid');
    });
  });

  describe('content handling', () => {
    test('does not throw when called with no arguments', () => {
      expect(() => divider()).not.toThrow();
    });
  });
});
