import { KompasLeaderCard } from "@/components/common/KompasLeaderCard";
import { KompasMemberCard } from "@/components/common/KompasMemberCard";
import { struktur } from "@/constant/data";
import { Variants } from "framer-motion";
import { motion } from "framer-motion";

interface KompasMemberCardProps {
  containerVar: Variants;
  itemVar: Variants;
}

const KompasSection = ({ containerVar, itemVar }: KompasMemberCardProps) => {
  const {
    kompas: { leader, staff },
  } = struktur;
  return (
    <div className="relative pt-24 border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-3 flex flex-col gap-8">
          <div>
            <h2 className="text-4xl font-black text-white mb-2">KOMPAS</h2>
            <p className="text-gray-500 text-sm">
              Komisi Pengawas Kinerja Organisasi
            </p>
          </div>
          <KompasLeaderCard leader={leader} />
        </div>

        <motion.div
          variants={containerVar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {staff.map((item, idx) => (
            <KompasMemberCard key={idx} member={item} itemVar={itemVar} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default KompasSection;
