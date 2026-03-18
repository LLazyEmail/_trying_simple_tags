import headingComponent from '../src/components/heading';
import imageComponent from '../src/components/image';
import italicComponent from '../src/components/italic';
import linkComponent from '../src/components/link';
import listComponent from '../src/components/list';
import listItemComponent from '../src/components/listItem';
import titleComponent from '../src/components/mainTitle';
import paragraphComponent from '../src/components/paragraph';
import strongComponent from '../src/components/strong';
import subtitleComponent from '../src/components/subtitle';
import separatorComponent from '../src/components/separator';
import buttonComponent from '../src/components/button2';

describe('strongComponent', () => {
  test('wraps content in <strong> tag', () => {
    const result = strongComponent({ content: 'bold text' });
    expect(result).toContain('<strong');
    expect(result).toContain('bold text');
    expect(result).toContain('</strong>');
  });

  test('applies font-weight style', () => {
    const result = strongComponent({ content: 'test' });
    expect(result).toContain('font-weight: bolder');
  });
});

describe('italicComponent', () => {
  test('wraps content in <i> tag', () => {
    const result = italicComponent({ content: 'italic text' });
    expect(result).toContain('<i>');
    expect(result).toContain('italic text');
    expect(result).toContain('</i>');
  });
});

describe('listComponent', () => {
  test('wraps content in <ul> tag', () => {
    const result = listComponent({ content: '<li>item</li>' });
    expect(result).toContain('<ul');
    expect(result).toContain('<li>item</li>');
    expect(result).toContain('</ul>');
  });

  test('includes ltr direction', () => {
    const result = listComponent({ content: '' });
    expect(result).toContain('dir="ltr"');
  });
});

describe('linkComponent', () => {
  test('creates an anchor tag with href and content', () => {
    const result = linkComponent({ href: 'https://example.com', content: 'click here' });
    expect(result).toContain('<a ');
    expect(result).toContain('href="https://example.com"');
    expect(result).toContain('click here');
    expect(result).toContain('</a>');
  });

  test('opens in a new tab', () => {
    const result = linkComponent({ href: '#', content: 'link' });
    expect(result).toContain('target="_blank"');
  });
});

describe('paragraphComponent', () => {
  test('wraps content in a div', () => {
    const result = paragraphComponent({ content: 'Hello world' });
    expect(result).toContain('<div');
    expect(result).toContain('Hello world');
    expect(result).toContain('</div>');
  });

  test('applies ltr direction', () => {
    const result = paragraphComponent({ content: 'text' });
    expect(result).toContain('dir="ltr"');
  });
});

describe('separatorComponent', () => {
  test('returns a non-empty string', () => {
    const result = separatorComponent();
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });

  test('contains the separator marker', () => {
    const result = separatorComponent();
    expect(result).toContain('***');
  });
});

describe('titleComponent', () => {
  test('wraps content in <h1> tag', () => {
    const result = titleComponent({ content: 'My Title' });
    expect(result).toContain('<h1');
    expect(result).toContain('My Title');
    expect(result).toContain('</h1>');
  });
});

describe('headingComponent', () => {
  test('wraps content in <h3> tag', () => {
    const result = headingComponent({ content: 'Section Heading' });
    expect(result).toContain('<h3');
    expect(result).toContain('Section Heading');
    expect(result).toContain('</h3>');
  });
});

describe('imageComponent', () => {
  test('returns an img tag with src and alt', () => {
    const result = imageComponent({ src: 'https://example.com/img.png', altText: 'test image' });
    expect(result).toContain('<img');
    expect(result).toContain('src="https://example.com/img.png"');
    expect(result).toContain('alt="test image"');
  });
});

describe('listItemComponent', () => {
  test('wraps content in <li> and <p> tags', () => {
    const result = listItemComponent({ content: 'list item text' });
    expect(result).toContain('<li');
    expect(result).toContain('<p');
    expect(result).toContain('list item text');
    expect(result).toContain('</li>');
  });
});

describe('subtitleComponent', () => {
  test('wraps content in a paragraph with strong tag', () => {
    const result = subtitleComponent({ content: 'Subtitle Text' });
    expect(result).toContain('<p');
    expect(result).toContain('Subtitle Text');
    expect(result).toContain('<strong');
  });
});

describe('buttonComponent', () => {
  test('creates an anchor tag with href and content', () => {
    const result = buttonComponent({ href: 'https://example.com', content: 'Click me' });
    expect(result).toContain('<a ');
    expect(result).toContain('href="https://example.com"');
    expect(result).toContain('Click me');
    expect(result).toContain('</a>');
  });

  test('opens in a new tab', () => {
    const result = buttonComponent({ href: '#', content: 'Button' });
    expect(result).toContain('target="_blank"');
  });

  test('applies mlContentButton class', () => {
    const result = buttonComponent({ href: '#', content: 'Button' });
    expect(result).toContain('mlContentButton');
  });
});