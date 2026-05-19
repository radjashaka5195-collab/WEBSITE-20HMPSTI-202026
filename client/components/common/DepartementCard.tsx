import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { DepartementLeader } from "./DepartementLeaderCard";

export interface Departement {
  id: string;
  nama: string;
  panjang: string;
  desc: string;
  theme: string;
  logo: string;
  motto: string;
  focus: string[];
  leaders: DepartementLeader[];
}

interface DepartementCardProps {
  data: Departement;
  index: number;
  onClick: () => void;
}

export const DeptCard = ({ data, index, onClick }: DepartementCardProps) => {
  const isAmber = data.theme === "amber";
  const mainColor = isAmber ? "text-amber-500" : "text-sky-500";
  const borderHover = isAmber
    ? "group-hover:border-amber-500/50"
    : "group-hover:border-sky-500/50";
  const glowColor = isAmber ? "rgba(245,158,11,0.4)" : "rgba(14,165,233,0.4)";

  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative h-[380px] w-full rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer",
        borderHover,
      )}
    >
      <div
        className="absolute -right-20 -top-20 w-64 h-64 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: glowColor }}
      ></div>

      <div className="relative z-10">
        <div
          className={cn(
            "w-16 h-16 rounded-2xl flex items-center justify-center p-3 bg-white/5 border border-white/10 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-black/50 backdrop-blur-sm",
            mainColor,
          )}
        >
          <img
            src={data.logo}
            alt={`${data.nama} logo`}
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </div>

        <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">
          {data.nama}
        </h3>
        <p
          className={cn(
            "text-[10px] font-mono font-bold tracking-widest uppercase mb-4 opacity-70 group-hover:opacity-100 transition-opacity",
            mainColor,
          )}
        >
          {data.panjang}
        </p>
        <p className="text-gray-400 text-sm leading-relaxed max-w-[90%] line-clamp-3 group-hover:text-gray-200 transition-colors">
          {data.desc}
        </p>
      </div>

      <div
        className={cn(
          "absolute bottom-8 right-8 text-white/20 transition-all duration-500 group-hover:text-white group-hover:rotate-[-45deg] group-hover:scale-125",
        )}
      >
        <ArrowUpRight size={32} />
      </div>
    </motion.div>
  );
};
