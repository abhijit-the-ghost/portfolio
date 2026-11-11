import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "../../lib/site";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 bg-transparent"
    >
      <div className="mx-auto w-full max-w-3xl h-14 flex items-center justify-center gap-3 relative">
        <div className="hidden md:flex items-center gap-2 bg-surface/70 border border-line/50 rounded-full px-3 py-2 shadow-xl shadow-black/5 backdrop-blur-2xl">
          <a href="#hero" className="grid h-7 w-7 place-items-center rounded-full bg-[#0a66c2] text-[11px] font-bold text-white" aria-label="Home">{siteConfig.monogram}</a>
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-muted hover:text-content hover:bg-content/5 transition-colors"
            >
              {l.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden grid h-10 w-10 place-items-center rounded-full bg-surface/80 border border-line/50 text-content hover:bg-content/5 transition-colors shadow-lg ml-auto"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-surface/95 backdrop-blur-xl border-b border-line/60 rounded-b-3xl shadow-2xl absolute top-14 left-4 right-4"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-content"
                >
                  {l.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
