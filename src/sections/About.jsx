import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { y: 24, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function About() {
  return (
    <section id="about" className="section-pad bg-ink-950 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div {...fadeUp(0)} className="mb-14 text-center">
          <p className="eyebrow">About</p>
          <h2 className="heading-section mt-3">Tentang Saya</h2>
          <div className="mx-auto mt-6 h-1 w-14 rounded-full bg-gradient-to-r from-brand-400 to-cyan-400" />
        </motion.div>

        <motion.div
          {...fadeUp(0.2)}
          className="card relative overflow-hidden p-8 sm:p-12"
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent"
            aria-hidden="true"
          />

          <p className="mb-6 text-lg leading-relaxed text-slate-300">
            Saya adalah mahasiswa{" "}
            <span className="font-semibold text-white">D3 Sistem Informasi</span>{" "}
            di{" "}
            <span className="font-medium text-white">
              Universitas Pembangunan Nasional &quot;Veteran&quot; Jakarta
            </span>{" "}
            yang memiliki ketertarikan besar pada{" "}
            <span className="bg-gradient-to-r from-brand-400 to-cyan-400 bg-clip-text font-semibold text-transparent">
              Web Development
            </span>{" "}
            dan{" "}
            <span className="bg-gradient-to-r from-brand-400 to-cyan-400 bg-clip-text font-semibold text-transparent">
              Mobile Development
            </span>
            .
          </p>

          <p className="mb-6 text-lg leading-relaxed text-slate-300">
            Saya suka mengeksplorasi teknologi front-end terbaru dan berusaha
            menghadirkan solusi digital yang bersih, efisien, dan mudah
            digunakan. Setiap proyek yang saya kerjakan menjadi kesempatan untuk
            belajar dan berkembang.
          </p>

          <p className="text-lg leading-relaxed text-slate-300">
            Tujuan karier saya adalah menjadi{" "}
            <span className="font-semibold text-white">
              Front-End Developer
            </span>{" "}
            yang handal dan dapat berkontribusi dalam membangun produk digital
            yang berdampak positif bagi banyak orang.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-white/5 pt-8">
            <span className="chip">Web Development</span>
            <span className="chip">Mobile Development</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
