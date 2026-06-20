# Ali Halmamat — Portfolio

Personal portfolio site built with React and TypeScript. Features a dark/light mode toggle, smooth-scroll navigation, and sections for expertise, career history, and personal projects.

**Live:** https://mr-uyghur.github.io/react_portfolio/

## Stack

- **React 18** + **TypeScript**
- **MUI v5** — AppBar, Drawer, Chip, icons
- **SASS** — component-scoped stylesheets + global design tokens
- **FontAwesome** — brand/skill icons
- **react-vertical-timeline-component** — career history
- **gh-pages** — deployment

## Sections

| Section | Component | Route anchor |
|---|---|---|
| Hero | `Main.tsx` | — |
| Expertise | `Expertise.tsx` | `#expertise` |
| Career History | `Timeline.tsx` | `#history` |
| Projects | `Project.tsx` | `#projects` |
| Contact | `Contact.tsx` | `#contact` |

## Getting Started

```bash
npm install
npm start        # dev server at localhost:3000
npm run build    # production build
npm run deploy   # build + push to gh-pages branch
```

## Design Tokens

All colors, spacing, typography, and shadow values are defined as CSS custom properties in `src/index.scss`. Key accent: `#7c3aed` (violet).
