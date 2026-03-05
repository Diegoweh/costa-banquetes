# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js 15 App Router project.
- `app/`: route entrypoints, global layout, and global styles (`layout.tsx`, `page.tsx`, `globals.css`).
- `components/`: reusable UI sections in kebab-case files (for example `hero-section.tsx`, `image-carousel.tsx`).
- `public/`: static assets (images, icons, custom fonts).
- Root config: `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`.

Use the `@/*` path alias from `tsconfig.json` for internal imports (example: `@/components/footer`).

## Build, Test, and Development Commands
- `npm run dev`: start local development server with Turbopack at `http://localhost:3000`.
- `npm run build`: production build with Turbopack.
- `npm run build:static`: run `next build` then `next export` for static output.
- `npm run start`: run the production server from the build output.
- `npm run lint`: run ESLint checks (`next/core-web-vitals` + TypeScript rules).

## Coding Style & Naming Conventions
- Language: TypeScript + React function components.
- Indentation: 2 spaces; keep imports grouped and sorted logically.
- Components: PascalCase export names in kebab-case file names.
- Styling: Tailwind CSS v4 utilities in JSX; global tokens and theme variables in `app/globals.css`.
- Linting: follow `eslint.config.mjs`; do not commit with unresolved lint errors.

## Testing Guidelines
There is currently no automated test framework configured. For now:
- Run `npm run lint` and `npm run build` before opening a PR.
- Manually verify key sections (navigation, hero, content, footer) on desktop and mobile breakpoints.

If tests are added, place them as `*.test.ts(x)` near the component/feature they cover.

## Commit & Pull Request Guidelines
Recent history favors short, imperative commit messages (example: `Refactor styles and structure for improved design consistency`).
- Keep commits focused to one concern.
- Use clear subject lines; add context in the body when behavior changes.

PRs should include:
- concise summary of what changed and why,
- linked issue/task (if available),
- screenshots or short video for UI changes,
- verification notes (`npm run lint`, `npm run build`).
