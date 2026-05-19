import { PLACEHOLDER_MAN } from "@/constant/data";
import { motion, Variants } from "framer-motion";
import { Instagram } from "lucide-react";

export interface KompasMemberCardProps {
  member: {
    nama: string;
    jabatan: string;
    instagram: string;
    foto: string;
  };
  itemVar: Variants;
}

export const KompasMemberCard = ({
  member: { nama, jabatan, instagram, foto },
  itemVar,
}: KompasMemberCardProps) => (
  <motion.a
    href={instagram}
    target="_blank"
    rel="noopener noreferrer"
    variants={itemVar}
    className="group relative flex flex-col items-center justify-end h-[300px] w-full cursor-pointer will-change-transform"
  >
    <div className="absolute bottom-0 w-full h-[200px] rounded-2xl border border-white/5 bg-[#0F0F0F] overflow-hidden group-hover:border-amber-500/30 group-hover:bg-amber-950/10 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    </div>

    <div className="absolute left-1/2 -translate-x-1/2 bottom-[80px] h-[240px] w-auto z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2 drop-shadow-lg">
      <img
        src={foto || PLACEHOLDER_MAN}
        alt={nama}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-contain filter contrast-110 transition-all duration-500"
      />
    </div>

    <div className="relative z-20 text-center w-full px-2 mb-5">
      <h4 className="text-lg font-bold text-white leading-tight group-hover:text-amber-400 transition-colors drop-shadow-md">
        {nama}
      </h4>
      <div className="flex items-center justify-center gap-2 mt-1">
        <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest group-hover:text-amber-500/70">
          {jabatan}
        </p>
        <Instagram className="w-3 h-3 text-gray-600 group-hover:text-amber-500 transition-colors" />
      </div>
    </div>
  </motion.a>
);
