import subtitleComponent from '../src/components/subtitle';

describe('subtitleComponent', () => {
  describe('HTML structure', () => {
    test('returns a string', () => {
      expect(typeof subtitleComponent({ content: 'x' })).toBe('string');
    });

    test('wraps content in a <p> element', () => {
      const result = subtitleComponent({ content: 'Subtitle Text' });
      expect(result).toContain('<p');
      expect(result).toContain('</p>');
    });

    test('content is placed inside a <strong> tag', () => {
      const result = subtitleComponent({ content: 'Subtitle Text' });
      expect(result).toContain('<strong');
      expect(result).toContain('Subtitle Text');
    });

    test('<strong> tag is nested inside <p>', () => {
      const result = subtitleComponent({ content: 'x' });
      expect(result.indexOf('<p')).toBeLessThan(result.indexOf('<strong'));
      expect(result.indexOf('</strong>')).toBeLessThan(result.indexOf('</p>'));
    });
  });

  describe('attributes', () => {
    test('sets left-to-right text direction', () => {
      const result = subtitleComponent({ content: 'x' });
      expect(result).toContain('ltr');
    });

    test('applies 17px font size to the content', () => {
      const result = subtitleComponent({ content: 'x' });
      expect(result).toContain('font-size:17px');
    });

    test('<strong> tag carries a stable id attribute (hardcoded in source template)', () => {
      // The id "dofc6f2" is a static value written directly in the subtitle template literal.
      // This test guards against accidental removal of that intentional anchor point.
      const result = subtitleComponent({ content: 'x' });
      expect(result).toContain('id="dofc6f2"');
    });
  });

  describe('content handling', () => {
    test('preserves exact content string', () => {
      const result = subtitleComponent({ content: 'Important Subtitle' });
      expect(result).toContain('Important Subtitle');
    });
  });
});
