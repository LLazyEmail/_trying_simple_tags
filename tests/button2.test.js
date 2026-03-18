import buttonComponent from '../src/components/button2';

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
