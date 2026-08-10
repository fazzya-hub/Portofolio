import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

function LinkedinIcon({ size = 20 }) {
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

function GithubIcon({ size = 20 }) {
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

function InstagramIcon({ size = 20 }) {
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

const fadeUp = (delay = 0) => ({
  initial: { y: 24, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-pad relative overflow-hidden bg-ink-900 px-6"
    >
      <div
        className="pointer-events-none absolute -bottom-32 left-1/2 h-96 w-[600px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[140px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-4xl text-center">
        <motion.div {...fadeUp(0)} className="mb-14">
          <p className="eyebrow">Kontak</p>
          <h2 className="heading-section mt-3">Mari Terhubung</h2>
          <div className="mx-auto mt-6 h-1 w-14 rounded-full bg-gradient-to-r from-brand-400 to-cyan-400" />
        </motion.div>

        <motion.div
          {...fadeUp(0.15)}
          className="mb-12 flex items-center justify-center gap-4 sm:gap-5"
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
                className="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-brand-400/10 hover:text-brand-300 hover:shadow-lg hover:shadow-brand-500/20"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </motion.div>

        <motion.div
          {...fadeUp(0.3)}
          className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2"
        >
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <div
                key={info.label}
                className="card flex items-center gap-4 p-5 text-left transition-all duration-300 hover:border-brand-400/30 hover:shadow-lg hover:shadow-brand-500/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-cyan-500/20 text-brand-300">
                  <Icon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    {info.label}
                  </p>
                  <p className="truncate text-sm font-medium text-white">
                    {info.value}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
