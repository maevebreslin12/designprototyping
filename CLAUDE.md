# CLAUDE.md

Frontend-only prototyping environment (React + TS + Vite + Tailwind v4 — a deliberate choice; production uses v3.4, don't downgrade). No backend, DB, auth or external APIs.

## Design foundation — always follow
Read `DESIGN_FOUNDATION.md` before any UI work. It lists Figma sources, tokens, component inventory, principles and known deviations.

- **Reuse first.** Use components in `src/components/ui` and `src/components/layout`. Extend them (new variant) rather than writing one-off markup.
- **Tokens only.** Style with semantic Tailwind utilities from `src/styles/tokens.css` (`bg-bg`, `bg-surface`, `text-fg`, `text-fg-muted-strong`, `border-border-strong`, `type-sub-2`, `type-body-3`, `rounded-xs|sm|md|full`, `shadow-md`…). No raw hex, no arbitrary px colours/fonts. If a value is missing, add a token.
- **Do not invent a visual language.** Mobile-first at 390px; 16px gutter, 24px section gap; flat white cards with 1px black border + 2px radius; pill buttons; black primary / chartreuse secondary; Greed-style bold headings, regular body.
- **Source of truth is Figma.** Inspect nodes with the Figma MCP before adding or changing a component. If the sample screens and design system disagree, prefer the design system and record the difference under "Known deviations" in `DESIGN_FOUNDATION.md`.
- **New components** go in `src/components/ui/`, are typed, and are added to the showcase (`src/showcase/Showcase.tsx`) with all states.
- **New prototype screens** live in `src/compositions/` (or a new `src/prototypes/<name>/`), are registered in `src/App.tsx`, and are built only from existing components.
- **Placeholder data only.** Never use real customer PII in screens, copy or commits.
- Assets (logo, illustrations) are placeholders until exported from Figma into `src/assets`; brand fonts are git-ignored in `public/fonts/` (see deviations).

## Commands
`npm run dev` · `npm run build` (typecheck + build). Routes: `#/` showcase, `#/compositions`, `#/screen/<home|account|login>`.

## Before finishing UI work
Run `npm run build`, screenshot the affected route at 390px (Playwright/Chromium is available), compare to the Figma render, fix visible discrepancies.
