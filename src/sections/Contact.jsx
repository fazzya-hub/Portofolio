import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

function LinkedinIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function InstagramIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/fazzya-hub",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/faraz-thifal",
    icon: LinkedinIcon,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/Paraszss",
    icon: InstagramIcon,
  },
];

const contactInfo = [
  { label: "Telepon", value: "+62 815-1340-4503", icon: Phone },
  { label: "Email", value: "farazzthifall@email.com", icon: Mail },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Contact
        </motion.h2>
        <div className="w-16 h-1 bg-teal-400 mx-auto mb-12 rounded-full" />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-5 mb-8"
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-4 bg-slate-800/60 border border-slate-700/50 rounded-xl text-slate-400 hover:text-white hover:border-teal-500/40 hover:bg-slate-800 transition-all duration-200"
              >
                <Icon size={24} />
              </a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <div
                key={info.label}
                className="flex items-center gap-2.5 text-slate-400"
              >
                <Icon size={18} className="text-slate-500" />
                <span className="text-sm">{info.value}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
