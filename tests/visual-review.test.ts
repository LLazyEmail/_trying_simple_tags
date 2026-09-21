// Visual Review Test Suite - Renders all components for manual inspection
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
import mainTitleImageComponent from '../src/components/mainTitleImage';
import paragraphComponentUpdated from '../src/components/paragraphComponentUpdated';
import atomText from '../src/components/atoms/text';
import atomLink from '../src/components/atoms/link';
import atomImage from '../src/components/atoms/image';
import atomSpacer from '../src/components/atoms/spacer';
import atomDivider from '../src/components/atoms/divider';

describe('Visual Review - Rendered Components', () => {
  const separator = '='.repeat(80);

  test('Display all rendered components for visual review', () => {
    console.log('\n');
    console.log('╔' + '═'.repeat(78) + '╗');
    console.log('║' + ' '.repeat(20) + 'VISUAL COMPONENT REVIEW' + ' '.repeat(32) + '║');
    console.log('╚' + '═'.repeat(78) + '╝');
    console.log('\n');

    // Main Components
    console.log('━'.repeat(80));
    console.log('MAIN TYPOGRAPHY COMPONENTS');
    console.log('━'.repeat(80));

    console.log('\n📌 HEADING COMPONENT');
    console.log(separator);
    const headingHtml = headingComponent({ content: 'Hello World' });
    console.log(headingHtml);
    console.log(separator);

    console.log('\n📌 TITLE COMPONENT (Main Title)');
    console.log(separator);
    const titleHtml = titleComponent({ content: 'Main Title' });
    console.log(titleHtml);
    console.log(separator);

    console.log('\n📌 SUBTITLE COMPONENT');
    console.log(separator);
    const subtitleHtml = subtitleComponent({ content: 'A subtitle' });
    console.log(subtitleHtml);
    console.log(separator);

    console.log('\n📌 PARAGRAPH COMPONENT');
    console.log(separator);
    const paragraphHtml = paragraphComponent({ content: 'Some body text.' });
    console.log(paragraphHtml);
    console.log(separator);

    console.log('\n📌 PARAGRAPH COMPONENT UPDATED');
    console.log(separator);
    const paragraphUpdatedHtml = paragraphComponentUpdated({ content: 'Updated paragraph text.' });
    console.log(paragraphUpdatedHtml);
    console.log(separator);

    console.log('\n📌 STRONG COMPONENT');
    console.log(separator);
    const strongHtml = strongComponent({ content: 'bold text' });
    console.log(strongHtml);
    console.log(separator);

    console.log('\n📌 ITALIC COMPONENT');
    console.log(separator);
    const italicHtml = italicComponent({ content: 'italic text' });
    console.log(italicHtml);
    console.log(separator);

    console.log('\n📌 LINK COMPONENT');
    console.log(separator);
    const linkHtml = linkComponent({ href: 'https://example.com', content: 'Click here' });
    console.log(linkHtml);
    console.log(separator);

    console.log('\n📌 LIST ITEM COMPONENT');
    console.log(separator);
    const listItemHtml = listItemComponent({ content: 'Item one' });
    console.log(listItemHtml);
    console.log(separator);

    console.log('\n📌 LIST COMPONENT (wrapping list items)');
    console.log(separator);
    const items = [
      listItemComponent({ content: 'Item one' }),
      listItemComponent({ content: 'Item two' }),
      listItemComponent({ content: 'Item three' }),
    ].join('');
    const listHtml = listComponent({ content: items });
    console.log(listHtml);
    console.log(separator);

    console.log('\n📌 SEPARATOR COMPONENT (with src)');
    console.log(separator);
    const separatorWithSrcHtml = separatorComponent({
      src: 'https://example.com/divider.png',
      altText: 'divider',
    });
    console.log(separatorWithSrcHtml);
    console.log(separator);

    console.log('\n📌 SEPARATOR COMPONENT (no args - fallback)');
    console.log(separator);
    const separatorFallbackHtml = separatorComponent();
    console.log(separatorFallbackHtml);
    console.log(separator);

    console.log('\n📌 BUTTON COMPONENT');
    console.log(separator);
    const buttonHtml = buttonComponent({ href: 'https://example.com', content: 'Read more' });
    console.log(buttonHtml);
    console.log(separator);

    console.log('\n📌 IMAGE COMPONENT');
    console.log(separator);
    const imageHtml = imageComponent({
      src: 'https://example.com/image.png',
      altText: 'an image',
    });
    console.log(imageHtml);
    console.log(separator);

    console.log('\n📌 IMAGE LINKED COMPONENT');
    console.log(separator);
    const imageLinkedHtml = imageLinkedComponent({
      src: 'https://example.com/image.png',
      altText: 'an image',
    });
    console.log(imageLinkedHtml);
    console.log(separator);

    console.log('\n📌 MAIN TITLE IMAGE COMPONENT');
    console.log(separator);
    const mainTitleImageHtml = mainTitleImageComponent({
      src: 'https://example.com/title-image.png',
      altText: 'title image',
    });
    console.log(mainTitleImageHtml);
    console.log(separator);

    // Atom Components
    console.log('\n');
    console.log('━'.repeat(80));
    console.log('ATOM COMPONENTS');
    console.log('━'.repeat(80));

    console.log('\n📌 ATOM TEXT');
    console.log(separator);
    const atomTextHtml = atomText({ content: 'Atom text content' });
    console.log(atomTextHtml);
    console.log(separator);

    console.log('\n📌 ATOM LINK');
    console.log(separator);
    const atomLinkHtml = atomLink({ href: 'https://example.com', content: 'Atom link' });
    console.log(atomLinkHtml);
    console.log(separator);

    console.log('\n📌 ATOM IMAGE');
    console.log(separator);
    const atomImageHtml = atomImage({
      src: 'https://example.com/atom-image.png',
      altText: 'atom image',
    });
    console.log(atomImageHtml);
    console.log(separator);

    console.log('\n📌 ATOM SPACER');
    console.log(separator);
    const atomSpacerHtml = atomSpacer();
    console.log(atomSpacerHtml);
    console.log(separator);

    console.log('\n📌 ATOM DIVIDER');
    console.log(separator);
    const atomDividerHtml = atomDivider();
    console.log(atomDividerHtml);
    console.log(separator);

    console.log('\n');
    console.log('╔' + '═'.repeat(78) + '╗');
    console.log('║' + ' '.repeat(25) + 'END OF VISUAL REVIEW' + ' '.repeat(31) + '║');
    console.log('╚' + '═'.repeat(78) + '╝');
    console.log('\n');

    // Test always passes - this is for visual review only
    expect(true).toBe(true);
  });
});
