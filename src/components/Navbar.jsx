import { useState } from "react";
import { Menu, X } from "lucide-react";
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
  const active = useActiveSection(sectionIds);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = active === sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-teal-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-3">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = active === sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block transition-colors duration-200 ${
                    isActive
                      ? "text-teal-400 font-medium"
                      : "text-slate-300 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
