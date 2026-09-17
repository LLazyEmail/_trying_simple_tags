import imageComponent from '../src/components/image';

describe('imageComponent', () => {
  describe('HTML structure', () => {
    test('returns a string', () => {
      expect(typeof imageComponent({ src: 'img.png', altText: 'test' })).toBe('string');
    });

    test('contains an <img> element', () => {
      const result = imageComponent({ src: 'https://example.com/img.png', altText: 'photo' });
      expect(result).toContain('<img');
    });

    test('is wrapped in a paragraph element', () => {
      const result = imageComponent({ src: 'img.png', altText: 'alt' });
      expect(result).toContain('<p');
      expect(result).toContain('</p>');
    });

    test('image is wrapped in an anchor element', () => {
      const result = imageComponent({ src: 'img.png', altText: 'alt' });
      expect(result).toContain('<a ');
      expect(result).toContain('</a>');
    });
  });

  describe('attributes', () => {
    test('sets the src attribute to the provided URL', () => {
      const result = imageComponent({ src: 'https://example.com/photo.jpg', altText: 'alt' });
      expect(result).toContain('src="https://example.com/photo.jpg"');
    });

    test('sets the alt attribute from altText', () => {
      const result = imageComponent({ src: 'img.png', altText: 'my image description' });
      expect(result).toContain('alt="my image description"');
    });

    test('includes a data-file-id attribute', () => {
      const result = imageComponent({ src: 'img.png', altText: 'alt' });
      expect(result).toContain('data-file-id');
    });

    test('applies fixed 220px image width', () => {
      const result = imageComponent({ src: 'img.png', altText: 'alt' });
      expect(result).toContain('width: 220px');
    });

    test('applies fixed 134px image height', () => {
      const result = imageComponent({ src: 'img.png', altText: 'alt' });
      expect(result).toContain('height: 134px');
    });
  });

  describe('content handling', () => {
    test('handles different image source URLs', () => {
      const url = 'https://cdn.example.com/images/hero.png';
      const result = imageComponent({ src: url, altText: 'hero' });
      expect(result).toContain(url);
    });
  });
});
