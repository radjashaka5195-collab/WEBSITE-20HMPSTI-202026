import { AnimatePresence, motion } from "framer-motion";
import { Departement } from "./DepartementCard";
import { CheckCircle2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DepartementLeader,
  DepartementLeaderCard,
} from "./DepartementLeaderCard";

interface DepartmentDetailModalProps {
  selectedDept: Departement;
  onClose: () => void;
}

export const DepartmentDetailModal = ({
  selectedDept,
  onClose,
}: DepartmentDetailModalProps) => {
  return (
    <AnimatePresence>
      {selectedDept && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-8 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Content Container */}
          <motion.div
            layoutId={`card-${selectedDept.id}`}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-6xl bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px] max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors border border-white/10 group"
            >
              <X
                size={20}
                className="text-white group-hover:rotate-90 transition-transform"
              />
            </button>

            {/* Left Side: Info Utama & Leaders */}
            <div
              className={cn(
                "p-8 md:p-12 w-full md:w-5/12 flex flex-col justify-start relative overflow-hidden overflow-y-auto scrollbar-hide",
                selectedDept.theme === "amber"
                  ? "bg-gradient-to-br from-amber-950/40 to-black"
                  : "bg-gradient-to-br from-sky-950/40 to-black",
              )}
            >
              {/* Logo Besar */}
              <div className="relative z-10 mb-8">
                <div
                  className={cn(
                    "w-20 h-20 rounded-3xl flex items-center justify-center p-3 bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl",
                  )}
                >
                  <img
                    src={selectedDept.logo}
                    alt={selectedDept.nama}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4 text-white">
                  {selectedDept.nama}
                </h2>

                <p className="text-gray-300 text-sm leading-relaxed mb-8 border-l-2 border-white/10 pl-4">
                  {selectedDept.desc}
                </p>

                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm mb-10">
                  <span className="text-xs font-bold uppercase tracking-widest text-white">
                    "{selectedDept.motto}"
                  </span>
                </div>

                {/* LEADERS SECTION (With Photo) */}
                <div className="mt-2">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-5 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-white/20"></span>
                    Board of Leaders
                  </h3>
                  <div className="flex flex-col gap-3">
                    {selectedDept.leaders?.map(
                      (leader: DepartementLeader, idx: number) => (
                        <DepartementLeaderCard
                          key={idx}
                          leader={leader}
                          theme={selectedDept.theme}
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Focus Grid */}
            <div className="w-full md:w-7/12 bg-black/40 p-8 md:p-12 flex flex-col justify-center overflow-y-auto relative">
              {/* Grid Background */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02]"></div>

              <div className="relative z-10 mb-8">
                <h3 className="text-xl font-bold text-white uppercase tracking-widest flex items-center gap-3">
                  <span
                    className={cn(
                      "w-1.5 h-8 rounded-full",
                      selectedDept.theme === "amber"
                        ? "bg-amber-500"
                        : "bg-sky-500",
                    )}
                  ></span>
                  Focus & Program
                </h3>
              </div>

              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedDept.focus.map((item: string, idx: number) => (
                  <div
                    key={idx}
                    className="group flex items-center gap-4 p-5 rounded-2xl bg-[#0F0F0F] border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div
                      className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                        selectedDept.theme === "amber"
                          ? "bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-black"
                          : "bg-sky-500/10 text-sky-500 group-hover:bg-sky-500 group-hover:text-black",
                      )}
                    >
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
