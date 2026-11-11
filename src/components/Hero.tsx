import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { profile } from '@/content/profile';
import { socialLinks } from '@/lib/socials';
import { ArrowRight, MapPin } from 'lucide-react';
import meImage from '@/assets/meImage.jpg';

// Spec §4: calm, dark, confident. One h1. The only gradient on the site is this one subtle hero glow.
const Hero = () => (
  <section id="hero" className="relative overflow-hidden px-6 pt-24 pb-16 md:pt-32 md:pb-24">
    {/* one subtle hero glow */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] max-w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.12),transparent_70%)]"
    />

    <div className="relative mx-auto flex max-w-5xl flex-col gap-8 sm:flex-row sm:items-center sm:gap-12">
      <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-xl border border-border sm:h-40 sm:w-40">
        <Image
          src={meImage}
          alt={profile.name}
          fill
          sizes="(min-width: 640px) 160px, 128px"
          className="object-cover object-top"
          priority
        />
      </div>

      <Reveal>
        <h1 className="text-[clamp(2.375rem,8vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-text">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-2xl text-xl leading-[1.5] text-muted">{profile.headline}</p>
        <p className="mt-3 flex items-center gap-1.5 text-sm text-muted">
          <MapPin className="h-3.5 w-3.5 text-accent" />
          <span>Based in {profile.location}</span>
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-accent px-5 text-sm font-semibold text-[#0B0F14] transition-colors hover:bg-accent/85"
          >
            View work <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex h-11 items-center rounded-xl border border-border px-5 text-sm font-semibold text-text transition-colors hover:border-accent/60"
          >
            Contact
          </a>
        </div>

        <div className="mt-6 flex gap-2">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-xl border border-border p-2.5 text-muted transition-colors hover:border-accent/50 hover:text-text"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default Hero;
