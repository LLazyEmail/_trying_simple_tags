import italicComponent from '../src/components/italic';

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
