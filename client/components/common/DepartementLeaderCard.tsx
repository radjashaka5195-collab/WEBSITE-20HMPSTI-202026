import { cn } from "@/lib/utils";
import { User } from "lucide-react";

export interface DepartementLeader {
  nama: string;
  jabatan: string;
  foto: string;
  ig: string;
}

export const DepartementLeaderCard = ({
  leader,
  theme,
}: {
  leader: DepartementLeader;
  theme: string;
}) => {
  const isAmber = theme === "amber";
  const accentColor = isAmber ? "bg-amber-500" : "bg-sky-500";
  const textColor = isAmber
    ? "group-hover:text-amber-400"
    : "group-hover:text-sky-400";

  // buat nampung isian fotonya aja biar rapi
  const ImageContent = () => (
    <div
      className={cn(
        "w-14 h-14 rounded-xl overflow-hidden border-2 border-white/10 transition-all duration-500",
        leader.ig ? "hover:border-white/50 cursor-pointer" : "",
        isAmber
          ? "group-hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]"
          : "group-hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]",
      )}
    >
      {leader.foto ? (
        <img
          src={leader.foto}
          alt={leader.nama}
          className="w-full h-full object-cover object-top transition-all duration-500 hover:scale-110"
          onError={(e) => {
            // kalo file ga nemu, balikin ke icon user
            (e.target as HTMLImageElement).style.display = "none";
            (e.target as HTMLImageElement).nextElementSibling?.classList.remove(
              "hidden",
            );
          }}
        />
      ) : null}
      <div
        className={cn(
          "w-full h-full bg-black/50 flex items-center justify-center text-white/20",
          leader.foto ? "hidden" : "",
        )}
      >
        <User size={24} />
      </div>
    </div>
  );

  return (
    <div className="group relative flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300">
      {/* bagian foto yang bisa di-klik */}
      <div className="relative shrink-0 z-10">
        {leader.ig ? (
          <a
            href={`https://instagram.com/${leader.ig.replace("@", "")}`}
            target="_blank"
            rel="noreferrer"
            title={`Instagram @${leader.ig.replace("@", "")}`}
          >
            <ImageContent />
          </a>
        ) : (
          <ImageContent />
        )}

        {/* titik/badge warna sesuai tema departemen */}
        <div
          className={cn(
            "absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-[#0A0A0A] pointer-events-none",
            accentColor,
          )}
        ></div>
      </div>

      <div className="flex-1">
        <p
          className={cn(
            "text-white font-bold text-sm md:text-base leading-tight transition-colors",
            textColor,
          )}
        >
          {leader.nama}
        </p>
        <div className="flex flex-col gap-0.5 mt-1">
          <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-gray-400">
            {leader.jabatan}
          </p>
          {leader.ig && (
            <span className="text-[10px] text-gray-500 hover:text-white transition-colors">
              <a
                href={`https://instagram.com/${leader.ig.replace("@", "")}`}
                target="_blank"
                rel="noreferrer"
              >
                @{leader.ig.replace("@", "")}
              </a>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
