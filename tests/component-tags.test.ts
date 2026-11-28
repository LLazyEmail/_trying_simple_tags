import { describe, expect, test } from 'vitest';
import typography from '../src';

describe('component tags', () => {
  test('each text component emits its tag', () => {
    expect(typography.headingComponent({ content: 'h' })).toContain('<h3');
    expect(typography.titleComponent({ content: 't' })).toContain('<h1');
    expect(typography.paragraphComponent({ content: 'p' })).toContain('<div');
    expect(typography.strongComponent({ content: 'b' })).toContain('<strong');
    expect(typography.italicComponent({ content: 'i' })).toContain('<i>');
    expect(typography.listComponent({ content: '<li>a</li>' })).toContain('<ul');
    expect(typography.listItemComponent({ content: 'a' })).toContain('<li');
    expect(typography.linkComponent({ href: 'https://x.com', content: 'go' })).toContain('<a');
    expect(typography.buttonComponent({ href: 'https://x.com', content: 'go' })).toContain('<a');
    expect(typography.subtitleComponent({ content: 's' })).toContain('<p');
  });
});
