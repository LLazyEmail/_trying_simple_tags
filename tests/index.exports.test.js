import typographyComponents from '../src/index';
import strongComponent from '../src/components/strong';
import italicComponent from '../src/components/italic';
import separatorComponent from '../src/components/separator';
import listComponent from '../src/components/list';

describe('typographyComponents (main module export)', () => {
  test('exports all expected component keys', () => {
    const expectedKeys = [
      'headingComponent',
      'imageComponent',
      'italicComponent',
      'linkComponent',
      'listComponent',
      'listItemComponent',
      'titleComponent',
      'paragraphComponent',
      'strongComponent',
      'subtitleComponent',
      'separatorComponent',
      'buttonComponent',
    ];

    expectedKeys.forEach((key) => {
      expect(typographyComponents).toHaveProperty(key);
    });
  });

  test('every exported component is a callable function', () => {
    Object.entries(typographyComponents).forEach(([, component]) => {
      expect(typeof component).toBe('function');
    });
  });

  test('exported components produce the same output as direct imports', () => {
    expect(typographyComponents.strongComponent({ content: 'hello' })).toBe(
      strongComponent({ content: 'hello' }),
    );
    expect(typographyComponents.italicComponent({ content: 'hello' })).toBe(
      italicComponent({ content: 'hello' }),
    );
    expect(typographyComponents.separatorComponent()).toBe(separatorComponent());
    expect(typographyComponents.listComponent({ content: '<li>x</li>' })).toBe(
      listComponent({ content: '<li>x</li>' }),
    );
  });
});
