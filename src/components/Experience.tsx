import Reveal from '@/components/Reveal';
import { experience } from '@/content/experience';
import { Building2, Calendar, MapPin } from 'lucide-react';

// bullets flattened across project buckets — today there is a single shared bucket,
// so the visual matches the old site. `type`/tenure strings have no slots in the model.

const Experience = () => (
  <section id="experience" className="px-6 py-16">
    <div className="mx-auto max-w-5xl">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight text-text">Experience</h2>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="mt-8 rounded-xl border border-border bg-surface p-6 sm:p-8">
          {experience.map((job) => (
            <div
              key={`${job.company}-${job.start}`}
              className="flex flex-col gap-8 lg:flex-row lg:gap-12"
            >
              <div className="shrink-0 lg:w-72">
                <h3 className="flex items-center gap-2 text-xl font-semibold text-text">
                  <Building2 className="h-5 w-5 text-accent" /> {job.company}
                </h3>
                <p className="mt-1.5 font-medium text-text">{job.role}</p>
                <p className="mt-3 flex items-center gap-2 text-sm text-muted">
                  <Calendar className="h-3.5 w-3.5 text-accent" /> {job.start} – {job.end}
                </p>
                <p className="mt-1.5 flex items-center gap-2 text-sm text-muted">
                  <MapPin className="h-3.5 w-3.5 text-accent" /> {job.location}
                </p>
                <p className="mt-4 font-mono text-[11px] uppercase leading-relaxed tracking-[0.2em] text-muted">
                  {job.projects.map((p) => p.name).join(' · ')}
                </p>
              </div>

              <ul className="flex-1 space-y-3">
                {job.projects.flatMap((p) => p.bullets).map((pt) => (
                  <li key={pt} className="flex gap-3 text-base leading-[1.6] text-muted">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default Experience;
