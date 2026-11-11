'use client';
import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

// AGENTS.md §4 — Motion only for this wrapper: fade + 16px rise, 0.4 s, ease-out, play once.
// Stagger: caller passes delay={index * 0.06} for 60 ms steps. Apply to section headings and cards only.
// No animation at all when prefers-reduced-motion is set.

type Props = {
  children: ReactNode;
  className?: string;
  /** seconds; caller passes index * 0.06 for a 60 ms stagger */
  delay?: number;
};

export default function Reveal({ children, className, delay = 0 }: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
