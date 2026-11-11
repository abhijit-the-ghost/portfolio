import { experience } from '@/content/experience';
import { Building2, Calendar, MapPin } from 'lucide-react';

// New content model: experience is an array; bullets come from projects[].bullets (flattened —
// today there is a single bucket, so the visual matches the old site).
// Dropped vs old site: `type: Full-time` and the "· 3 yrs 7 mos" tenure — no slots in the model.

const Experience = () => (
  <section id="experience" className="py-16 relative">
    <div className="mx-auto max-w-5xl px-6">
      <div className="bg-surface border border-line rounded-2xl p-6 sm:p-10 shadow-sm">
        <h2 className="text-xl font-bold text-content tracking-tight">Experience</h2>

        {experience.map((job) => (
          <div key={`${job.company}-${job.start}`} className="mt-6 flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left info */}
            <div className="lg:w-72 shrink-0">
              <div className="rounded-xl border border-line bg-surface p-5 shadow-sm">
                <div className="font-bold text-content text-lg flex items-center gap-2"><Building2 className="h-5 w-5 text-[#0a66c2]" /> {job.company}</div>
                <div className="mt-1 font-medium text-content">{job.role}</div>
                <div className="mt-3 flex items-center gap-2 text-sm text-muted"><Calendar className="h-3.5 w-3.5 text-[#0a66c2]" /> {job.start} – {job.end}</div>
                <div className="mt-1 flex items-center gap-2 text-sm text-muted"><MapPin className="h-3.5 w-3.5 text-[#0a66c2]" /> {job.location}</div>
              </div>
            </div>

            {/* Right bullets (flattened across project buckets) */}
            <div className="flex-1">
              <ul className="space-y-3">
                {job.projects.flatMap((p) => p.bullets).map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm leading-relaxed text-muted"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0a66c2]" /><span>{pt}</span></li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
