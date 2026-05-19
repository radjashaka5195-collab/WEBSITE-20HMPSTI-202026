import { quickMenus } from "@/constant/data";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export const QuickMenu = () => {
  return (
    <div className="md:hidden w-full px-6 -mt-10 relative z-20 mb-24">
      <div className="text-center mb-4">
        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
          Quick Access
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {quickMenus.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border backdrop-blur-md transition-transform active:scale-95",
              item.color,
            )}
          >
            <item.icon size={24} />
            <span className="text-xs font-bold uppercase tracking-wider text-gray-200">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
