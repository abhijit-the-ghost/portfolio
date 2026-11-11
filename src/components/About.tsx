import Reveal from '@/components/Reveal';
import { Building2, Cpu, Zap } from 'lucide-react';

// Wording: minimal and subtle (owner). Content from legacy + owner decisions; stat tiles border/radius per spec.
const About = () => (
  <section id="about" className="px-6 py-16">
    <div className="mx-auto max-w-5xl">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight text-text">About</h2>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="mt-8 rounded-xl border border-border bg-surface p-6 sm:p-10">
          <div className="space-y-3 text-base leading-[1.6] text-muted">
            <p>Frontend Engineer with 3+ years building responsive web applications with React and TypeScript. I focus on clean UI/UX and a maintainable frontend architecture.</p>
            <p>At <strong className="font-semibold text-text">Insight Workshop</strong>, I build client applications with React and TypeScript — turning complex product requirements into clear, usable interfaces.</p>
            <h3 className="pt-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted">Core architecture stack</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm">
              <li><strong className="text-text">Languages:</strong> TypeScript, JavaScript (ES6+)</li>
              <li><strong className="text-text">Frameworks & UI:</strong> React, Tailwind CSS, Shadcn UI, DaisyUI</li>
              <li><strong className="text-text">State & Data:</strong> Zustand, TanStack Query (React Query)</li>
              <li><strong className="text-text">Forms & Validation:</strong> React Hook Form, Zod</li>
              <li><strong className="text-text">Build & Runtime:</strong> Vite, Bun, Node.js</li>
            </ul>
            <h3 className="pt-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted">What I’m building</h3>
            <p>I’m currently building DSA Visualization — a browser-based workspace for learning data structures and algorithms through interactive visual explanations.</p>
            <p>Always open to connecting with fellow engineers, designers, and tech enthusiasts.</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-bg p-4">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-text"><Building2 className="h-4 w-4 text-accent" /> Current</h3>
              <p className="mt-1.5 text-xs text-muted">Insight Workshop · Frontend Engineer</p>
            </div>
            <div className="rounded-xl border border-border bg-bg p-4">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-text"><Cpu className="h-4 w-4 text-accent" /> Stack</h3>
              <p className="mt-1.5 text-xs text-muted">React · TypeScript · Tailwind · Zustand</p>
            </div>
            <div className="rounded-xl border border-border bg-bg p-4">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-text"><Zap className="h-4 w-4 text-accent" /> Building</h3>
              <p className="mt-1.5 text-xs text-muted">DSA Visualization — interactive visual explanations</p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default About;
