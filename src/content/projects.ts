import type { Project } from './types';

// Copied from legacy/src/data/projects.js (lofi clock, aninfo) plus the old `featuredProject`
// export, restructured into the Project type. `role` did not exist on the old site -> TODO(owner).
// The old featuredProject fields `challenges` and `features` have no slot in the target type and
// were dropped (see PROGRESS.md / Q6). Slugs are derived from project names for /projects/[slug].
// NOTE: Aninfo's `github` link in the old site points at the lofi-digital-clock repo — copied
// verbatim, flagged TODO(owner); likely a paste error, not corrected here.

export const projects: Project[] = [
  {
    slug: 'lofi-digital-clock',
    title: 'Lofi Digital Clock',
    summary:
      'A lofi-themed digital clock that changes theme based on time of day.',
    role: 'TODO(owner): role on this project',
    stack: ['React', 'Tailwind CSS'],
    status: 'live',
    links: {
      live: 'https://abhijit-the-ghost.github.io/lofi-digital-clock',
      code: 'https://github.com/abhijit-the-ghost/lofi-digital-clock',
    },
  },
  {
    slug: 'aninfo',
    title: 'Aninfo',
    summary: 'Anime information website with search functionality.',
    role: 'TODO(owner): role on this project',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    status: 'live',
    links: {
      live: 'https://abhijit-the-ghost.github.io/aninfo',
      // TODO(owner): old site links Aninfo to the lofi-digital-clock repo — confirm the intended repo.
      code: 'https://github.com/abhijit-the-ghost/lofi-digital-clock',
    },
  },
  {
    slug: 'modular-ui-component-library',
    title: 'Modular UI Component Library (Open Source)',
    summary:
      'A copy-and-paste custom UI component library for clean, minimal interfaces without bundle bloat.',
    role: 'TODO(owner): role on this project',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    status: 'in-progress',
    links: {
      // TODO(owner): repo and live URL once published (old site had '#' placeholders).
    },
  },
];
