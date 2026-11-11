import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Cpu, Zap } from 'lucide-react';
import { siteConfig } from '../lib/site';

const About = () => (
    <section id="about" className="py-16 relative">
        <div className="mx-auto max-w-5xl px-6">
            <div className="bg-surface border border-line rounded-2xl p-6 sm:p-10 shadow-sm">
                <h2 className="text-xl font-bold text-content tracking-tight">About</h2>
                <div className="mt-4 text-muted leading-relaxed space-y-3 text-sm sm:text-base">
                    <p>I am a Frontend Engineer with 3+ years of professional experience building high-performance, responsive web applications. I bridge the gap between rigorous engineering systems and meticulous UI/UX design, focusing on creating clean, scalable frontend architectures.</p>
                    <p>Currently at <strong className="text-content">Insight Workshop</strong>, I engineer client applications using the modern React ecosystem. I specialize in turning complex product requirements into highly intuitive, interactive user interfaces with a focus on visual hierarchy and optimized performance.</p>
                    <h3 className="text-sm font-bold text-content mt-4 mb-2">Core Architecture Stack</h3>
                    <ul className="list-disc pl-5 space-y-0.5 text-sm">
                        <li><strong>Languages:</strong> TypeScript, JavaScript (ES6+)</li>
                        <li><strong>Frameworks & UI:</strong> React, Tailwind CSS, Shadcn UI, DaisyUI</li>
                        <li><strong>State & Data:</strong> Zustand, TanStack Query (React Query)</li>
                        <li><strong>Forms & Validation:</strong> React Hook Form, Zod</li>
                        <li><strong>Build & Runtime:</strong> Vite, Bun, Node.js</li>
                    </ul>
                    <h3 className="text-sm font-bold text-content mt-4 mb-2">What I’m Building</h3>
                    <p>I’m currently designing and open-sourcing a modular, "copy-and-paste" custom UI component library aimed at helping developers build clean, minimalistic interfaces without adding unnecessary bundle bloat.</p>
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
