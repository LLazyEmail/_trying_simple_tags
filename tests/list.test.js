import listComponent from '../src/components/list';

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
