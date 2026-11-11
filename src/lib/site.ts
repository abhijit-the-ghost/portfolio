// Site-level constants shared with the header/footer. Content lives in src/content/*.ts.
// navLinks uses section ids (scroll anchors), identical to the old site (legacy/src/lib/site.js + legacy/src/data/site.js, which were duplicates).

export type NavLink = { name: string; id: string };

// Canonical host (owner-confirmed 2026-11-11). apex https://abhijitguragain.com.np/ 301s here at the host level; metadata/sitemap/OG point ONLY at the www origin (canonical must be singular).
export const siteUrl = 'https://www.abhijitguragain.com.np';

export const monogram = 'AG';

export const navLinks: NavLink[] = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Contact', id: 'contact' },
];
