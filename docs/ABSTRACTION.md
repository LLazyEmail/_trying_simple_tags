# Layout seam

Components that templates need go through two steps:

1. A base function normalizes props into a data object.
2. A layout function turns that data into HTML.

`createComponents(layouts)` builds a component set for a theme. The default export uses the default layout. A Postmark theme implements `Layouts` and calls `createComponents`. This package does not know Postmark class names.

## On the seam

italic, link, list, listItem, paragraph, strong, image, heading, title.

## Not on the seam

button, separator, subtitle, mainTitleImage, paragraphComponentUpdated. Those are Postmark blocks or unused by the current templates.

## Usage

```ts
import { createComponents } from '@llazyemail/simple-tags';
import type { Layouts } from '@llazyemail/simple-tags';
import * as minimal from './components/layouts/minimal';

const clean = createComponents(minimal);
clean.paragraph({ content: 'Hello' }); // <p>Hello</p>
```

The default layout must keep today's newsletter output. A new theme is a new `Layouts` object, not a change to the default functions.
