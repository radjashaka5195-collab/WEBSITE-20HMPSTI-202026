import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const JourneyCtaSection = () => {
  return (
    <section className="relative z-10 py-24 px-6 text-center border-t border-white/5 bg-[#050505] overflow-hidden mt-12">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-amber-900/10 blur-[100px] rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center"
      >
        <p className="text-gray-400 mb-8 font-light tracking-wide text-sm md:text-base">
          Penasaran dengan bidang gerak kami?{" "}
          <span className="text-white font-bold">Cek Divisi HMPSTI.</span>
        </p>

        <Link
          to="/departemen"
          className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#0A0A0A] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] border border-white/10"
        >
          {/* Gradient Border & Shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-sky-500 to-amber-500 opacity-20 group-hover:opacity-40 blur-md transition-opacity"></div>
          <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>

          <span className="relative z-10 font-bold text-white uppercase tracking-[0.2em] text-xs md:text-sm">
            Explore Departemen
          </span>
          <div className="relative z-10 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:translate-x-1 transition-all">
            <ArrowRight
              size={16}
              className="text-amber-400 group-hover:text-sky-400 transition-colors"
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default JourneyCtaSection;
