import { describe, expect, test } from 'vitest';
import { RenderError } from '../src/errors';
import { Pipeline } from '../src/pipeline';
import { EmailRenderer, renderTag } from '../src/tags/render';
import type { Tag } from '../types/tags';

describe('tag renderers', () => {
  test('renders a header with alignment and id', () => {
    const html = renderTag({ kind: 'header', text: 'Hello', align: 'center', id: 'top' });
    expect(html).toBe('<h1 id="top" style="text-align:center">Hello</h1>');
  });

  test('renders a footer', () => {
    expect(renderTag({ kind: 'footer', text: 'Bye' })).toBe('<footer>Bye</footer>');
  });

  test('renders a content block with width and raw html content', () => {
    const html = renderTag({ kind: 'content', content: '<em>body</em>', width: 480 });
    expect(html).toBe('<div style="width:480px"><em>body</em></div>');
  });

  test('renders a two-column layout', () => {
    const html = renderTag({ kind: 'two-column', left: 'L', right: 'R', gap: 20 });
    expect(html).toContain('padding-right:10px');
    expect(html).toContain('>L</td>');
    expect(html).toContain('>R</td>');
  });

  test('renders a hero section with image and subtitle', () => {
    const html = renderTag({
      kind: 'hero',
      title: 'Launch',
      subtitle: 'Today',
      imageSrc: 'https://example.com/hero.png',
      imageAlt: 'cover',
      align: 'center',
    });
    expect(html).toContain('<img src="https://example.com/hero.png" alt="cover" />');
    expect(html).toContain('<h1>Launch</h1>');
    expect(html).toContain('<p>Today</p>');
    expect(html).toContain('text-align:center');
  });

  test('escapes header text', () => {
    expect(renderTag({ kind: 'header', text: '<script>' })).toContain('<script>');
  });

  test('throws RenderError when required text is missing', () => {
    expect(() => renderTag({ kind: 'header', text: '  ' })).toThrow(RenderError);
    expect(() => renderTag({ kind: 'hero', title: '' })).toThrow('[hero] title is required');
  });

  test('renderAll concatenates a tag sequence', () => {
    const tags: Tag[] = [
      { kind: 'header', text: 'Title' },
      { kind: 'content', content: 'Body' },
      { kind: 'footer', text: 'End' },
    ];
    expect(new EmailRenderer().renderAll(tags)).toBe('<h1>Title</h1><div>Body</div><footer>End</footer>');
  });
});

describe('pipeline', () => {
  test('runs steps in order', () => {
    const pipeline = new Pipeline([(input) => input.trim(), (input) => input.toUpperCase()]);
    expect(pipeline.run('  hello ')).toBe('HELLO');
  });
});
