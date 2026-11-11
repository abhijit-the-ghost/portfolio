import type { ExperienceItem } from './types';

// Copied from legacy/src/data/experience.js (Insight Workshop is the only entry on the old site).
// 'type: Full-time' and the "period" string had no slots in the target model and were dropped:
//   - type (Full-time)  -> TODO(owner): add a `type` field to ExperienceItem if you want it shown
//   - "· 3 yrs 7 mos"   -> tenure, derivable from start/end at render time
// The three systems he works on cannot be named publicly — owner-supplied generic labels
// (Digital Registry / Learning Management System / School Management System). Bullets apply
// across all three (owner-confirmed 2026-11-11), so they are listed once on purpose.

export const experience: ExperienceItem[] = [
  {
    company: 'Insight Workshop',
    role: 'Frontend Web Developer',
    start: 'Mar 2023',
    end: 'Present',
    location: 'Bhanimandal-04 Lalitpur',
    projects: [
      {
        name: 'Digital Registry · Learning Management System · School Management System',
        bullets: [
          'Architect and maintain frontend features for web applications using React and TypeScript, with strict type safety.',
          'Implemented TanStack Query to manage asynchronous server state, caching, and background data synchronization, reducing redundant API overhead.',
          'Streamlined complex form workflows and enforced runtime data integrity by integrating React Hook Form with Zod validation schemas.',
          'Designed and built responsive dashboard interfaces and interactive components (like complex modals and fee matrices) using Tailwind CSS.',
          'Improved development workflows and reduced local build times across project ecosystems by transitioning legacy setups to Vite and Bun.',
        ],
      },
    ],
  },
];
