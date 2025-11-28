# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

From `package.json` scripts:

- `npm run dev` → `next dev --turbopack` (start dev server with Turbopack)
- `npm run build` → `next build` (production build)
- `npm run start` → `next start` (production server)
- `npm run lint` → `next lint` (ESLint)

No test suite configured (no `test` script or Jest/Vitest setup). For single tests: n/a.

Install deps: `npm install`.

## Code Architecture

Next.js 15 App Router portfolio site showcasing projects/designs with interactive 3D cards, modals, particles, Framer Motion animations, Tailwind theming (dark mode), and Three.js/Rive integrations.

- **Routing**: `src/app/` (root `layout.tsx` → `page.tsx` home; `/projects` list + `[slug]` dynamic; `/designs` list).
- **Layout/UI**: Shared `AppShell.tsx`; `ThemeProvider` for dark mode via `next-themes`.
- **Components**: `src/components/` (Shadcn/UI primitives in `ui/`, animated `magicui/`; `ProjectCard`/`DesignCard` → modals; 3D like `Silk.jsx`).
- **Data/State**: Static project/design data (likely `data/`); React Context for themes; local state in components/modals.
- **Styling/Animations**: Tailwind 4 + CSS vars (`--primary`); Framer Motion + custom keyframes; client-side for interactive effects.
- **Configs**: Minimal `next.config.ts`; `tailwind.config.js` (shadcn-style); `tsconfig.json` (paths `@/*` → `src/*`); ESLint flat config extending Next.js.

Entry points: `src/app/layout.tsx` (root), `src/app/page.tsx` (home). Static assets in `public/`.