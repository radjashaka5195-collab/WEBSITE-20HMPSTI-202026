import { cn } from "@/lib/utils";
import { FadeIn } from "./FadeIn";

interface MisiCardProps {
  number: number;
  title: string;
  text: string;
  isBlue: boolean;
  delay: number;
}

export const MisiCard = ({
  number,
  title,
  text,
  isBlue = true,
  delay,
}: MisiCardProps) => {
  const bgHover = isBlue ? "hover:bg-[#33A5D3]/5" : "hover:bg-[#F59E0B]/5";
  const borderHover = isBlue
    ? "hover:border-[#33A5D3]/30"
    : "hover:border-[#F59E0B]/30";
  const titleColor = isBlue ? "text-[#33A5D3]" : "text-[#F59E0B]";

  return (
    <FadeIn delay={delay} className="h-full">
      <div
        className={cn(
          "group relative h-full p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 transition-all duration-500 overflow-hidden",
          bgHover,
          borderHover,
        )}
      >
        <div
          className={cn(
            "absolute -right-4 -top-8 text-[6rem] md:text-[8rem] font-black opacity-[0.02] select-none transition-transform duration-500 group-hover:scale-105",
            titleColor,
          )}
        >
          {number}
        </div>
        <div className="relative z-10 flex flex-col h-full justify-start items-start">
          <div className="mb-6">
            <span
              className={cn(
                "text-5xl font-black tracking-tighter leading-none",
                titleColor,
              )}
            >
              0{number}
            </span>
          </div>
          <h4 className="text-xl font-bold text-white mb-3 leading-tight">
            {title}
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
            {text}
          </p>
        </div>
      </div>
    </FadeIn>
  );
};
