import { FadeIn } from "@/components/common/FadeIn";
import { motion, MotionValue } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = ({ yPosition }: { yPosition: MotionValue<Number> }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-[-50px] left-0 md:left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#33A5D3]/20 blur-[80px] md:blur-[120px] rounded-full pointer-events-none mix-blend-screen opacity-60"></div>
      <div className="absolute top-[-50px] right-0 md:right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#F59E0B]/15 blur-[80px] md:blur-[120px] rounded-full pointer-events-none mix-blend-screen opacity-60"></div>
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none hidden md:block"></div>

      <motion.div
        style={{ y: yPosition }}
        className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center"
      >
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#33A5D3]/30 bg-[#33A5D3]/5 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(51,165,211,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#33A5D3] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#33A5D3]"></span>
            </span>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#33A5D3] font-bold">
              HMPSTI UB 2026
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="font-black tracking-tighter leading-[0.9] mb-8 text-center relative">
            <span className="block text-xl md:text-3xl text-gray-500 mb-4 font-bold tracking-[0.5em] uppercase">
              KABINET
            </span>
            <span className="block text-[13vw] sm:text-[9rem] md:text-[11rem] bg-clip-text text-transparent bg-gradient-to-r from-[#33A5D3] via-white to-[#F59E0B] drop-shadow-[0_0_20px_rgba(51,165,211,0.2)]">
              INNOVARA
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-lg md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Mewujudkan era baru melalui{" "}
            <span className="text-[#33A5D3] font-bold border-b border-[#33A5D3]">
              Inovasi
            </span>{" "}
            yang berdampak dan{" "}
            <span className="text-[#F59E0B] font-bold border-b border-[#F59E0B]">
              Kolaborasi
            </span>{" "}
            tanpa batas.
          </p>
        </FadeIn>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#33A5D3] animate-bounce"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
