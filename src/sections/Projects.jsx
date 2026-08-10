import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

function GithubIcon({ size = 16 }) {
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

const fadeUp = (delay = 0) => ({
  initial: { y: 24, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-pad relative overflow-hidden bg-ink-950 px-6"
    >
      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-5xl">
        <motion.div {...fadeUp(0)} className="mb-14 text-center">
          <p className="eyebrow">Portofolio</p>
          <h2 className="heading-section mt-3">Projects</h2>
          <div className="mx-auto mt-6 h-1 w-14 rounded-full bg-gradient-to-r from-brand-400 to-cyan-400" />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              {...fadeUp(i * 0.08)}
              className="card group relative flex flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-400/30 hover:shadow-xl hover:shadow-brand-500/10 sm:p-7"
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="mb-5 flex items-start justify-between gap-4">
                <span className="font-display text-sm font-semibold text-brand-400">
                  {String(project.id).padStart(2, "0")}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-colors duration-300 group-hover:border-brand-400/40 group-hover:text-brand-300">
                  <ArrowUpRight size={18} />
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold text-white transition-colors duration-300 group-hover:text-brand-300">
                {project.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="chip hover:border-brand-400/40 hover:text-white">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4 border-t border-white/5 pt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-brand-300"
                >
                  <GithubIcon size={16} />
                  GitHub
                  <ArrowUpRight size={14} className="opacity-60" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
