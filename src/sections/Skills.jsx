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
    <section id="skills" className="py-24 bg-slate-950 px-6">
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
        <div className="w-16 h-1 bg-teal-400 mx-auto mb-12 rounded-full" />

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
                className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 hover:border-teal-500/30 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-teal-500/10 rounded-lg">
                    <Icon size={20} className="text-teal-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium bg-slate-700/50 text-slate-300 border border-slate-600/50 rounded-full"
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
