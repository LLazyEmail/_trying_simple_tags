import separatorComponent from '../src/components/separator';

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

  describe('image mode', () => {
    test('renders an <img> element when src is provided', () => {
      const result = separatorComponent({ src: 'https://example.com/sep.png', altText: 'separator' });
      expect(result).toContain('<img');
    });

    test('does not show *** when src is provided', () => {
      const result = separatorComponent({ src: 'https://example.com/sep.png', altText: 'separator' });
      expect(result).not.toContain('<em>***</em>');
    });

    test('sets the src attribute on the image', () => {
      const result = separatorComponent({ src: 'https://example.com/sep.png', altText: 'separator' });
      expect(result).toContain('src="https://example.com/sep.png"');
    });

    test('sets the alt attribute on the image', () => {
      const result = separatorComponent({ src: 'https://example.com/sep.png', altText: 'separator' });
      expect(result).toContain('alt="separator"');
    });

    test('applies standard image dimensions in image mode', () => {
      const result = separatorComponent({ src: 'img.png', altText: 'alt' });
      expect(result).toContain('width: 220px');
      expect(result).toContain('height: 134px');
    });

    test('still centers the image in image mode', () => {
      const result = separatorComponent({ src: 'img.png', altText: 'alt' });
      expect(result).toContain('text-align: center');
    });
  });
});

