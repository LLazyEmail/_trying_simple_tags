import text from '../src/components/atoms/text';
import link from '../src/components/atoms/link';
import image from '../src/components/atoms/image';
import spacer from '../src/components/atoms/spacer';
import divider from '../src/components/atoms/divider';

describe('atoms', () => {
  it('text returns string', () => {
    expect(typeof text({ content: 'hello' })).toBe('string');
  });

  it('link returns string', () => {
    expect(typeof link({ href: '#', content: 'link' })).toBe('string');
  });

  it('image returns string', () => {
    expect(typeof image({ src: 'img.png', altText: 'alt' })).toBe('string');
  });

  it('spacer returns string', () => {
    expect(typeof spacer()).toBe('string');
  });

  it('divider returns string', () => {
    expect(typeof divider()).toBe('string');
  });
});
