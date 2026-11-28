import { describe, expect, test } from 'vitest';
import { createComponents } from '../src/components/factory';
import * as minimal from '../src/components/layouts/minimal';

describe('minimal layouts', () => {
  const components = createComponents(minimal);

  test('title is an h1', () => {
    expect(components.title({ content: 'Hello' })).toBe('<h1>Hello</h1>');
  });

  test('strong is a b', () => {
    expect(components.strong({ content: 'bold' })).toBe('<b>bold</b>');
  });
});
