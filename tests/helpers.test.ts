import {
  EMAIL_CLIENT_STYLES,
  LINK_STYLE,
  IMAGE_STYLE,
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
});
