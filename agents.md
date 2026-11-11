# AGENTS.md — Portfolio migration (React JSX → Next.js + TypeScript)

Owner: Abhijit Guragain. Package manager: **bun only**. Target: mid-level React + TypeScript Frontend Engineer portfolio.
Read this file and `PROGRESS.md` at the start of **every** task.

## 1. How you must work (rules for you, the coding agent)

1. **One phase per task.** Do only the phase the owner pastes. When done, **stop** and send the report (section 6). Do not start the next phase.
2. **Look before you edit.** Open a file before changing it. Never edit from memory of what it probably contains.
3. **Small batches.** Convert at most **5 files per batch**. After each batch run the gate commands and show their output.
4. **Show proof.** "Done" means a command ran and you pasted its real output. Never write "should work" or "this fixes it" without output.
5. **Stop on repeats.** If the same error appears twice after your fixes, stop and report it. Do not try random changes.
6. **Don't guess APIs.** If you are not sure how a Next.js, Tailwind, or Motion API works in the installed version, say so and ask. Don't invent props, options, or file conventions.
7. **No scope creep.** Don't touch files outside the current phase. Don't rename, reformat, or "clean up" unrelated code.
8. **No new dependencies** without asking. Don't upgrade existing ones.
9. **Never invent content.** No fake projects, metrics, quotes, links, dates, or job details. Unknown content → write `TODO(owner): <what is needed>`.
10. **Never use `any`, `@ts-ignore`, `@ts-expect-error`, or `as unknown as`** to silence an error. Fix the type. If you truly can't, stop and ask.
11. **Update `PROGRESS.md`** after every batch: tick finished items, list files changed, list open questions. It is your memory between sessions.
12. Work on branch `migrate/next-tsx`. Commit after each passing batch with a message that says what changed. Never force-push; never delete the `legacy/` folder.

## 2. Target stack and conventions

- Next.js (use the version the scaffold installs; report it), **App Router only** (`src/app/`). No Pages Router.
- TypeScript with `"strict": true`. Path alias `@/*` → `src/*`.
- Tailwind CSS **v4** (owner decision, 2026-11-11; not the v3 already in the repo). Configuration is CSS-first in `globals.css` (`@import "tailwindcss"` / `@theme`), no `tailwind.config.js` unless the installed version requires one.
- DaisyUI **v5** is installed and configured (owner decision, 2026-11-11) with a dark theme matching the section 4 tokens — but components (buttons, cards, nav, sections) are **hand-styled** per the design spec. Use DaisyUI only for primitives where it genuinely fits; do not restyle the site with DaisyUI component classes as the primary layer.
- Motion library for subtle animation only (see Design). Zustand/TanStack only if the existing site already uses them; don't add them.
- **Server Components by default.** Add `'use client'` only when a file uses hooks, event handlers, browser APIs (`window`, `document`, `localStorage`), or Motion.
- File names: components `PascalCase.tsx`, utilities `camelCase.ts`, routes `page.tsx` / `layout.tsx`.
- Props typed with `type Props = {…}`. Don't use `React.FC`. Use `import type` for types.
- Use `git mv` when renaming `.jsx` → `.tsx` so history is kept.

## 3. JSX → Next/TSX translation table

| Old (React/Vite/CRA) | New (Next.js App Router) |
|---|---|
| `react-router` `<Link to>` | `next/link` `<Link href>` |
| `useNavigate()` | `useRouter()` from `next/navigation` (client component) |
| `<Route path>` | folder `src/app/<route>/page.tsx` |
| `<img src>` | `next/image` `<Image width height alt>` (always give `alt`) |
| `react-helmet` / `<head>` edits | `export const metadata` / `generateMetadata` |
| `import.meta.env.VITE_*` / `REACT_APP_*` | `process.env.NEXT_PUBLIC_*` (only for browser values) |
| Google Fonts `<link>` | `next/font` in `layout.tsx` |
| `public/index.html` | `src/app/layout.tsx` |
| global CSS import in `main.jsx` | import once in `src/app/layout.tsx` |
| `import Logo from './logo.svg'` as component | inline JSX SVG or `<Image src="/logo.svg">`. Don't add SVGR |
| `window` / `localStorage` at render | move into `useEffect` or a client component |
| `Math.random()` / `Date.now()` in render | move into `useEffect`, or compute at build time (avoids hydration mismatch) |

## 4. Design system (fixed decisions: don't invent others)

**Intent:** calm, dark, confident. Content first; evidence over decoration.

- **Colors (CSS variables in `globals.css`):**
  - `--bg: #0B0F14`, `--surface: #111827`, `--border: #1F2937`
  - `--text: #E5E7EB`, `--muted: #9CA3AF`
  - `--accent: #22D3EE` (the only accent; owner may change this one value)
- **Type:** one sans (Inter via `next/font`), one mono (JetBrains Mono, small labels only). Scale: 14 / 16 / 20 / 30 / 48 / 64 px; hero uses `clamp()`. Body line-height 1.6.
- **Layout:** content `max-w-5xl`, centered, 8px spacing grid, section padding 96px desktop / 64px mobile.
- **Radius:** 12px on cards and buttons. **Borders** 1px `--border`. No heavy shadows, no glassmorphism, no gradients except one subtle hero glow.
- **Motion:** use Motion only for a `Reveal` wrapper: fade + 16px rise, 0.4 s, ease-out, play once, stagger 60 ms. **Respect `prefers-reduced-motion`** (no animation when set). No preloader, custom cursor, parallax, autoplay, or scroll-jacking.
- **Accessibility:** semantic landmarks (`header`, `main`, `nav`, `footer`), one `h1` per page, visible focus ring in accent color, text contrast ≥ 4.5:1, every image has meaningful `alt`, every control works by keyboard.
- **Pages:** `/` (Hero, Selected work, Skills, Experience, About, Contact) and `/projects/[slug]` (case study, generated statically). Nothing else yet.

## 5. Content rules

- Content lives in typed files: `src/content/profile.ts`, `projects.ts`, `skills.ts`, `experience.ts`. Components never hard-code copy.
- Use only text the owner supplies. Writing style: verb + what + result; no marketing words ("high-performance", "scalable", "meticulous", "passionate", "seamless", "cutting-edge", "UI Architect") unless the owner supplied a number or example.
- Skills are tiered: **Core** (React, TypeScript, Next.js, Tailwind, TanStack Query/Table, Zustand, React Hook Form + Zod) and **Working knowledge**. No tool-dump entries.
- Anything about LISDR (Government of Nepal) needs owner confirmation before it appears. Leave `TODO(owner)`.

## 6. Report format (end of every task, keep it short)

```
PHASE: <name>   STATUS: done | blocked
FILES CHANGED: <list>
COMMANDS RUN + OUTPUT: <paste real output>
DECISIONS / TRADEOFFS: <1–3 lines>
OPEN QUESTIONS FOR OWNER: <list or none>
NEXT PHASE (not started): <name>
```

## 7. Standard gate commands

```bash
bunx tsc --noEmit        # type gate: must print no errors
bun run lint             # only if a lint script exists
bun run build            # must succeed
bun run dev              # smoke test; then in another shell:
curl -s http://localhost:3000/ | grep -c "<real phrase from the page>"   # >0 means content is in the HTML
```

## 8. Don'ts (anti-goals)

No CMS, no blog, no database, no auth, no i18n, no dark/light toggle, no analytics scripts, no framework switch, no custom webpack config, no unrequested refactors, no placeholder text left in production.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
