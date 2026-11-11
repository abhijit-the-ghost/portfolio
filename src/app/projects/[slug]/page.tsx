import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/content/projects';
import { caseStudyFor } from '@/content/caseStudies';
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

const label =
  'font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted';
const section = 'mt-14 border-t border-border pt-10';
const body = 'mt-4 text-base leading-[1.6] text-muted';

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const cs = caseStudyFor(slug);

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

        {/* Case study — fills in when src/content/case-studies/<slug>.json is populated */}
        {cs && (
          <>
            <section className={section} aria-label="Context">
              <h2 className={label}>Context</h2>
              <dl className="mt-4 grid grid-cols-1 gap-4 text-base text-muted sm:grid-cols-2">
                <div><dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Product</dt><dd className="mt-1 text-text">{cs.context.product}</dd></div>
                <div><dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Role</dt><dd className="mt-1 text-text">{cs.context.role}</dd></div>
                <div><dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Team</dt><dd className="mt-1 text-text">{cs.context.team}</dd></div>
                <div><dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Dates</dt><dd className="mt-1 text-text">{cs.context.dates}</dd></div>
              </dl>
            </section>

            <section className={section} aria-label="Problem and constraints">
              <h2 className={label}>Problem &amp; constraints</h2>
              <p className={body}>{cs.problemAndConstraints}</p>
            </section>

            <section className={section} aria-label="Key decisions">
              <h2 className={label}>Key decisions</h2>
              <ol className="mt-4 space-y-6">
                {cs.decisions.map((d, i) => (
                  <li key={i} className="rounded-xl border border-border bg-surface p-5">
                    <h3 className="text-base font-semibold text-text">{d.title}</h3>
                    <p className="mt-2 text-base leading-[1.6] text-muted">{d.decision}</p>
                    <dl className="mt-3 space-y-2 text-sm leading-[1.6] text-muted">
                      <div><dt className="inline font-semibold text-text">Rejected alternative — </dt><dd className="inline">{d.rejectedAlternative}</dd></div>
                      <div><dt className="inline font-semibold text-text">Tradeoff — </dt><dd className="inline">{d.tradeoff}</dd></div>
                    </dl>
                  </li>
                ))}
              </ol>
            </section>

            <section className={section} aria-label="What I would change now">
              <h2 className={label}>What I would change now</h2>
              <ul className="mt-4 space-y-2">
                {cs.changesNow.map((c, i) => (
                  <li key={i} className="flex gap-3 text-base leading-[1.6] text-muted">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className={section} aria-label="Evidence">
              <h2 className={label}>Evidence</h2>
              <ul className="mt-4 space-y-2">
                {cs.evidence.map((e, i) => (
                  <li key={i} className="flex gap-3 text-base leading-[1.6] text-muted">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}
      </div>
    </article>
  );
}
