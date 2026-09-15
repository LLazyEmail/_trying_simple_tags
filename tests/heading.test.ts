import { describe, expect, test } from 'vitest';

import headingComponent from '../src/components/heading';

describe('headingComponent (typescript)', () => {
  test('returns a string', () => {
    expect(typeof headingComponent({ content: 'x' })).toBe('string');
  });

  test('wraps content in an h3 element', () => {
    const result = headingComponent({ content: 'Section Heading' });
    expect(result).toContain('<h3');
    expect(result).toContain('</h3>');
    expect(result).toContain('Section Heading');
  });
});
