import buttonComponent from '../src/components/button2';

describe('buttonComponent', () => {
  it('returns a string', () => {
    expect(typeof buttonComponent({ href: '#', content: 'x' })).toBe('string');
  });

  it('creates an <a> element', () => {
    const result = buttonComponent({ href: '#', content: 'x' });
    expect(result).toContain('<a');
    expect(result).toContain('</a>');
  });
});
