import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import useActiveSection from "../hooks/useActiveSection";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = ["hero", "about", "skills", "projects", "contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "border-b border-white/5 bg-ink-950/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between sm:h-[4.5rem]">
        <a href="#hero" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-cyan-500 font-display text-sm font-bold text-ink-950 shadow-md shadow-brand-500/25 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
            FT
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight text-white sm:block">
            Faraz Thifal
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = active === sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-brand-300" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/5 ring-1 ring-white/10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <button
          className="rounded-lg p-2 text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-white/5 md:hidden"
          >
            <ul className="container-page space-y-1 py-4">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = active === sectionId;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "bg-white/5 text-brand-300"
                          : "text-slate-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
