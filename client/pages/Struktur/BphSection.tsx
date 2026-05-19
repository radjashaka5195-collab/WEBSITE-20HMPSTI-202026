import { BPHCard } from "@/components/common/BphCard";
import { struktur } from "@/constant/data";
import { motion, Variants } from "framer-motion";

interface BphSectionProps {
  containerVar: Variants;
  itemVar: Variants;
}

const BphSection = ({ containerVar, itemVar }: BphSectionProps) => {
  const { coreStaff } = struktur;
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex items-center gap-4 mb-20"
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-sky-500/30"></div>
        <div className="px-4 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/10 backdrop-blur-md">
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">
            Badan Pengurus Inti
          </span>
        </div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-sky-500/30"></div>
      </motion.div>

      <motion.div
        variants={containerVar}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 mb-40"
      >
        <div className="md:col-span-1 flex justify-center">
          <BPHCard item={coreStaff[0]} itemVar={itemVar} />
        </div>
        <div className="md:col-span-1 flex justify-center">
          <BPHCard item={coreStaff[1]} itemVar={itemVar} />
        </div>
        <div className="md:col-span-2 mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {coreStaff.slice(2).map((item, idx) => (
              <BPHCard key={idx} item={item} itemVar={itemVar} />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BphSection;
