import { describe, expect, test } from 'vitest';
import { Pipeline } from '../src/pipeline';

describe('Pipeline', () => {
  test('returns the input when there are no steps', () => {
    expect(new Pipeline([]).run('hello')).toBe('hello');
  });

  test('runs steps in order', () => {
    const pipeline = new Pipeline([(value) => value.trim(), (value) => value.toUpperCase()]);
    expect(pipeline.run('  hi  ')).toBe('HI');
  });
});
