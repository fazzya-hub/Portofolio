import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-4"
        >
          About Me
        </motion.h2>
        <div className="w-16 h-1 bg-teal-400 mx-auto mb-12 rounded-full" />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 sm:p-10"
        >
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            Saya adalah mahasiswa D3 Sistem Informasi di{" "}
            <span className="text-white font-medium">
              Universitas Pembangunan Nasional &quot;Veteran&quot; Jakarta
            </span>{" "}
            yang memiliki ketertarikan besar pada{" "}
            <span className="text-teal-400 font-medium">Web Development</span>{" "}
            dan{" "}
            <span className="text-teal-400 font-medium">
              Mobile Development
            </span>
            .
          </p>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            Saya suka mengeksplorasi teknologi front-end terbaru dan berusaha menghadirkan solusi digital yang bersih, efisien, dan mudah digunakan. Setiap proyek yang saya kerjakan menjadi kesempatan untuk belajar dan berkembang.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            Tujuan karier saya adalah menjadi{" "}
            <span className="text-white font-medium">Front-End Developer</span>{" "}
            yang handal dan dapat berkontribusi dalam membangun produk digital
            yang berdampak positif bagi banyak orang.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
