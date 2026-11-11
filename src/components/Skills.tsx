import { skills } from '@/content/skills';
import type { SkillGroup as SkillGroupType } from '@/content/types';

// Renders the tiered model from src/content/skills.ts (Core / Working knowledge) — the old
// levels-based groups (Frontend / State & Data / Forms / Build) no longer exist.

type Props = {
  title: string;
  items: string[];
};

const tierTitle: Record<SkillGroupType['tier'], string> = {
  core: 'Core',
  working: 'Working knowledge',
};

const SkillGroup = ({ title, items }: Props) => (
  <div className="mb-6">
    <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-muted mb-3">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm font-medium text-content hover:border-[#0a66c2]/40 transition-colors">{item}</span>
      ))}
    </div>
  </div>
);

const Skills = () => (
  <section id="skills" className="py-16 relative">
    {/* owner WIP kept: px-6 removed from the inner container (legacy stash@{0}) */}
    <div className="mx-auto max-w-5xl">
      <div className="bg-surface border border-line rounded-2xl p-6 sm:p-10 shadow-sm">
        <h2 className="text-xl font-bold text-content tracking-tight">Skills</h2>
        <p className="text-sm text-muted mt-1">Core architecture stack — languages, frameworks, state, forms, build.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-10">
          {skills.map((group) => (
            <SkillGroup key={group.tier} title={tierTitle[group.tier]} items={group.items} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
