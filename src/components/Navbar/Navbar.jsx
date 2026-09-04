import { useState, useEffect, useRef } from "react";
import motion from "framer-motion";
import { Home, Briefcase, User, Mail, Code } from "lucide-react";
import { navLinks, siteConfig } from "../../lib/site";

// Map icon names to Lucide icons
// Update the iconMap to match your navLinks IDs
const iconMap = {
  hero: Home, // Add this if you have a hero section
  home: Home,
  projects: Briefcase,
  about: User,
  contact: Mail,
  skills: Code,
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef(null);
  const linkRefs = useRef({});

  // Handle scroll effect for navbar background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle active link detection on scroll
  useEffect(() => {
    const handleActiveLink = () => {
      const scrollPosition = window.scrollY + 120;

      let currentSection = "hero";
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = link.id;
            break;
          }
        }
      }

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleActiveLink, { passive: true });
    handleActiveLink();

    return () => window.removeEventListener("scroll", handleActiveLink);
  }, []);

  // Update indicator position when active link changes
  useEffect(() => {
    const activeElement = linkRefs.current[activeLink];
    if (activeElement && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = activeElement.getBoundingClientRect();
      setIndicatorStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
      });
    }
  }, [activeLink]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setActiveLink(id);

    const section = document.getElementById(id);
    if (section) {
      const offset = 80;
      const top = section.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 md:top-4 md:bottom-auto`}
    >
      <div className="mx-auto w-full max-w-5xl flex justify-center">
        {/* Desktop Navigation */}
        <div
          ref={navRef}
          className={`hidden md:flex items-center justify-center gap-1 bg-surface/70 border border-line/50 rounded-full px-3 py-1.5 shadow-xl shadow-black/5 backdrop-blur-2xl transition-all duration-300 relative ${
            scrolled ? "bg-surface/90" : "bg-surface/70"
          }`}
        >
          {/* Active Indicator */}
          <motion.div
            className="absolute h-7 bg-[#0a66c2]/10 rounded-full"
            initial={false}
            animate={indicatorStyle}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />

          <div className="flex items-center gap-0.5 relative">
            {navLinks.map((l) => {
              const Icon = iconMap[l.id] || Home;
              const isActive = activeLink === l.id;
              return (
                <a
                  key={l.id}
                  ref={(el) => (linkRefs.current[l.id] = el)}
                  href={`#${l.id}`}
                  onClick={(e) => handleLinkClick(e, l.id)}
                  className={`relative z-10 flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                    isActive
                      ? "text-content"
                      : "text-muted hover:text-content hover:bg-content/5"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {l.name}
                </a>
              );
            })}
          </div>
        </div>

        {/* Mobile Navigation - Always visible compact pill with icons */}
        <div className="md:hidden flex items-center justify-center gap-0.5 bg-surface/95 backdrop-blur-xl border border-line/50 rounded-full px-2 py-1.5 shadow-xl shadow-black/10">
          {navLinks.map((l) => {
            const Icon = iconMap[l.id] || Home;
            const isActive = activeLink === l.id;
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => handleLinkClick(e, l.id)}
                className={`flex flex-col items-center justify-center gap-0 px-2.5 py-1 rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-[#0a66c2] scale-105"
                    : "text-muted hover:text-content"
                }`}
                aria-label={l.name}
              >
                <Icon
                  className={`h-4 w-4 ${isActive ? "text-[#0a66c2]" : ""}`}
                />
                <span
                  className={`text-[7px] font-medium leading-none ${
                    isActive ? "text-[#0a66c2]" : "text-muted"
                  }`}
                >
                  {l.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
