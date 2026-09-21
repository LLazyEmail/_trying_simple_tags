// Test the new abstraction layer - demonstrates using base components with different layouts
import { createComponents } from '../src/components/factory';
import * as defaultLayouts from '../src/components/layouts/default';
import * as minimalLayouts from '../src/components/layouts/minimal';

describe('Abstraction Layer - Custom Layouts', () => {
  test('Default layouts (original email styles)', () => {
    const components = createComponents(defaultLayouts);

    const italic = components.italic({ content: 'test' });
    expect(italic).toContain('<i>');
    expect(italic).toContain('test');

    const link = components.link({ href: 'https://example.com', content: 'click' });
    expect(link).toContain('<a');
    expect(link).toContain('https://example.com');
    expect(link).toContain('click');
    expect(link).toContain('target="_blank"');

    const paragraph = components.paragraph({ content: 'text' });
    expect(paragraph).toContain('<div');
    expect(paragraph).toContain('text-align: justify');
  });

  test('Minimal layouts (clean HTML)', () => {
    const components = createComponents(minimalLayouts);

    const italic = components.italic({ content: 'test' });
    expect(italic).toBe('<em>test</em>');

    const link = components.link({ href: 'https://example.com', content: 'click' });
    expect(link).toBe('<a href="https://example.com">click</a>');

    const paragraph = components.paragraph({ content: 'text' });
    expect(paragraph).toBe('<p>text</p>');

    const strong = components.strong({ content: 'bold' });
    expect(strong).toBe('<b>bold</b>');

    const heading = components.heading({ content: 'title' });
    expect(heading).toBe('<h3>title</h3>');

    const list = components.list({ content: '<li>item</li>' });
    expect(list).toBe('<ul><li>item</li></ul>');

    const listItem = components.listItem({ content: 'item' });
    expect(listItem).toBe('<li>item</li>');

    const image = components.image({ src: 'img.png', altText: 'alt' });
    expect(image).toBe('<img src="img.png" alt="alt" />');
  });

  test('Base components return data objects', () => {
    const { baseItalic, baseLink, baseParagraph } = require('../src/components/base');

    const italicData = baseItalic({ content: 'test' });
    expect(italicData).toEqual({ type: 'italic', content: 'test' });

    const linkData = baseLink({ href: 'https://example.com', content: 'click' });
    expect(linkData).toEqual({ type: 'link', href: 'https://example.com', content: 'click' });

    const paragraphData = baseParagraph({ content: 'text' });
    expect(paragraphData).toEqual({ type: 'paragraph', content: 'text' });
  });
});
