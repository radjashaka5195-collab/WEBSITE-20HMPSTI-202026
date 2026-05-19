import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { Instagram } from "lucide-react";

interface Staff {
  role: string;
  nama: string;
  jabatan: string;
  foto: string;
  quote?: string;
  instagram: string;
}

interface BphCardProps {
  item: Staff;
  className?: string;
  itemVar?: Variants;
}

export const BPHCard = ({ item, className, itemVar }: BphCardProps) => {
  const isLeader = item.role === "leader" || item.role === "vice";
  return (
    <motion.a
      href={item.instagram}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVar}
      whileHover={{ y: -8 }}
      className={cn(
        "group relative flex flex-col items-center justify-end w-full cursor-pointer will-change-transform",
        isLeader ? "h-[420px]" : "h-[320px]",
        className,
      )}
    >
      <div
        className={cn(
          "absolute bottom-0 w-full rounded-3xl border border-white/10 bg-[#0A0A0A] overflow-hidden transition-all duration-500 group-hover:border-sky-500/40 group-hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.3)]",
          isLeader ? "h-[300px]" : "h-[220px]",
        )}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-sky-500/20 blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
      </div>
      <div
        className={cn(
          "absolute left-1/2 -translate-x-1/2 z-10 transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]",
          isLeader
            ? "bottom-[100px] h-[340px] w-auto"
            : "bottom-[80px] h-[260px] w-auto",
        )}
      >
        <img
          src={item.foto}
          alt={item.nama}
          decoding="async"
          className="h-full w-full object-contain filter contrast-110 brightness-110"
        />
      </div>
      <div className="relative z-20 text-center w-full px-4 mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 mb-3 group-hover:border-sky-500/50 transition-colors shadow-lg">
          <span className="text-[10px] font-bold tracking-widest uppercase text-sky-400">
            {item.jabatan}
          </span>
          <Instagram className="w-3 h-3 text-white/80" />
        </div>
        <h3
          className={cn(
            "font-black text-white leading-tight drop-shadow-xl",
            isLeader ? "text-3xl" : "text-xl",
          )}
        >
          {item.nama}
        </h3>
        {isLeader && item.quote && (
          <p className="text-gray-400 text-xs italic mt-2 opacity-60 group-hover:opacity-100 transition-opacity">
            "{item.quote}"
          </p>
        )}
      </div>
    </motion.a>
  );
};
