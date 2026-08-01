import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 pt-20"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[420px] rounded-full bg-teal-500/20 blur-[130px]" />
        <div className="absolute top-1/3 -right-40 w-[420px] h-[420px] rounded-full bg-blue-600/15 blur-[130px]" />
        <div className="absolute bottom-0 -left-40 w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[130px]" />
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-8"
        >
          <div className="w-100 h-100 mx-auto rounded-full bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-500 p-1 overflow-hidden shadow-lg shadow-teal-500/30">
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
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-medium rounded-lg shadow-lg shadow-teal-500/25 transition-all duration-200"
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
