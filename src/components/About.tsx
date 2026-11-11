import { Building2, Cpu, Zap } from 'lucide-react';

// Content adapted from legacy/src/sections/About.jsx; wording trimmed per owner "minimal and subtle and simple" (2026-11-11). `motion`/`siteConfig` imports dropped (unused).
const About = () => (
  <section id="about" className="py-16 relative">
    <div className="mx-auto max-w-5xl px-6">
      <div className="bg-surface border border-line rounded-2xl p-6 sm:p-10 shadow-sm">
        <h2 className="text-xl font-bold text-content tracking-tight">About</h2>
        <div className="mt-4 text-muted leading-relaxed space-y-3 text-sm sm:text-base">
          <p>Frontend Engineer with 3+ years building responsive web applications with React and TypeScript. I focus on clean UI/UX and a maintainable frontend architecture.</p>
          <p>At <strong className="text-content">Insight Workshop</strong>, I build client applications with React and TypeScript — turning complex product requirements into clear, usable interfaces.</p>
          <h3 className="text-sm font-bold text-content mt-4 mb-2">Core Architecture Stack</h3>
          <ul className="list-disc pl-5 space-y-0.5 text-sm">
            <li><strong>Languages:</strong> TypeScript, JavaScript (ES6+)</li>
            <li><strong>Frameworks & UI:</strong> React, Tailwind CSS, Shadcn UI, DaisyUI</li>
            <li><strong>State & Data:</strong> Zustand, TanStack Query (React Query)</li>
            <li><strong>Forms & Validation:</strong> React Hook Form, Zod</li>
            <li><strong>Build & Runtime:</strong> Vite, Bun, Node.js</li>
          </ul>
          <h3 className="text-sm font-bold text-content mt-4 mb-2">What I’m Building</h3>
          <p>I’m currently designing and open-sourcing a modular, copy-and-paste UI component library aimed at helping developers build clean, minimal interfaces without adding unnecessary bundle bloat.</p>
          <p>Always open to connecting with fellow engineers, designers, and tech enthusiasts. Let’s build something clean.</p>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl bg-surface border border-line p-4"><h3 className="text-sm font-semibold text-content flex items-center gap-2"><Building2 className="h-4 w-4 text-[#0a66c2]" /> Current</h3><p className="text-xs text-muted mt-1">Insight Workshop · Frontend Engineer</p></div>
          <div className="rounded-xl bg-surface border border-line p-4"><h3 className="text-sm font-semibold text-content flex items-center gap-2"><Cpu className="h-4 w-4 text-[#0a66c2]" /> Stack</h3><p className="text-xs text-muted mt-1">React · TypeScript · Tailwind · Zustand</p></div>
          <div className="rounded-xl bg-surface border border-line p-4"><h3 className="text-sm font-semibold text-content flex items-center gap-2"><Zap className="h-4 w-4 text-[#0a66c2]" /> Building</h3><p className="text-xs text-muted mt-1">Modular UI library — clean, minimal, copy-paste</p></div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
