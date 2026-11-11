import { Github, Linkedin, Instagram, Youtube, type LucideIcon } from 'lucide-react';
import { profile } from '@/content/profile';

// label -> lucide icon; labels must match src/content/profile.ts links[].label.
// Entries whose href is an unresolved TODO(owner) marker are filtered out — nothing fake renders.
export const iconFor: Record<string, LucideIcon> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: Instagram,
  YouTube: Youtube,
};

export type SocialLink = { label: string; href: string; Icon: LucideIcon };

export const socialLinks: SocialLink[] = profile.links.flatMap((l) => {
  const Icon = iconFor[l.label];
  if (!Icon || l.href.startsWith('TODO(')) return [];
  return [{ label: l.label, href: l.href, Icon }];
});
