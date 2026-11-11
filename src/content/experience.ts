import type { ExperienceItem } from './types';

// Copied verbatim from legacy/src/data/experience.js (Insight Workshop is the only entry on the old site).
// 'type: Full-time' and the "period" string had no slots in the target model and were dropped:
//   - type (Full-time)  -> TODO(owner): add a `type` field to ExperienceItem if you want it shown
//   - "· 3 yrs 7 mos"   -> tenure, derivable from start/end at render time
// Bullets are split into a single bucket because the old site does not break work down per project.
// TODO(owner): split bullets into named projects (or confirm the single-bucket shape) before Phase 5.

export const experience: ExperienceItem[] = [
  {
    company: 'Insight Workshop',
    role: 'Frontend Web Developer',
    start: 'Mar 2023',
    end: 'Present',
    location: 'Bhanimandal-04 Lalitpur',
    projects: [
      {
        name: 'Client applications', // alt: company name as bucket — confirm
        bullets: [
          'Architect and maintain scalable frontend features for web applications using React and TypeScript, ensuring strict type safety and performance optimization.',
          'Implemented TanStack Query to manage asynchronous server state, caching, and background data synchronization, reducing redundant API overhead.',
          'Streamlined complex form workflows and enforced runtime data integrity by integrating React Hook Form with Zod validation schemas.',
          'Designed and built responsive dashboard interfaces and interactive components (like complex modals and fee matrices) using Tailwind CSS, prioritizing clean visual hierarchy.',
          'Improved development workflows and reduced local build times across project ecosystems by transitioning legacy setups to Vite and Bun.',
        ],
      },
    ],
  },
];
