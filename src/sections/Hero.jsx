import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-8"
        >
          <div className="w-100 h-100 mx-auto rounded-full bg-gradient-to-br from-teal-400 to-cyan-300 p-1 overflow-hidden">
            <img
              src="/profile.jpg"
              alt="Faraz Thifal"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Faraz Thifal
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          D3 Sistem Informasi &amp; Front-End Developer
        </motion.p>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Saya membangun antarmuka web dan mobile yang modern, responsif, dan
          memberikan pengalaman pengguna yang optimal.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-teal-500 hover:bg-teal-400 text-white font-medium rounded-lg transition-colors duration-200"
          >
            View Projects
            <ArrowRight size={18} />
          </a>

          <a
            href="/cv-faraz-thifal.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-medium rounded-lg transition-colors duration-200"
          >
            Download CV
            <Download size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
