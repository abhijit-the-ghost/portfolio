# Abhijit Guragain — Portfolio

> Frontend Engineer @Insight Workshop | React · TypeScript · Tailwind

Personal portfolio built with Next.js (App Router) and TypeScript (strict). Dark, calm design; content lives in typed TypeScript modules.

## Stack

- **Next.js 16** (App Router, Turbopack, Cache Components) · React 19
- **TypeScript** (`strict: true`)
- **Tailwind CSS v4** (CSS-first config in `globals.css`) + **DaisyUI v5** (registered custom dark theme; UI is hand-styled — no DaisyUI component classes)
- **framer-motion** — only inside the `Reveal` wrapper (fade + rise, once)
- **lucide-react** icons · `@/*` path alias → `src/*` · package manager: **bun**

## Getting started (bun)

```bash
bun install      # install dependencies
bun dev          # dev server on http://localhost:3000
bun run build    # production build
bun run start    # serve the production build
bun run lint     # ESLint
bunx tsc --noEmit
```

## Folder layout

```
src/
├── app/
│   ├── layout.tsx            # Inter + JetBrains Mono (next/font), header Navbar, footer, metadata
│   ├── page.tsx              # / — Hero, Projects, Skills, Experience, About, Contact
│   ├── projects/[slug]/      # case study pages (static via generateStaticParams)
│   ├── globals.css           # Tailwind v4 + DaisyUI plugin + design tokens (§4 spec)
│   ├── sitemap.ts, robots.ts
│   └── opengraph-image.tsx   # generated OG card (next/og); twitter-image.tsx re-exports it
├── components/               # Navbar, Footer, Hero, Projects, Skills, Experience, About, Contact, Reveal
├── content/                  # single source of truth for copy — typed, never hard-coded in components
│   ├── types.ts              # Project, SkillGroup, ExperienceItem, Profile, CaseStudy
│   ├── profile.ts, projects.ts, skills.ts, experience.ts
│   ├── caseStudies.ts        # loader for the case-study JSON files
│   └── case-studies/<slug>.json   # one file per project (TODO(owner) until filled)
├── lib/                      # site.ts (navLinks, monogram, siteUrl), socials.ts (label → icon map)
└── assets/                   # meImage.jpg (hero portrait)
```

## Content editing

All copy comes from `src/content/*.ts` — components never hard-code text. To add a project, add an entry to `projects.ts`; its case study goes into `case-studies/<slug>.json` (a slot already exists for every project).

## Deployment

GitHub Pages via `.github/workflows/deploy.yml` (push to `main` → bun install --frozen-lockfile → `bun run build` → deploy artifact).

> ⚠️ The workflow currently uploads `./dist` (Vite artifact). Next.js static export writes `./out`, and switching requires `output: 'export'` in `next.config.ts` plus `images.unoptimized: true` (GitHub Pages has no image-optimization server). **Not enabled — needs the owner's explicit go-ahead.**

## License

MIT — feel free to use as reference.
