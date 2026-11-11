import Reveal from '@/components/Reveal';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projects } from '@/content/projects';
import type { Project } from '@/content/types';

type Props = {
  p: Project;
  delay?: number;
};

const cardClass =
  'group block h-full rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/50';

const ProjectCard = ({ p, delay = 0 }: Props) => {
  // No invented URLs: card is interactive only when a live/code link exists.
  const href = p.links.live ?? p.links.code;
  const inner = (
    <>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight text-text transition-colors group-hover:text-accent">
          {p.title}
        </h3>
        {href && (
          <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-text" />
        )}
      </div>
      {p.status === 'in-progress' && (
        <p className="mt-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
          In progress
        </p>
      )}
      <p className="mt-2 text-base leading-[1.6] text-muted">{p.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.stack.map((t) => (
          <span key={t} className="rounded-xl border border-border px-2.5 py-0.5 text-xs text-muted">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 flex gap-4 text-xs font-medium text-muted">
        {p.links.code && (
          <span className="flex items-center gap-1.5">
            <Github className="h-3.5 w-3.5" /> Source
          </span>
        )}
        {p.links.live && (
          <span className="flex items-center gap-1.5">
            <ArrowRight className="h-3.5 w-3.5" /> Live
          </span>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <Reveal delay={delay} className="h-full">
        <a href={href} target="_blank" rel="noopener noreferrer" className={cardClass}>
          {inner}
        </a>
      </Reveal>
    );
  }
  return (
    <Reveal delay={delay} className="h-full">
      <div className={cardClass}>{inner}</div>
    </Reveal>
  );
};

const Projects = () => (
  <section id="projects" className="px-6 py-16 md:py-24">
    <div className="mx-auto max-w-5xl">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight text-text">Projects</h2>
        <p className="mt-2 text-base text-muted">Selected work — React, TypeScript, Tailwind.</p>
      </Reveal>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} p={p} delay={i * 0.06} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
