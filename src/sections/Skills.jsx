import { Code, Layers, Smartphone, Database, Wrench } from "lucide-react";
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

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-4"
        >
          Skills
        </motion.h2>
        <div className="w-16 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 mx-auto mb-12 rounded-full" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 rounded-2xl p-6 hover:border-teal-500/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-gradient-to-br from-teal-500/25 to-cyan-500/25 rounded-lg">
                    <Icon size={20} className="text-teal-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-slate-700/60 to-slate-800/60 text-slate-300 border border-slate-600/40 rounded-full"
                    >
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
