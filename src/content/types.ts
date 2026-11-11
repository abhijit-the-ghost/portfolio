export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  status: 'live' | 'private' | 'in-progress';
  links: { live?: string; code?: string };
  image?: { src: string; alt: string };
};

export type SkillGroup = {
  tier: 'core' | 'working';
  items: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string | 'Present';
  location: string;
  projects: { name: string; bullets: string[] }[];
};

export type Profile = {
  name: string;
  title: string;
  headline: string;
  location: string;
  email: string;
  links: { label: string; href: string }[];
};
