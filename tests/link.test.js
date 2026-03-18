import linkComponent from '../src/components/link';

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
