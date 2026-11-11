import type { CaseStudy } from './types';
import lofiDigitalClock from './case-studies/lofi-digital-clock.json';
import aninfo from './case-studies/aninfo.json';
import modularUiComponentLibrary from './case-studies/modular-ui-component-library.json';
import dsaVisualization from './case-studies/dsa-visualization.json';

// Case-study notes per project. Each file is a copy of the owner's phase-8 template; every
// value still marked TODO(owner) renders as-is (muted) until the owner fills it in.
// Stack and links are NOT duplicated here — they come from src/content/projects.ts.
const caseStudies: Record<string, CaseStudy> = {
  'lofi-digital-clock': lofiDigitalClock,
  aninfo,
  'modular-ui-component-library': modularUiComponentLibrary,
  'dsa-visualization': dsaVisualization,
};

export function caseStudyFor(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}
