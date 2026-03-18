import mainTitleImageComponent from '../src/components/mainTitleImage';
import imageComponent from '../src/components/image';

describe('mainTitleImageComponent', () => {
  describe('HTML structure', () => {
    test('returns a string', () => {
      expect(typeof mainTitleImageComponent({ src: 'img.png', altText: 'test' })).toBe('string');
    });

    test('contains an <img> element', () => {
      const result = mainTitleImageComponent({ src: 'https://example.com/img.png', altText: 'photo' });
      expect(result).toContain('<img');
    });

    test('is wrapped in a paragraph element', () => {
      const result = mainTitleImageComponent({ src: 'img.png', altText: 'alt' });
      expect(result).toContain('<p');
      expect(result).toContain('</p>');
    });

    test('image is wrapped in an anchor element', () => {
      const result = mainTitleImageComponent({ src: 'img.png', altText: 'alt' });
      expect(result).toContain('<a ');
      expect(result).toContain('</a>');
    });
  });

  describe('attributes', () => {
    test('sets the src attribute to the provided URL', () => {
      const result = mainTitleImageComponent({ src: 'https://example.com/photo.jpg', altText: 'alt' });
      expect(result).toContain('src="https://example.com/photo.jpg"');
    });

    test('sets the alt attribute from altText', () => {
      const result = mainTitleImageComponent({ src: 'img.png', altText: 'my image description' });
      expect(result).toContain('alt="my image description"');
    });

    test('includes a data-file-id attribute', () => {
      const result = mainTitleImageComponent({ src: 'img.png', altText: 'alt' });
      expect(result).toContain('data-file-id');
    });

    test('applies fixed 220px image width', () => {
      const result = mainTitleImageComponent({ src: 'img.png', altText: 'alt' });
      expect(result).toContain('width: 220px');
    });

    test('applies fixed 134px image height', () => {
      const result = mainTitleImageComponent({ src: 'img.png', altText: 'alt' });
      expect(result).toContain('height: 134px');
    });
  });

  describe('compatibility with imageComponent', () => {
    test('produces identical output to imageComponent for the same props', () => {
      const props = { src: 'https://cdn.example.com/img.png', altText: 'newsletter image' };
      expect(mainTitleImageComponent(props)).toBe(imageComponent(props));
    });
  });
});
