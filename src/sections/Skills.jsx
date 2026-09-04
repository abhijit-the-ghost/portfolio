import React from 'react';
import { skills } from '../data/skills';

const SkillGroup = ({ title, items }) => (
    <div className="mb-6">
        <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-muted mb-3">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {items.map((item) => (
                <span key={item.name} className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm font-medium text-content hover:border-[#0a66c2]/40 transition-colors">{item.name}</span>
            ))}
        </div>
    </div>
);

const Skills = () => (
    <section id="skills" className="py-16 relative">
        <div className="mx-auto max-w-5xl px-6">
            <div className="bg-surface border border-line rounded-2xl p-6 sm:p-10 shadow-sm">
                <h2 className="text-xl font-bold text-content tracking-tight">Skills</h2>
                <p className="text-sm text-muted mt-1">Core architecture stack — languages, frameworks, state, forms, build.</p>
                <div className="mt-6 grid md:grid-cols-2 gap-10">
                    <div>
                        <SkillGroup title="Frontend" items={skills.frontend} />
                        <SkillGroup title="State & Data" items={skills.stateData} />
                        <SkillGroup title="Forms & Validation" items={skills.forms} />
                    </div>
                    <div>
                        <SkillGroup title="Build & Runtime" items={skills.build} />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Skills;
