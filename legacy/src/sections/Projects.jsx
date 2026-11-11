import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectCard = ({ p }) => (
    <a href={p.link} target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-line bg-surface p-6 shadow-sm hover:border-[#0a66c2]/40 transition-colors">
        <div className="flex items-start justify-between">
            <h3 className="text-lg font-bold text-content group-hover:text-[#0a66c2] transition-colors">{p.title}</h3>
            <ExternalLink className="h-4 w-4 text-muted group-hover:text-content transition-colors" />
        </div>
        <p className="mt-2 text-sm text-muted leading-relaxed">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map(t => <span key={t} className="rounded-full bg-content/5 px-2.5 py-0.5 text-xs font-medium text-muted">{t}</span>)}
        </div>
        <div className="mt-5 flex gap-3 text-xs font-medium text-muted">
            <span><Github className="h-3.5 w-3.5 inline" /> Source</span>
            <span><ArrowRight className="h-3.5 w-3.5 inline" /> Live</span>
        </div>
    </a>
);

const Projects = () => (
    <section id="projects" className="py-16 relative">
        <div className="mx-auto max-w-5xl px-6">
            <div className="bg-surface border border-line rounded-2xl p-6 sm:p-10 shadow-sm">
                <h2 className="text-xl font-bold text-content tracking-tight">Projects</h2>
                <p className="text-sm text-muted mt-1">Selected work — React, TypeScript, Tailwind.</p>

                <div className="mt-6 grid sm:grid-cols-2 gap-6">
                    {projects.map(p => <ProjectCard key={p.title} p={p} />)}
                </div>
            </div>
        </div>
    </section>
);

export default Projects;
