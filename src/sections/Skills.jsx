import { Code, Database, Layers, Smartphone, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "C"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: ["React.js", "Tailwind CSS", "Vue.js"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "Expo"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "Firebase"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "REST API", "Vercel"],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { y: 24, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-pad relative overflow-hidden bg-ink-900 px-6"
    >
      <div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-500/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-5xl">
        <motion.div {...fadeUp(0)} className="mb-14 text-center">
          <p className="eyebrow">Keahlian</p>
          <h2 className="heading-section mt-3">Skills</h2>
          <div className="mx-auto mt-6 h-1 w-14 rounded-full bg-gradient-to-r from-brand-400 to-cyan-400" />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                {...fadeUp(i * 0.08)}
                className="card group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:shadow-xl hover:shadow-brand-500/10"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-cyan-500/20 text-brand-300 transition-colors duration-300 group-hover:from-brand-500/30 group-hover:to-cyan-500/30">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="chip hover:border-brand-400/40 hover:text-white">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
