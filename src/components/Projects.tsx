import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projects } from '@/content/projects';
import type { Project } from '@/content/types';

type Props = {
  p: Project;
};

const cardClass =
  'group block rounded-2xl border border-line bg-surface p-6 shadow-sm hover:border-[#0a66c2]/40 transition-colors';

const ProjectCard = ({ p }: Props) => {
  const href = p.links.live ?? p.links.code;
  // No invented URLs: card is interactive only when a live/code link exists.
  const inner = (
    <>
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-bold text-content group-hover:text-[#0a66c2] transition-colors">{p.title}</h3>
        {href && <ExternalLink className="h-4 w-4 text-muted group-hover:text-content transition-colors" />}
      </div>
      {p.status === 'in-progress' && (
        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">In progress</p>
      )}
      <p className="mt-2 text-sm text-muted leading-relaxed">{p.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.stack.map((t) => <span key={t} className="rounded-full bg-content/5 px-2.5 py-0.5 text-xs font-medium text-muted">{t}</span>)}
      </div>
      <div className="mt-5 flex gap-3 text-xs font-medium text-muted">
        {p.links.code && <span><Github className="h-3.5 w-3.5 inline" /> Source</span>}
        {p.links.live && <span><ArrowRight className="h-3.5 w-3.5 inline" /> Live</span>}
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cardClass}>
        {inner}
      </a>
    );
  }
  return <div className={cardClass}>{inner}</div>;
};

const Projects = () => (
  <section id="projects" className="py-16 relative">
    <div className="mx-auto max-w-5xl px-6">
      <div className="bg-surface border border-line rounded-2xl p-6 sm:p-10 shadow-sm">
        <h2 className="text-xl font-bold text-content tracking-tight">Projects</h2>
        <p className="text-sm text-muted mt-1">Selected work — React, TypeScript, Tailwind.</p>

        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
