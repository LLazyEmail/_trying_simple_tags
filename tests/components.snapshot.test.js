// tests/components.snapshot.test.js
import headingComponent from '../src/components/heading';
import titleComponent from '../src/components/mainTitle';
import subtitleComponent from '../src/components/subtitle';
import paragraphComponent from '../src/components/paragraph';
import strongComponent from '../src/components/strong';
import italicComponent from '../src/components/italic';
import linkComponent from '../src/components/link';
import listComponent from '../src/components/list';
import listItemComponent from '../src/components/listItem';
import separatorComponent from '../src/components/separator';
import buttonComponent from '../src/components/button2';
import imageComponent from '../src/components/image';
import imageLinkedComponent from '../src/components/imageLinked';

describe('typography components — output baseline (pre-TS-conversion)', () => {
  test('headingComponent', () => {
    expect(headingComponent({ content: 'Hello World' })).toMatchSnapshot();
  });
  test('titleComponent', () => {
    expect(titleComponent({ content: 'Main Title' })).toMatchSnapshot();
  });
  test('subtitleComponent', () => {
    expect(subtitleComponent({ content: 'A subtitle' })).toMatchSnapshot();
  });
  test('paragraphComponent', () => {
    expect(paragraphComponent({ content: 'Some body text.' })).toMatchSnapshot();
  });
  test('strongComponent', () => {
    expect(strongComponent({ content: 'bold text' })).toMatchSnapshot();
  });
  test('italicComponent', () => {
    expect(italicComponent({ content: 'italic text' })).toMatchSnapshot();
  });
  test('linkComponent', () => {
    expect(linkComponent({ href: 'https://example.com', content: 'Click here' })).toMatchSnapshot();
  });
  test('listItemComponent', () => {
    expect(listItemComponent({ content: 'Item one' })).toMatchSnapshot();
  });
  test('listComponent wrapping two listItemComponent outputs', () => {
    const items = [
      listItemComponent({ content: 'Item one' }),
      listItemComponent({ content: 'Item two' }),
    ].join('');
    expect(listComponent({ content: items })).toMatchSnapshot();
  });
  test('separatorComponent — with src', () => {
    expect(separatorComponent({ src: 'https://example.com/img.png', altText: 'divider' })).toMatchSnapshot();
  });
  test('separatorComponent — no args (fallback ***)', () => {
    expect(separatorComponent()).toMatchSnapshot();
  });
  test('buttonComponent', () => {
    expect(buttonComponent({ href: 'https://example.com', content: 'Read more' })).toMatchSnapshot();
  });
  test('imageComponent', () => {
    expect(imageComponent({ src: 'https://example.com/img.png', altText: 'an image' })).toMatchSnapshot();
  });
  test('imageLinkedComponent', () => {
    expect(imageLinkedComponent({ src: 'https://example.com/img.png', altText: 'an image' })).toMatchSnapshot();
  });
});