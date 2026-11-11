import React from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import { siteConfig } from "../lib/site";

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
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-muted hover:text-content transition-colors"
            >
              <div className="rounded-lg bg-[#0a66c2]/10 p-2 text-[#0a66c2]">
                <Mail className="h-4 w-4" />
              </div>
              {siteConfig.email}
            </a>
            <div className="flex items-center gap-3 text-muted">
              <div className="rounded-lg bg-[#0a66c2]/10 p-2 text-[#0a66c2]">
                <MapPin className="h-4 w-4" />
              </div>
              {siteConfig.location}
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full p-3 text-[#0a66c2] hover:bg-[#0a66c2]/10 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-3 text-[#0a66c2] hover:bg-[#0a66c2]/10 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full p-3 text-[#0a66c2] hover:bg-[#0a66c2]/10 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="rounded-full p-3 text-[#0a66c2] hover:bg-[#0a66c2]/10 transition-colors"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.socials.codepen}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CodePen"
              className="rounded-full p-3 text-[#0a66c2] hover:bg-[#0a66c2]/10 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                <line x1="12" y1="22" x2="12" y2="15.5" />
                <polyline points="22 8.5 12 15.5 2 8.5" />
                <polyline points="2 15.5 12 8.5 22 15.5" />
                <line x1="12" y1="2" x2="12" y2="8.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
