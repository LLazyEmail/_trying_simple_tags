import headingComponent from '../src/components/heading';

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
