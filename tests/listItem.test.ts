import listItemComponent from '../src/components/listItem';

describe('listItemComponent', () => {
  describe('HTML structure', () => {
    test('returns a string', () => {
      expect(typeof listItemComponent({ content: 'item' })).toBe('string');
    });

    test('wraps content in a <li> element', () => {
      const result = listItemComponent({ content: 'item text' });
      expect(result).toContain('<li');
      expect(result).toContain('</li>');
    });

    test('contains an inner <p> element', () => {
      const result = listItemComponent({ content: 'item text' });
      expect(result).toContain('<p');
      expect(result).toContain('</p>');
    });

    test('<li> wraps the inner <p> element', () => {
      const result = listItemComponent({ content: 'x' });
      expect(result.indexOf('<li')).toBeLessThan(result.indexOf('<p'));
      expect(result.indexOf('</p>')).toBeLessThan(result.indexOf('</li>'));
    });

    test('content is rendered inside the <p> element', () => {
      const result = listItemComponent({ content: 'item text' });
      expect(result).toContain('item text');
    });
  });

  describe('attributes', () => {
    test('inner paragraph has left-to-right direction', () => {
      const result = listItemComponent({ content: 'x' });
      expect(result).toContain('dir="ltr"');
    });

    test('inner paragraph has role="presentation"', () => {
      const result = listItemComponent({ content: 'x' });
      expect(result).toContain('role="presentation"');
    });

    test('includes email-client MSO compatibility style', () => {
      const result = listItemComponent({ content: 'x' });
      expect(result).toContain('mso-line-height-rule: exactly');
    });
  });

  describe('content handling', () => {
    test('preserves the content string inside the paragraph', () => {
      const result = listItemComponent({ content: 'important item' });
      expect(result).toContain('important item');
    });
  });
});
