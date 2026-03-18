import separatorComponent from '../src/components/separator';

describe('separatorComponent', () => {
  describe('HTML structure', () => {
    test('returns a string', () => {
      expect(typeof separatorComponent()).toBe('string');
    });

    test('returns a non-empty string', () => {
      expect(separatorComponent().length).toBeGreaterThan(0);
    });

    test('produces a <div> element', () => {
      const result = separatorComponent();
      expect(result).toContain('<div');
      expect(result).toContain('</div>');
    });

    test('wraps the *** separator marker in <em> tags', () => {
      const result = separatorComponent();
      expect(result).toContain('<em>***</em>');
    });
  });

  describe('attributes', () => {
    test('centers the separator horizontally', () => {
      const result = separatorComponent();
      expect(result).toContain('text-align: center');
    });
  });

  describe('stability', () => {
    test('takes no arguments and does not throw', () => {
      expect(() => separatorComponent()).not.toThrow();
    });

    test('produces identical output on every call (no side-effects)', () => {
      expect(separatorComponent()).toBe(separatorComponent());
    });
  });
});
