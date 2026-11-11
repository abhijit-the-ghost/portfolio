'use client';
import { profile } from '@/content/profile';
import { monogram } from '@/lib/site';
import { ArrowUp } from 'lucide-react';

// Build-time constant (AGENTS.md §3 — no Date in render).
const YEAR = new Date().getFullYear();

const Footer = () => (
  <footer className="border-t border-border">
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
      <div className="flex items-center gap-3">
        <span className="grid h-8 w-8 place-items-center rounded-xl border border-border font-mono text-xs font-semibold text-text">
          {monogram}
        </span>
        <p className="text-sm">
          <span className="font-semibold text-text">{profile.name}</span>
          <span className="text-muted"> · {profile.title}</span>
        </p>
      </div>
      <p className="font-mono text-xs text-muted">
        © {YEAR} {profile.name}
      </p>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex items-center gap-1 text-xs text-muted transition-colors hover:text-text"
      >
        Back to top <ArrowUp className="h-3 w-3" />
      </button>
    </div>
  </footer>
);

export default Footer;
