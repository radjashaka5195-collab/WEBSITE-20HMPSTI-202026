import { motion, Variants } from "framer-motion";
import { Instagram } from "lucide-react";

export interface KompasLeaderCardProps {
  leader: {
    nama: string;
    foto: string;
    instagram: string;
  };
  itemVar?: Variants;
}

export const KompasLeaderCard = ({
  leader: { nama, foto, instagram },
}: KompasLeaderCardProps) => (
  <motion.a
    href={instagram}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="group relative flex flex-col items-center justify-end h-[500px] w-full cursor-pointer will-change-transform"
  >
    <div className="absolute bottom-0 w-full h-[380px] rounded-[2.5rem] border border-white/10 bg-[#0A0A0A] overflow-hidden group-hover:border-amber-500/40 group-hover:shadow-[0_0_50px_-10px_rgba(245,158,11,0.3)] transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-t from-amber-950/30 to-transparent opacity-60"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-amber-500/10 blur-[80px] group-hover:opacity-60 transition-opacity"></div>
    </div>

    <div className="absolute left-1/2 -translate-x-1/2 bottom-[120px] h-[400px] w-auto z-10 transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
      <img
        src={foto}
        alt={nama}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-contain filter contrast-110 brightness-110"
      />
    </div>

    <div className="relative z-20 text-center w-full px-6 mb-10">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 backdrop-blur-xl border border-amber-500/30 mb-4 group-hover:border-amber-500/80 transition-all shadow-xl">
        <span className="text-xs font-black tracking-widest uppercase text-amber-500">
          Ketua Kompas
        </span>
        <Instagram className="w-3 h-3 text-amber-500" />
      </div>
      <h3 className="font-black text-white text-4xl leading-none drop-shadow-2xl">
        {nama}
      </h3>
    </div>
  </motion.a>
);
