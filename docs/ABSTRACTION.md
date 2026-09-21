# Component Abstraction Layer

This project now uses a two-layer architecture for typography components, separating data/logic from presentation/layout.

## Architecture

### Base Components (`src/components/base/`)
Base components contain only the data and logic - they return plain JavaScript objects, not HTML strings.

```typescript
import { baseItalic } from './components/base/italic';

const data = baseItalic({ content: 'Hello' });
// Returns: { type: 'italic', content: 'Hello' }
```

### Layout Functions (`src/components/layouts/`)
Layout functions take the data objects from base components and render them into HTML strings.

#### Default Layouts (`layouts/default.ts`)
Contains the original email-client compatible layouts with inline styles.

```typescript
import { italicLayout } from './components/layouts/default';

const html = italicLayout({ content: 'Hello' });
// Returns: '<i>Hello</i>'
```

#### Minimal Layouts (`layouts/minimal.ts`)
Provides clean, minimal HTML without email-specific styling.

```typescript
import { italicLayout } from './components/layouts/minimal';

const html = italicLayout({ content: 'Hello' });
// Returns: '<em>Hello</em>'
```

## Usage

### Using the Refactored Components
The existing components (`src/components/italic.ts`, etc.) now use the abstraction layer internally, so they work exactly as before:

```typescript
import italicComponent from './components/italic';

const html = italicComponent({ content: 'Hello' });
// Returns: '<i>Hello</i>' (using default layout)
```

### Creating Custom Layouts
Use the factory to create components with custom layouts:

```typescript
import { createComponents } from './components/factory';
import * as myCustomLayouts from './components/layouts/custom';

const components = createComponents(myCustomLayouts);

const html = components.paragraph({ content: 'Hello' });
// Uses your custom layout
```

### Creating a Custom Layout Set
Create a new layout file (e.g., `layouts/custom.ts`):

```typescript
export const italicLayout = (data: { content: string }): string => {
  return `<span class="italic">${data.content}</span>`;
};

export const paragraphLayout = (data: { content: string }): string => {
  return `<div class="my-paragraph">${data.content}</div>`;
};

// ... implement all required layout functions
```

## Benefits

1. **Separation of Concerns**: Data logic is separated from presentation
2. **Reusability**: Same base components can be used with different layouts
3. **Flexibility**: Easy to create new layout variations without changing logic
4. **Testing**: Base components and layouts can be tested independently
5. **Maintainability**: Changes to layout don't affect component logic

## Component Structure

Each component now follows this pattern:

```typescript
// base/componentName.ts - data/logic only
export const baseComponentName = (props) => {
  return { type: 'componentName', ...props };
};

// layouts/default.ts - rendering logic
export const componentNameLayout = (data) => {
  return `<tag>${data.content}</tag>`;
};

// components/componentName.ts - public API
import { baseComponentName } from './base/componentName';
import { componentNameLayout } from './layouts/default';

export default (props) => {
  const data = baseComponentName(props);
  return componentNameLayout(data);
};
```

## Available Base Components

- `baseItalic` - Italic text
- `baseLink` - Hyperlinks
- `baseList` - Unordered lists
- `baseListItem` - List items
- `baseParagraph` - Paragraphs
- `baseStrong` - Bold text
- `baseImage` - Images
- `baseHeading` - Headings

## Migration Notes

The existing components maintain backward compatibility. The abstraction layer is internal and doesn't break the public API. To use custom layouts, use the factory pattern shown above.
