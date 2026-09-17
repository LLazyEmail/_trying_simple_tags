import paragraphComponent from '../src/components/paragraph';

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
