import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Instagram, ArrowRight } from "lucide-react";
import { BPHCard } from "@/components/common/BphCard";
import { KompasMemberCard } from "@/components/common/KompasMemberCard";
import { KompasLeaderCard } from "@/components/common/KompasLeaderCard";
import BphSection from "./BphSection";
import KompasSection from "./KompasSection";
import Background from "./Background";
import JourneyCtaSection from "./JourneyCtaSection";
import Header from "./HeaderSection";

export default function Struktur() {
  const containerVar: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVar: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-sky-500/30 overflow-x-hidden relative flex flex-col">
      <Background />
      <div className="relative z-10 pt-32 pb-10 px-6 max-w-7xl mx-auto w-full">
        <Header />
        <BphSection containerVar={containerVar} itemVar={itemVar} />
        <KompasSection containerVar={containerVar} itemVar={itemVar} />
      </div>
      <JourneyCtaSection />
    </div>
  );
}
