import { describe, expect, test } from 'vitest';
import linkComponent from '../src/components/link';

const amp = '\u0026amp;';

describe('link attribute escaping', () => {
  test('escapes an ampersand in href', () => {
    const result = linkComponent({ href: 'https://x.com/?a=1&b=2', content: 'go' });
    expect(result).toContain('href="https://x.com/?a=1' + amp + 'b=2"');
    expect(result).not.toContain('a=1&b=2');
  });
});
