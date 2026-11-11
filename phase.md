# PHASE_PROMPTS.md — paste ONE prompt at a time into OpenCode

## How to use

1. Put `AGENTS.md` in the repo root. Create `docs/` and (optionally) copy `PORTFOLIO_GUIDE.md` into `docs/`.
2. Create `PROGRESS.md` from the template at the bottom.
3. Paste **one** phase prompt. Wait for the report. Check the gate output yourself. Only then paste the next.
4. If the agent drifts, paste: `Stop. Re-read AGENTS.md section 1 and PROGRESS.md. Then continue only the current phase.`
5. Smaller models forget; the rules live in `AGENTS.md` and `PROGRESS.md`, not in the chat. Start a fresh session between phases if replies get sloppy.
6. The model accepts images. For design phases, attach screenshots (desktop 1440 wide, mobile 390 wide) of the old site and of the current dev build.

---

## Phase 0 — Audit (read-only, no code changes)

```
Read AGENTS.md and PROGRESS.md.
TASK: Phase 0 audit. Do NOT change any code.
1. Run: git status, git branch --show-current. If the tree is dirty, stop and tell me.
2. List the repo tree (exclude node_modules and .git).
3. Read package.json. Report: build tool (Vite/CRA/other), React version, router, Tailwind version, UI libraries, scripts.
4. List every route and the file that renders it.
5. List every .jsx/.js file with a one-line purpose. Mark each as: leaf component / layout / hook / util / data / entry.
6. List: env variables used, fonts, global CSS files, static assets, any use of window/document/localStorage, any SVG imported as a component.
7. Write all of this to docs/MIGRATION_AUDIT.md.
8. Propose the file conversion order (leaf components first) as a checklist in PROGRESS.md.
9. List risks and questions for me (hosting target, static export or not, anything unclear).
Gate: docs/MIGRATION_AUDIT.md exists; no other file changed (show git status).
Then send the report from AGENTS.md section 6 and stop.
```

---

## Phase 1 — Branch, legacy folder, Next.js scaffold

```
Read AGENTS.md, PROGRESS.md, docs/MIGRATION_AUDIT.md.
TASK: Phase 1 scaffold.
1. Create branch migrate/next-tsx.
2. git mv the old app source (src/, index.html, vite/CRA config files) into a folder legacy/. Keep public/ assets where they are. Don't delete anything.
3. Scaffold Next.js in a TEMP folder: bunx create-next-app@latest _scaffold  (TypeScript yes, ESLint yes, Tailwind yes, src/ directory yes, App Router yes, import alias @/*). Report the Next version installed.
4. Copy the config files and src/app skeleton from _scaffold into the repo root. Merge package.json carefully: keep the owner's existing dependencies, add Next's. Then delete _scaffold. Run: bun install.
5. Set tsconfig "strict": true, exclude "legacy" from tsconfig and from lint.
6. Make src/app/page.tsx render a simple heading "Migration in progress".
Gates: bunx tsc --noEmit, bun run build, bun run dev then curl -s http://localhost:3000/ | grep -c "Migration in progress"  (must be greater than 0).
If bunx create-next-app fails or asks something unexpected, stop and report. Do not improvise.
Commit: "chore: scaffold Next.js app, move old app to legacy/".
Report and stop.
```

---

## Phase 2 — Types, content model, and utilities

```
Read AGENTS.md, PROGRESS.md.
TASK: Phase 2. Convert utilities, hooks and data from legacy/ to TypeScript, and create the typed content model.
1. In src/lib/ and src/hooks/, convert (max 5 files per batch) the util/hook files listed in PROGRESS.md from legacy/, using git mv or copy+delete as appropriate. Give every function typed params and return types. No any.
2. Create src/content/types.ts with these types and nothing more:
   Project = { slug: string; title: string; summary: string; role: string; stack: string[]; status: 'live' | 'private' | 'in-progress'; links: { live?: string; code?: string }; image?: { src: string; alt: string } }
   Skill group = { tier: 'core' | 'working'; items: string[] }
   Experience item = { company: string; role: string; start: string; end: string | 'Present'; location: string; projects: { name: string; bullets: string[] }[] }
   Profile = { name: string; title: string; headline: string; location: string; email: string; links: { label: string; href: string }[] }
3. Create src/content/profile.ts, projects.ts, skills.ts, experience.ts with content copied from the OLD site (legacy/). Do not rewrite or improve wording. Mark anything missing as TODO(owner).
Gates after each batch: bunx tsc --noEmit (no errors).
Commit after each passing batch. Update PROGRESS.md. Report and stop.
```

---

## Phase 3 — Convert components (repeat per batch)

```
Read AGENTS.md, PROGRESS.md.
TASK: Phase 3, batch N. Convert the NEXT 5 unchecked components in PROGRESS.md from legacy/ to src/components/ as .tsx.
For each file:
- Open the old file first.
- Type the props with `type Props = {...}`. Use `import type`. No any, no ts-ignore.
- Apply the translation table in AGENTS.md section 3 (Link, Image, env vars, window/localStorage, fonts).
- Add 'use client' only if the file uses hooks, event handlers, browser APIs or Motion.
- Keep the visual output the same as the old component for now (no redesign in this phase).
Gates: bunx tsc --noEmit; bun run build.
Then render each converted component once on a temporary page src/app/_dev/page.tsx (remove it before committing) and confirm bun run dev shows no console or hydration errors.
Commit: "refactor: convert <names> to TSX". Update PROGRESS.md. Report and stop.
```

_(Repeat the same prompt until every component is ticked.)_

---

## Phase 4 — Pages, layout, routing

```
Read AGENTS.md, PROGRESS.md.
TASK: Phase 4.
1. src/app/layout.tsx: html lang="en", next/font (Inter, JetBrains Mono), import globals.css once, header (nav) and footer using the converted components.
2. src/app/page.tsx: compose Hero, SelectedWork, Skills, Experience, About, Contact in that order. All copy comes from src/content/*.ts, never hard-coded.
3. src/app/projects/[slug]/page.tsx: statically generated with generateStaticParams from src/content/projects.ts. Unknown slug → notFound().
4. Replace remaining react-router usage with next/link.
Gates: bunx tsc --noEmit; bun run build (all routes listed as static in the build output; paste it); bun run dev; curl -s http://localhost:3000/ | grep -c "<a real heading from the page>" > 0.
Commit. Update PROGRESS.md. Report and stop.
```

---

## Phase 5 — Design system pass

```
Read AGENTS.md (section 4 is the design spec), PROGRESS.md.
TASK: Phase 5. Apply the design system.
1. In src/app/globals.css define the color variables, base styles, focus ring, and type scale exactly as in AGENTS.md section 4. Don't invent other colors or fonts.
2. Build src/components/Reveal.tsx (client component) using the Motion library: fade + 16px rise, 0.4 s, ease-out, once, stagger 60 ms, and NO animation when prefers-reduced-motion is set. Apply it to section headings and cards only.
3. Restyle Hero, ProjectCard, Skills, Experience, Contact to the spec: spacing, radius, borders, hierarchy. One h1 per page.
4. If I attached screenshots, compare your result to them and list differences. Do not copy the old layout if it breaks the spec.
Gates: bunx tsc --noEmit; bun run build; take screenshots at 1440px and 390px widths if you can, otherwise tell me which pages to check; list any contrast or keyboard issues you found.
Commit. Update PROGRESS.md. Report and stop.
```

---

## Phase 6 — SEO and metadata

```
Read AGENTS.md, PROGRESS.md.
TASK: Phase 6. Ask me first: (a) the final canonical host (www or apex), (b) hosting target. Wait for my answer, then:
1. Metadata API in layout.tsx and per-page generateMetadata: title, description, canonical URL, openGraph, twitter. Use the host I give you everywhere.
2. src/app/sitemap.ts and src/app/robots.ts.
3. JSON-LD (schema.org Person) on the home page: name, jobTitle, url, sameAs (GitHub, LinkedIn). Use only facts from src/content/profile.ts.
4. OG image: use an existing /public/og-image.png or src/app/opengraph-image.tsx if it works.
5. Do NOT set output: 'export' unless I say the host is static-only. If I do, tell me the next/image consequences and ask before changing anything.
Gates: bun run build; curl the built/dev page and show the <title>, <link rel="canonical"> and <meta property="og:title"> values.
Commit. Update PROGRESS.md. Report and stop.
```

---

## Phase 7 — Performance and accessibility

```
Read AGENTS.md, PROGRESS.md.
TASK: Phase 7. Measure first, then fix.
1. Run a production build (bun run build && bun run start) and run Lighthouse in mobile mode if available. Report Performance, Accessibility, Best Practices, SEO, plus LCP, CLS, INP/TBT. If you cannot run Lighthouse, say so and list what I should run.
2. Fix only what the report shows, in this order: images (next/image sizes/priority on the hero image), fonts, unused JS, contrast, missing labels/alt, heading order, focus visibility.
3. Test keyboard-only navigation through the page and report any trap.
Target: mobile ≥ 90 for Performance, Accessibility, SEO. If you don't reach it, report the real numbers and the reasons.
Gate: before/after numbers pasted. No change without a measured reason.
Commit. Update PROGRESS.md. Report and stop.
```

---

## Phase 8 — Case study page (one project at a time)

```
Read AGENTS.md, PROGRESS.md.
TASK: Phase 8. Build the case study for project "<slug>".
Use ONLY the material I paste below. Template: Context (product, my role, team, dates) / Problem and constraints / 2–3 key decisions, each with the alternative rejected and the tradeoff / What I would change now / Evidence (screenshots, measured results) / Stack / Links.
Anything missing → TODO(owner). Do not write generic filler. Do not invent numbers.
[PASTE MY NOTES HERE]
Gates: bunx tsc --noEmit; bun run build; the page appears in the sitemap.
Commit. Report and stop.
```

---

## Phase 9 — Cleanup (only after I approve)

```
Read AGENTS.md, PROGRESS.md.
TASK: Phase 9. I have confirmed the new site matches the old one.
1. List what is still imported from legacy/ (should be nothing).
2. Propose the deletion of legacy/ and unused dependencies, and WAIT for my yes.
3. After my yes: delete legacy/, remove unused dependencies with bun remove, update README with: stack, bun install, bun dev, bun run build, folder layout.
Gates: bunx tsc --noEmit; bun run build.
Report and stop.
```

---

## PROGRESS.md template

```md
# PROGRESS

Branch: migrate/next-tsx Next version: (fill in) Hosting: (unknown)

## Phases

- [ ] 0 Audit - [ ] 1 Scaffold - [ ] 2 Types/content - [ ] 3 Components
- [ ] 4 Pages - [ ] 5 Design - [ ] 6 SEO - [ ] 7 Perf/a11y - [ ] 8 Case studies - [ ] 9 Cleanup

## Files to convert (filled by Phase 0, leaf components first)

- [ ] (path) (kind) (notes)

## Decisions

-

## Open questions for owner

-

## Last report

(short)
```

---

## Troubleshooting (for you)

- **Agent keeps editing unrelated files:** paste the "Stop. Re-read…" line from the top and ask for `git diff --stat`. Revert anything outside the phase.
- **Hydration errors:** usually `window`, `Date.now()`, or `Math.random()` in render. Move it into `useEffect`.
- **"use client" everywhere:** that defeats server rendering. Only files with hooks, handlers, browser APIs or Motion need it.
- **Type errors it "fixes" with `any`:** reject and ask for the real type, or ask it to stop and report.
- **Build passes but page body is empty in `curl`:** content is client-only. Move data fetching and rendering to Server Components.
