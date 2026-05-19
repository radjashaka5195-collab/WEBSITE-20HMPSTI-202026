import { useScroll, useTransform, motion } from "framer-motion";
import { QuickMenu } from "@/components/common/QuickMenu";
import HeroSection from "./HeroSection";
import FilosofiSection from "./FilosofiSection";
import VisiMisiSection from "./VisiMisiSection";
import { JourneyCtaSection } from "./JourneyCtaSection";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#33A5D3] selection:text-white overflow-x-hidden">
      <HeroSection yPosition={y} />
      <QuickMenu />
      <FilosofiSection />
      <VisiMisiSection />
      <JourneyCtaSection />
    </div>
  );
};

export default Home;
