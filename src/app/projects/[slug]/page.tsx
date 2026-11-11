import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/content/projects';
import { siteUrl } from '@/lib/site';

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
  const url = `${siteUrl}/projects/${project.slug}`;
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: 'website',
      url,
      title: project.title,
      description: project.summary,
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <Link href="/#projects" className="font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-text">
          ← All work
        </Link>

        {project.status === 'in-progress' && (
          <p className="mt-8 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            In progress
          </p>
        )}
        <h1 className="mt-2 text-4xl font-extrabold leading-[1.1] tracking-tight text-text md:text-6xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-xl leading-[1.5] text-muted">{project.summary}</p>

        <ul className="mt-8 flex flex-wrap gap-2" aria-label="Stack">
          {project.stack.map((t) => (
            <li key={t} className="rounded-xl border border-border px-3 py-1.5 text-sm text-muted">
              {t}
            </li>
          ))}
        </ul>

        {(project.links.live || project.links.code) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center rounded-xl bg-accent px-5 text-sm font-semibold text-[#0B0F14] transition-colors hover:bg-accent/85"
              >
                Live site →
              </a>
            )}
            {project.links.code && (
              <a
                href={project.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center rounded-xl border border-border px-5 text-sm font-semibold text-text transition-colors hover:border-accent/60"
              >
                Source →
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
