import imageLinkedComponent from '../src/components/imageLinked';

describe('imageLinkedComponent', () => {
  describe('HTML structure', () => {
    test('returns a string', () => {
      expect(typeof imageLinkedComponent({ src: 'img.png', altText: 'test' })).toBe('string');
    });

    test('contains an <img> element', () => {
      const result = imageLinkedComponent({ src: 'https://example.com/img.png', altText: 'photo' });
      expect(result).toContain('<img');
    });

    test('is wrapped in a paragraph element', () => {
      const result = imageLinkedComponent({ src: 'img.png', altText: 'alt' });
      expect(result).toContain('<p');
      expect(result).toContain('</p>');
    });

    test('image is wrapped in an anchor element', () => {
      const result = imageLinkedComponent({ src: 'img.png', altText: 'alt' });
      expect(result).toContain('<a ');
      expect(result).toContain('</a>');
    });
  });

  describe('attributes', () => {
    test('sets the src attribute to the provided URL', () => {
      const result = imageLinkedComponent({ src: 'https://example.com/photo.jpg', altText: 'alt' });
      expect(result).toContain('src="https://example.com/photo.jpg"');
    });

    test('sets the alt attribute from altText', () => {
      const result = imageLinkedComponent({ src: 'img.png', altText: 'my image description' });
      expect(result).toContain('alt="my image description"');
    });

    test('includes the data-file-id attribute with value 1041068', () => {
      const result = imageLinkedComponent({ src: 'img.png', altText: 'alt' });
      expect(result).toContain('data-file-id="1041068"');
    });

    test('applies fixed 220px image width', () => {
      const result = imageLinkedComponent({ src: 'img.png', altText: 'alt' });
      expect(result).toContain('width: 220px');
    });

    test('applies fixed 134px image height', () => {
      const result = imageLinkedComponent({ src: 'img.png', altText: 'alt' });
      expect(result).toContain('height: 134px');
    });

    test('opens the image link in a new tab', () => {
      const result = imageLinkedComponent({ src: 'img.png', altText: 'alt' });
      expect(result).toContain('target="_blank"');
    });
  });

  describe('content handling', () => {
    test('handles different image source URLs', () => {
      const url = 'https://cdn.example.com/images/hero.png';
      const result = imageLinkedComponent({ src: url, altText: 'hero' });
      expect(result).toContain(url);
    });
  });
});
