# Contributing to MIT MSA Website

Thank you for your interest in contributing to the MIT MSA website. This document outlines the coding standards and guidelines to ensure consistency and maintainability.

## Project Structure

```
msa/
├── src/
│   ├── components/
│   │   ├── layout/         # Header, Footer, Layout wrapper
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── index.js
│   │   └── ui/             # Reusable UI components
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── Hero.jsx
│   │       ├── Section.jsx
│   │       ├── Icons.jsx
│   │       └── index.js
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Prayer.jsx
│   │   ├── Resources.jsx
│   │   ├── Leadership.jsx
│   │   ├── Join.jsx
│   │   └── index.js
│   ├── styles/             # CSS architecture
│   │   ├── index.css       # Main entry point
│   │   ├── variables.css   # Design tokens
│   │   ├── reset.css       # CSS reset
│   │   ├── layout.css      # Page structure
│   │   ├── components.css  # Component styles
│   │   ├── utilities.css   # Utility classes
│   │   └── main.css        # Page-specific styles
│   ├── assets/             # Images and icons
│   ├── App.jsx             # Main app with routing
│   └── main.jsx            # Entry point
├── public/                 # Static assets (favicon)
├── dist/                   # Production build output
└── package.json
```

## Coding Standards

### React Components

1. **Functional Components**: Always use functional components with hooks:
   ```jsx
   export default function ComponentName({ prop1, prop2 }) {
     const [state, setState] = useState(initialValue);
     return <div>...</div>;
   }
   ```

2. **Component Organization**:
   - One component per file
   - Use PascalCase for component names: `Button.jsx`, `Header.jsx`
   - Export components as default exports
   - Use named exports for related utilities

3. **Props**:
   - Destructure props in the function signature
   - Provide sensible defaults for optional props
   - Document complex props with JSDoc comments

4. **File Structure**:
   ```jsx
   import { useState } from 'react';
   import { Link } from 'react-router-dom';
   import { Button } from '../ui';

   /**
    * Brief description of the component
    */
   export default function ComponentName({ prop1, prop2 = 'default' }) {
     // Hooks
     // Event handlers
     // Render
     return (...);
   }
   ```

### CSS

1. **BEM Naming Convention**:
   ```css
   .block {}
   .block__element {}
   .block--modifier {}
   ```

2. **CSS Variables**: Always use CSS custom properties from `variables.css`:
   ```css
   /* Good */
   color: var(--color-primary-600);
   padding: var(--space-4);

   /* Avoid */
   color: #2e7d32;
   padding: 16px;
   ```

3. **Mobile-First**: Write mobile styles first, then add breakpoints:
   ```css
   .element {
     flex-direction: column;
   }

   @media (min-width: 768px) {
     .element {
       flex-direction: row;
     }
   }
   ```

4. **No CSS-in-JS**: Keep styles in CSS files, use className for styling

## Design Tokens

All design values are defined in `src/styles/variables.css`:

### Colors
- **Primary**: Green shades (`--color-primary-*`)
- **Secondary**: Gold/amber (`--color-secondary-*`)
- **Neutrals**: Grayscale (`--color-neutral-*`)

### Spacing
Use the spacing scale: `--space-1` (4px) through `--space-24` (96px)

### Typography
- Font sizes: `--font-size-xs` through `--font-size-5xl`
- Font weights: `--font-weight-normal`, `medium`, `semibold`, `bold`

### Breakpoints
- `640px` - Small (sm)
- `768px` - Medium (md)
- `1024px` - Large (lg)
- `1280px` - Extra large (xl)

## Adding New Pages

1. Create a new file in `src/pages/` (e.g., `NewPage.jsx`)
2. Export from `src/pages/index.js`
3. Add route in `src/App.jsx`
4. Add navigation links in `Header.jsx` and `Footer.jsx` if needed

Example:
```jsx
// src/pages/NewPage.jsx
import { Hero, Section } from '../components/ui';

export default function NewPage() {
  return (
    <>
      <Hero title="Page Title" subtitle="Page description" />
      <Section>
        <div className="container">
          {/* Page content */}
        </div>
      </Section>
    </>
  );
}
```

## Adding New Components

1. Create component in appropriate folder (`layout/` or `ui/`)
2. Export from the folder's `index.js`
3. Add corresponding CSS in `components.css` if needed
4. Use BEM naming for CSS classes

## Development Workflow

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Testing

Before submitting changes:

1. Run `npm run build` to ensure no build errors
2. Test in multiple browsers (Chrome, Firefox, Safari, Edge)
3. Test on mobile devices or using browser dev tools
4. Check accessibility with browser dev tools
5. Test all navigation links work correctly

## File Naming

- **Components**: PascalCase (`Button.jsx`, `Header.jsx`)
- **CSS files**: lowercase with hyphens (`variables.css`)
- **Images**: lowercase with hyphens (`community-photo.jpg`)

## Images

- Use descriptive filenames: `community-iftar-2024.jpg`
- Compress images before adding
- Prefer SVG for icons and logos
- Always include meaningful alt text

## Questions?

Contact the MSA web team or open an issue in the repository.
