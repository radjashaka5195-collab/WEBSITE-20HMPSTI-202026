import { FadeIn } from "@/components/common/FadeIn";
import { Quote, Terminal } from "lucide-react";

const FilosofiSection = () => {
  return (
    <section className="relative z-10 py-32 bg-[#080808] border-t border-white/5 overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#33A5D3]/5 to-transparent pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-stretch">
          <FadeIn className="lg:col-span-2 h-full">
            <div className="relative h-full min-h-[400px] w-full rounded-[2rem] bg-gradient-to-br from-[#111] to-[#050505] border border-white/10 p-10 flex flex-col justify-between overflow-hidden group hover:border-[#33A5D3]/30 transition-all duration-500 shadow-xl">
              <div className="flex items-center gap-3 mb-8 opacity-50">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="relative z-10">
                <Quote
                  size={40}
                  className="text-[#33A5D3] mb-6 opacity-50 rotate-180"
                />
                <h3 className="text-5xl lg:text-6xl font-black text-white leading-[0.9] tracking-tight">
                  Satu Hati,
                  <br />
                  Satu Gerak,
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33A5D3] to-[#F59E0B]">
                    TI JAYA!
                  </span>
                </h3>
              </div>
              <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                  Est. 2026
                </span>
                <Terminal size={24} className="text-[#F59E0B] opacity-80" />
              </div>
              <div className="absolute -right-20 -bottom-20 w-40 h-40 md:w-64 md:h-64 bg-[#33A5D3]/10 blur-[60px] md:blur-[80px] rounded-full group-hover:bg-[#33A5D3]/20 transition-all duration-500"></div>
            </div>
          </FadeIn>
          <div className="lg:col-span-3 flex flex-col justify-center space-y-12 pl-0 lg:pl-10">
            <FadeIn delay={0.2} className="relative group">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#33A5D3] to-transparent opacity-30 group-hover:opacity-100 transition-opacity"></div>
              <div className="pl-10 relative">
                <h4 className="text-6xl md:text-7xl font-black text-white mb-3 tracking-tighter">
                  INNOVA
                </h4>
                <div className="inline-block px-3 py-1 bg-[#33A5D3]/10 rounded border border-[#33A5D3]/20 text-[#33A5D3] font-mono text-xs font-bold tracking-widest uppercase mb-4">
                  Innovation
                </div>
                <p className="text-xl text-gray-400 font-light leading-relaxed max-w-lg">
                  Semangat menciptakan hal baru yang{" "}
                  <span className="text-white font-semibold">beda</span> dari
                  rutinitas sebelumnya.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4} className="relative group">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#F59E0B] to-transparent opacity-30 group-hover:opacity-100 transition-opacity"></div>
              <div className="pl-10 relative">
                <h4 className="text-6xl md:text-7xl font-black text-white mb-3 tracking-tighter">
                  RA
                </h4>
                <div className="inline-block px-3 py-1 bg-[#F59E0B]/10 rounded border border-[#F59E0B]/20 text-[#F59E0B] font-mono text-xs font-bold tracking-widest uppercase mb-4">
                  Era / Zaman
                </div>
                <p className="text-xl text-gray-400 font-light leading-relaxed max-w-lg">
                  Dimulainya zaman dimana aspirasi didengar & kolaborasi{" "}
                  <span className="text-white font-semibold">
                    terbuka lebar
                  </span>
                  .
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilosofiSection;
