import strongComponent from '../src/components/strong';

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
