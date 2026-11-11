import type { SkillGroup } from "./types";

// Tiered per AGENTS.md §5 (owner-confirmed 2026-11-11). The old 0–100 levels were dropped.
// Core = AGENTS §5 Core list (React, TypeScript, Next.js, Tailwind, TanStack Query, Zustand,
// React Hook Form + Zod) minus TanStack Table, which the old site never mentions — owner to
// confirm before it is added. Working knowledge = remaining old-site stack.

export const skills: SkillGroup[] = [
  {
    tier: "core",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "TanStack Query",
      "TanStack Table",
      "Zustand",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    tier: "working",
    items: [
      "JavaScript",
      "Vite",
      "Bun",
      "Node.js",
      "Python",
      "Django",
      "PostgreSQL",
      "Git",
      "GitHub Actions",
      "NGINX",
    ],
  },
];
