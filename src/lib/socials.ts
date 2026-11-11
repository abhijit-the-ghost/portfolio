import { Github, Linkedin, Instagram, Youtube, Codepen, type LucideIcon } from 'lucide-react';
import { profile } from '@/content/profile';

// label -> lucide icon; labels must match src/content/profile.ts links[].label.
export const iconFor: Record<string, LucideIcon> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: Instagram,
  YouTube: Youtube,
  CodePen: Codepen, // brand icons deprecated in lucide (removed in v1) — revisit then
};

export type SocialLink = { label: string; href: string; Icon: LucideIcon };

export const socialLinks: SocialLink[] = profile.links.flatMap((l) => {
  const Icon = iconFor[l.label];
  if (!Icon || l.href.startsWith('TODO(')) return [];
  return [{ label: l.label, href: l.href, Icon }];
});
