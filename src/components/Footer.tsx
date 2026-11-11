'use client';
import { profile } from '@/content/profile';
import { monogram } from '@/lib/site';
import { ArrowUp } from 'lucide-react';

// Build-time constant (AGENTS.md §3 — no Date in render). Mismatch edge is once a year at midnight.
const YEAR = new Date().getFullYear();

const Footer = () => (
  <footer className="border-t border-line bg-surface/40">
    <div className="mx-auto max-w-6xl px-6 py-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#0a66c2] text-xs font-bold text-white">
            {monogram}
          </span>
          <div className="text-sm">
            <span className="font-semibold text-content">
              {profile.name}
            </span>
            <span className="text-muted"> · {profile.title}</span>
          </div>
        </div>
        <div className="text-xs text-muted">
          © {YEAR} {profile.name}. Built with React,
          Tailwind & care.
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xs text-muted hover:text-content transition-colors flex items-center gap-1"
        >
          Back to top <ArrowUp className="h-3 w-3" />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
