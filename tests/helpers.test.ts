import {
  EMAIL_CLIENT_STYLES,
  LINK_STYLE,
  IMAGE_STYLE,
  buildImageAttributes,
  buildImageWrapper,
} from '../src/helpers';

describe('helpers', () => {
  describe('EMAIL_CLIENT_STYLES', () => {
    test('is a string', () => {
      expect(typeof EMAIL_CLIENT_STYLES).toBe('string');
    });

    test('contains mso-line-height-rule for Outlook compatibility', () => {
      expect(EMAIL_CLIENT_STYLES).toContain('mso-line-height-rule: exactly');
    });

    test('contains -ms-text-size-adjust for Windows Phone', () => {
      expect(EMAIL_CLIENT_STYLES).toContain('-ms-text-size-adjust: 100%');
    });

    test('contains -webkit-text-size-adjust for iOS Mail', () => {
      expect(EMAIL_CLIENT_STYLES).toContain('-webkit-text-size-adjust: 100%');
    });
  });

  describe('LINK_STYLE', () => {
    test('is a string', () => {
      expect(typeof LINK_STYLE).toBe('string');
    });

    test('includes all email-client compatibility styles', () => {
      expect(LINK_STYLE).toContain(EMAIL_CLIENT_STYLES);
    });

    test('applies color #111111', () => {
      expect(LINK_STYLE).toContain('color: #111111');
    });

    test('applies bold font weight', () => {
      expect(LINK_STYLE).toContain('font-weight: bold');
    });

    test('applies underline text decoration', () => {
      expect(LINK_STYLE).toContain('text-decoration: underline');
    });
  });

  describe('IMAGE_STYLE', () => {
    test('is a string', () => {
      expect(typeof IMAGE_STYLE).toBe('string');
    });

    test('sets no border (reset)', () => {
      expect(IMAGE_STYLE).toContain('border: 0px initial');
    });

    test('sets fixed width of 220px', () => {
      expect(IMAGE_STYLE).toContain('width: 220px');
    });

    test('sets fixed height of 134px', () => {
      expect(IMAGE_STYLE).toContain('height: 134px');
    });

    test('removes default margin', () => {
      expect(IMAGE_STYLE).toContain('margin: 0px');
    });

    test('removes outline', () => {
      expect(IMAGE_STYLE).toContain('outline: none');
    });

    test('removes text decoration', () => {
      expect(IMAGE_STYLE).toContain('text-decoration: none');
    });

    test('sets bicubic interpolation for Outlook', () => {
      expect(IMAGE_STYLE).toContain('-ms-interpolation-mode: bicubic');
    });
  });

  describe('buildImageAttributes', () => {
    test('returns a string', () => {
      expect(typeof buildImageAttributes('img.png', 'alt text')).toBe('string');
    });

    test('includes the provided src attribute', () => {
      const result = buildImageAttributes('https://example.com/photo.jpg', 'photo');
      expect(result).toContain('src="https://example.com/photo.jpg"');
    });

    test('includes the provided alt attribute', () => {
      const result = buildImageAttributes('img.png', 'my image description');
      expect(result).toContain('alt="my image description"');
    });

    test('includes a data-file-id attribute', () => {
      const result = buildImageAttributes('img.png', 'alt');
      expect(result).toContain('data-file-id');
    });

    test('includes the standard image width style', () => {
      const result = buildImageAttributes('img.png', 'alt');
      expect(result).toContain('width: 220px');
    });

    test('includes the standard image height style', () => {
      const result = buildImageAttributes('img.png', 'alt');
      expect(result).toContain('height: 134px');
    });
  });

  describe('buildImageWrapper', () => {
    const imgHtml = '<img src="img.png" alt="alt text" />';

    test('returns a string', () => {
      expect(typeof buildImageWrapper(imgHtml)).toBe('string');
    });

    test('wraps the image in a paragraph element', () => {
      const result = buildImageWrapper(imgHtml);
      expect(result).toContain('<p');
      expect(result).toContain('</p>');
    });

    test('wraps the image in an anchor element', () => {
      const result = buildImageWrapper(imgHtml);
      expect(result).toContain('<a ');
      expect(result).toContain('</a>');
    });

    test('includes the provided img HTML verbatim', () => {
      const result = buildImageWrapper(imgHtml);
      expect(result).toContain(imgHtml);
    });

    test('centers the image horizontally', () => {
      const result = buildImageWrapper(imgHtml);
      expect(result).toContain('text-align: center');
    });

    test('applies the link style to the anchor', () => {
      const result = buildImageWrapper(imgHtml);
      expect(result).toContain('font-weight: bold');
      expect(result).toContain('text-decoration: underline');
    });

    test('includes email-client compatibility styles', () => {
      const result = buildImageWrapper(imgHtml);
      expect(result).toContain('mso-line-height-rule: exactly');
    });

    test('sets ltr direction on the paragraph', () => {
      const result = buildImageWrapper(imgHtml);
      expect(result).toContain('dir="ltr"');
    });

    test('opens link in new tab', () => {
      const result = buildImageWrapper(imgHtml);
      expect(result).toContain('target="_blank"');
    });
  });
});
