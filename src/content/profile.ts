import type { Profile } from './types';

// Content copied verbatim from the old site (legacy/src/lib/site.js + legacy/src/data/site.js,
// merged). Marketing wording kept as supplied — see open questions in PROGRESS.md / Q5.

export const profile: Profile = {
  name: 'Abhijit Guragain',
  title: 'Frontend Engineer @Insight Workshop',
  headline:
    'Frontend Engineer @Insight Workshop | React, TypeScript, Tailwind | Clean UI/UX Systems, Lightweight State (Zustand), & Scalable Web Architectures',
  location: 'Kathmandu, Nepal',
  email: 'abhijitguragain546@gmail.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/abhijit-the-ghost/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/abhijit-guragain/' },
    { label: 'Instagram', href: 'https://instagram.com/ig_abhijit.4/' },
    { label: 'YouTube', href: 'https://youtube.com/@abhijitguragain8639' },
    // TODO(owner): old site shipped a placeholder CodePen URL ('https://codepen.io/your-profile'). Confirm the real handle or remove this entry.
    { label: 'CodePen', href: 'TODO(owner): confirm CodePen profile URL' },
  ],
};

// Short bio carried over from legacy/src/data/site.js (kept; Profile type has no field for it).
export const bioShort =
  'Frontend Engineer with 3+ years building high-performance web apps — React, TypeScript, Tailwind, Zustand, TanStack Query.';
