import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { profile } from "@/content/profile";
import { skills } from "@/content/skills";
import { siteUrl } from "@/lib/site";

// Canonical for the home page (title/description come from the layout defaults).
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// schema.org Person — every value is a fact from src/content/*.ts.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: `${siteUrl}/`,
  image: `${siteUrl}/opengraph-image`,
  worksFor: {
    "@type": "Organization",
    name: "Insight Workshop",
  },
  knowsAbout: skills.flatMap((group) => group.items),
  sameAs: profile.links
    .filter((l) => l.href.startsWith("http"))
    .map((l) => l.href),
};

// Section order: Hero → About → Selected work → Skills → Experience → Contact (owner-reordered 2026-11-11).
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
