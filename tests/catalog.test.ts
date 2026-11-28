import { describe, expect, test } from 'vitest';
import { COMPONENT_KEYS } from '@llazyemail/component-types';
import typography from '../src';

describe('component catalog', () => {
  test('default export has every contract key', () => {
    for (const key of COMPONENT_KEYS) {
      expect(typography).toHaveProperty(key);
      expect(typeof typography[key]).toBe('function');
    }
  });

  test('atoms bag is present', () => {
    expect(typography.atoms).toEqual(
      expect.objectContaining({
        text: expect.any(Function),
        link: expect.any(Function),
        image: expect.any(Function),
        spacer: expect.any(Function),
        divider: expect.any(Function),
      }),
    );
  });
});
