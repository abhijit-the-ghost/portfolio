import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/content/projects';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// This route awaits params in the render path (its data IS the URL), so instant-navigation
// validation is opted out — documented Next 16 escape hatch. The route still prerenders/streams.
// Unknown slug → notFound() in the shell → real 404 status.
export const instant = false;

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-5xl px-6 py-16">
      <Link href="/#projects" className="text-sm text-muted hover:text-content transition-colors">
        ← All work
      </Link>

      {project.status === 'in-progress' && (
        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">
          In progress
        </p>
      )}
      <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-content">
        {project.title}
      </h1>
      <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed">{project.summary}</p>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
        {project.stack.map((t) => (
          <li key={t} className="rounded-full bg-content/5 px-2.5 py-0.5 text-xs font-medium text-muted">
            {t}
          </li>
        ))}
      </ul>

      {(project.links.live || project.links.code) && (
        <div className="mt-6 flex gap-4">
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#0a66c2] hover:underline">
              Live site ↗
            </a>
          )}
          {project.links.code && (
            <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#0a66c2] hover:underline">
              Source ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}
