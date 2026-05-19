import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Departement, DeptCard } from "@/components/common/DepartementCard";
import { departments } from "@/constant/data";
import { DepartmentDetailModal } from "@/components/common/DepartementDetailModal";

const HeroSection = () => {
  const [selectedDept, setSelectedDept] = useState<Departement | null>(null);
  return (
    <div className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* HERO TITLE */}
      <div className="text-center mb-20 md:mb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-8 md:w-12 bg-sky-500/50"></div>
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-sky-400 font-bold">
              Our Divisions
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-amber-500/50"></div>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none text-white drop-shadow-2xl">
            Depar
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-white to-amber-500">
              temen
            </span>
          </h1>

          <p className="mt-6 text-gray-400 text-sm md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Kenali lebih dekat bidang gerak dan fokus setiap Departemen{" "}
            <span className="text-white font-bold inline-block">HMPSTI UB</span>
            .
          </p>
        </motion.div>
      </div>

      {/* DEPARTMENTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {departments.map((dept, idx) => (
          <DeptCard
            key={dept.id}
            data={dept}
            index={idx}
            onClick={() => setSelectedDept(dept)}
          />
        ))}
      </div>
      <DepartmentDetailModal
        selectedDept={selectedDept}
        onClose={() => setSelectedDept(null)}
      />
    </div>
  );
};

export default HeroSection;
