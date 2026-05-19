import { FadeIn } from "@/components/common/FadeIn";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const JourneyCtaSection = () => {
  return (
    <section className="relative z-10 py-32 px-6 text-center border-t border-white/5 bg-[#050505] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <FadeIn delay={0.2}>
        <div className="relative z-10 flex flex-col items-center">
          <p className="text-gray-400 mb-8 font-light tracking-wide text-sm md:text-base">
            Siap berkenalan dengan wajah-wajah di balik{" "}
            <span className="text-white font-bold">Innovara</span>?
          </p>

          <Link
            to="/struktur"
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#0A0A0A] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-amber-500 to-sky-500 opacity-20 group-hover:opacity-40 blur-md transition-opacity"></div>
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>

            <span className="relative z-10 font-bold text-white uppercase tracking-[0.2em] text-xs md:text-sm">
              Explore Struktur
            </span>
            <div className="relative z-10 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:translate-x-1 transition-all">
              <ArrowRight
                size={16}
                className="text-sky-400 group-hover:text-amber-400 transition-colors"
              />
            </div>
          </Link>
        </div>
      </FadeIn>
    </section>
  );
};
