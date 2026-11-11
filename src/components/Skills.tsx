import Reveal from '@/components/Reveal';
import { skills } from '@/content/skills';
import type { SkillGroup } from '@/content/types';

type Props = {
  title: string;
  items: string[];
};

const tierTitle: Record<SkillGroup['tier'], string> = {
  core: 'Core',
  working: 'Working knowledge',
};

const SkillGroup = ({ title, items }: Props) => (
  <div>
    <h3 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted">{title}</h3>
    <div className="mt-3 flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-xl border border-border px-3 py-1.5 text-sm text-text transition-colors hover:border-accent/50"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => (
  <section id="skills" className="px-6 py-16 md:py-24">
    <div className="mx-auto max-w-5xl">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight text-text">Skills</h2>
        <p className="mt-2 text-base text-muted">Core architecture stack — languages, frameworks, state, forms, build.</p>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="mt-8 rounded-xl border border-border bg-surface p-6 sm:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            {skills.map((group) => (
              <SkillGroup key={group.tier} title={tierTitle[group.tier]} items={group.items} />
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Skills;
