import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-white/10 pb-10">
      <div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "40px" }}
          transition={{ duration: 1 }}
          className="h-1 bg-sky-500 mb-6 rounded-full"
        ></motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sky-500 font-mono text-xs uppercase tracking-[0.3em] mb-3 block font-bold"
        >
          Organization Chart
        </motion.span>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none"
        >
          Struktur
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-white to-sky-200">
            Kabinet.
          </span>
        </motion.h1>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 max-w-md text-sm md:text-base leading-relaxed text-right md:text-right"
      >
        Susunan punggawa <strong className="text-white">INNOVARA</strong> yang
        menjadi otak dan penggerak di balik setiap inovasi HMPSTI UB Periode
        2026/2027.
      </motion.p>
    </div>
  );
};

export default Header;
