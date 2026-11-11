import { Mail, MapPin } from 'lucide-react';
import { profile } from '@/content/profile';
import { socialLinks } from '@/lib/socials';

// Socials render from profile.links via socialLinks — CodePen is filtered out until the owner
// confirms the handle (its old 'your-profile' placeholder is not reproduced). Server component:
// no hooks, no handlers, no Motion.
const Contact = () => (
  <section id="contact" className="py-16 relative">
    <div className="mx-auto max-w-5xl px-6">
      <div className="bg-surface border border-line rounded-2xl p-6 sm:p-10 shadow-sm">
        <h2 className="text-xl font-bold text-content tracking-tight">
          Contact
        </h2>
        <p className="text-sm text-muted mt-1">
          Open to work, collaborations, and conversations.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-8">
          <div className="space-y-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-muted hover:text-content transition-colors"
            >
              <div className="rounded-lg bg-[#0a66c2]/10 p-2 text-[#0a66c2]">
                <Mail className="h-4 w-4" />
              </div>
              {profile.email}
            </a>
            <div className="flex items-center gap-3 text-muted">
              <div className="rounded-lg bg-[#0a66c2]/10 p-2 text-[#0a66c2]">
                <MapPin className="h-4 w-4" />
              </div>
              {profile.location}
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-full p-3 text-[#0a66c2] hover:bg-[#0a66c2]/10 transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
