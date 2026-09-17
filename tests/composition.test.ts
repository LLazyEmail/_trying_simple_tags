import listComponent from '../src/components/list';
import listItemComponent from '../src/components/listItem';
import linkComponent from '../src/components/link';
import paragraphComponent from '../src/components/paragraph';
import strongComponent from '../src/components/strong';
import italicComponent from '../src/components/italic';
import titleComponent from '../src/components/mainTitle';
import headingComponent from '../src/components/heading';
import separatorComponent from '../src/components/separator';

describe('component composition', () => {
  test('listComponent wrapping multiple listItemComponents renders all items', () => {
    const item1 = listItemComponent({ content: 'First item' });
    const item2 = listItemComponent({ content: 'Second item' });
    const result = listComponent({ content: item1 + item2 });

    expect(result).toContain('<ul');
    expect(result).toContain('</ul>');
    expect(result).toContain('First item');
    expect(result).toContain('Second item');
  });

  test('paragraphComponent containing a linkComponent renders both', () => {
    const link = linkComponent({ href: 'https://example.com', content: 'read more' });
    const result = paragraphComponent({ content: `Some text. ${link}` });

    expect(result).toContain('Some text.');
    expect(result).toContain('href="https://example.com"');
    expect(result).toContain('read more');
  });

  test('paragraphComponent containing strongComponent text renders bold inline', () => {
    const strong = strongComponent({ content: 'important point' });
    const result = paragraphComponent({ content: `Here is an ${strong} to make.` });

    expect(result).toContain('<strong');
    expect(result).toContain('important point');
  });

  test('paragraphComponent containing italicComponent text renders italic inline', () => {
    const italic = italicComponent({ content: 'Note' });
    const result = paragraphComponent({ content: `${italic}: pay attention.` });

    expect(result).toContain('<i>Note</i>');
  });

  test('full article section: title + heading + paragraph + separator', () => {
    const title = titleComponent({ content: 'Article Title' });
    const heading = headingComponent({ content: 'Section One' });
    const para = paragraphComponent({ content: 'Body text here.' });
    const sep = separatorComponent();

    const section = title + heading + para + sep;

    expect(section).toContain('Article Title');
    expect(section).toContain('Section One');
    expect(section).toContain('Body text here.');
    expect(section).toContain('***');
  });
});
