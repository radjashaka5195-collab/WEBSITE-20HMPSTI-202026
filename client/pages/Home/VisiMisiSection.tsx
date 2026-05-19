import { FadeIn } from "@/components/common/FadeIn";
import { MisiCard } from "@/components/common/MisiCard";
import { misi } from "@/constant/data";

const VisiMisiSection = () => {
  return (
    <section className="relative z-10 py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-[#F59E0B] font-mono uppercase tracking-[0.4em] text-xs font-bold border-b border-[#F59E0B] pb-2">
              Visi Utama
            </span>
            <h2 className="mt-8 text-5xl md:text-7xl font-black text-white leading-tight">
              RUMAH{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33A5D3] to-[#F59E0B]">
                KOLABORASI
              </span>
            </h2>
            <div className="mt-8 max-w-3xl mx-auto">
              <p className="text-2xl text-gray-300 font-light italic leading-relaxed">
                "Mewujudkan HMPSTI sebagai Rumah Kolaborasi yang menciptakan
                Inovasi untuk mewujudkan Prestasi."
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="text-center mb-12 mt-20">
          <FadeIn delay={0.2}>
            <span className="text-[#33A5D3] font-mono uppercase tracking-[0.4em] text-xs font-bold border-b border-[#33A5D3] pb-2">
              Misi Kami
            </span>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {misi.map((misi, idx) => {
            const number = idx + 1;
            return number == 1 ? (
              <div
                className="col-span-1 lg:col-span-12 min-h-[220px]"
                key={number}
              >
                <MisiCard
                  number={number}
                  title={misi.title}
                  text={misi.text}
                  isBlue={misi.isBlue}
                  delay={misi.delay}
                />
              </div>
            ) : (
              <div
                className="col-span-1 lg:col-span-6 min-h-[250px]"
                key={number}
              >
                <MisiCard
                  number={number}
                  title={misi.title}
                  text={misi.text}
                  isBlue={misi.isBlue}
                  delay={misi.delay}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisiMisiSection;
