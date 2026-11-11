import Reveal from '@/components/Reveal';
import { Mail, MapPin } from 'lucide-react';
import { profile } from '@/content/profile';
import { socialLinks } from '@/lib/socials';

// Server component. Socials from profile.links via socialLinks (CodePen included — real handle).
const Contact = () => (
  <section id="contact" className="px-6 py-16">
    <div className="mx-auto max-w-5xl">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight text-text">Contact</h2>
        <p className="mt-2 text-base text-muted">Open to work, collaborations, and conversations.</p>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="mt-8 flex flex-col gap-8 rounded-xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-11 w-fit items-center gap-2 rounded-xl bg-accent px-5 text-sm font-semibold text-[#0B0F14] transition-colors hover:bg-accent/85"
            >
              <Mail className="h-4 w-4" /> {profile.email}
            </a>
            <p className="flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4 text-accent" /> {profile.location}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-xl border border-border p-3 text-muted transition-colors hover:border-accent/50 hover:text-text"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Contact;
