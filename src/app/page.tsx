import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";

// Section order per Phase 4: Hero → Selected work → Skills → Experience → About → Contact.
// (The legacy order — Hero, About, Skills, Projects, Experience, Contact — was intentionally replaced.)
export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Contact />
    </>
  );
}
