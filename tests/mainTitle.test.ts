import titleComponent from '../src/components/mainTitle';

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
