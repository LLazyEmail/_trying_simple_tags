import { describe, expect, test } from 'vitest';
import { RenderError } from '../src/errors';

describe('RenderError', () => {
  test('names the tag in the message', () => {
    const error = new RenderError('header', 'missing text');
    expect(error).toBeInstanceOf(Error);
    expect(error.name).toBe('RenderError');
    expect(error.tagName).toBe('header');
    expect(error.message).toBe('[header] missing text');
  });
});
