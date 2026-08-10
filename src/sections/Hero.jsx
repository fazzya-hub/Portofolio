import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { y: 24, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-48 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-brand-500/15 blur-[140px]" />
        <div className="absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-blue-600/10 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 40%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 50% at 50% 40%, black, transparent)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">

        <motion.div {...fadeUp(0.18)} className="mt-10 flex justify-center">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full bg-brand-500/20 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative h-36 w-36 overflow-hidden rounded-full ring-2 ring-white/15 sm:h-44 sm:w-44">
              <img
                src="/profile.jpg"
                alt="Faraz Thifal"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          {...fadeUp(0.32)}
          className="mt-8 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Faraz Thifal
        </motion.h1>

        <motion.p
          {...fadeUp(0.4)}
          className="mx-auto mt-6 max-w-xl text-lg text-slate-400 sm:text-xl"
        >
          D3 Sistem Informasi &{" "}
          <span className="bg-gradient-to-r from-brand-400 to-cyan-400 bg-clip-text font-semibold text-transparent">
            Front-End Developer
          </span>
        </motion.p>

        <motion.p
          {...fadeUp(0.55)}
          className="mx-auto mt-4 max-w-xl leading-relaxed text-slate-500"
        >
          Saya membangun antarmuka web dan mobile yang modern, responsif, dan
          memberikan pengalaman pengguna yang optimal.
        </motion.p>

        <motion.div
          {...fadeUp(0.7)}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#projects" className="btn-primary group w-full sm:w-auto">
            Lihat Proyek
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>

          <a href="/FarazThifal-CV(General).pdf" download className="btn-ghost w-full sm:w-auto">
            <Download size={18} />
            Download CV
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll ke About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition-colors duration-200 hover:text-brand-400"
      >
        <ChevronDown size={24} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
