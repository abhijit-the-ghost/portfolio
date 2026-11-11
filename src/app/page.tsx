import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { profile } from "@/content/profile";
import { siteUrl } from "@/lib/site";

// Canonical for the home page (title/description come from the layout defaults).
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: `${siteUrl}/`,
  sameAs: profile.links
    .filter((l) => l.label === "GitHub" || l.label === "LinkedIn")
    .map((l) => l.href),
};

// Section order per Phase 4: Hero → Selected work → Skills → Experience → About → Contact.
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Contact />
    </>
  );
}
