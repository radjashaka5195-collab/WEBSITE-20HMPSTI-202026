import { ArrowRight, Terminal, ChevronDown, Quote, LayoutGrid, Users, Calendar, ShoppingBag, Megaphone } from "lucide-react";
import { useScroll, useTransform, motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

// --- UTILS ---
function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }

// --- ANIMATION HELPER ---
const FadeIn = ({ children, className, delay = 0 }: any) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-50px" }} 
      transition={{ duration: 0.6, delay, ease: "easeOut" }} 
      className={cn("will-change-transform", className)} 
    >
      {children}
    </motion.div>
  );
};

// --- COMPONENT: QUICK MENU (MOBILE ONLY) ---
const QuickMenu = () => {
  const menus = [
    { name: "Struktur", icon: Users, path: "/struktur", color: "text-sky-400 border-sky-500/20 bg-sky-500/5" },
    { name: "Divisi", icon: LayoutGrid, path: "/departemen", color: "text-amber-400 border-amber-500/20 bg-amber-500/5" },
    { name: "Kalender", icon: Calendar, path: "/kalender", color: "text-purple-400 border-purple-500/20 bg-purple-500/5" },
    { name: "Store", icon: ShoppingBag, path: "/merch", color: "text-rose-400 border-rose-500/20 bg-rose-500/5" },
  ];

  return (
    <div className="md:hidden w-full px-6 -mt-10 relative z-20 mb-24">
      <div className="text-center mb-4">
        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Quick Access</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {menus.map((item, idx) => (
          <Link 
            key={idx} 
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border backdrop-blur-md transition-transform active:scale-95",
              item.color
            )}
          >
            <item.icon size={24} />
            <span className="text-xs font-bold uppercase tracking-wider text-gray-200">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

// --- COMPONENT MISI CARD ---
const MisiCard = ({ number, title, text, color, delay }: any) => {
  const isBlue = color === "blue";
  const bgHover = isBlue ? "hover:bg-[#33A5D3]/5" : "hover:bg-[#F59E0B]/5";
  const borderHover = isBlue ? "hover:border-[#33A5D3]/30" : "hover:border-[#F59E0B]/30";
  const titleColor = isBlue ? "text-[#33A5D3]" : "text-[#F59E0B]";

  return (
    <FadeIn delay={delay} className="h-full">
      <div className={cn("group relative h-full p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 transition-all duration-500 overflow-hidden", bgHover, borderHover)}>
         <div className={cn("absolute -right-4 -top-8 text-[6rem] md:text-[8rem] font-black opacity-[0.02] select-none transition-transform duration-500 group-hover:scale-105", titleColor)}>
            {number}
         </div>
         <div className="relative z-10 flex flex-col h-full justify-start items-start">
            <div className="mb-6">
                <span className={cn("text-5xl font-black tracking-tighter leading-none", titleColor)}>
                    0{number}
                </span>
            </div>
            <h4 className="text-xl font-bold text-white mb-3 leading-tight">{title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {text}
            </p>
         </div>
      </div>
    </FadeIn>
  );
};

// === MAIN COMPONENT ===
export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#33A5D3] selection:text-white overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-10 overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute top-[-50px] left-0 md:left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#33A5D3]/20 blur-[80px] md:blur-[120px] rounded-full pointer-events-none mix-blend-screen opacity-60"></div>
        <div className="absolute top-[-50px] right-0 md:right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#F59E0B]/15 blur-[80px] md:blur-[120px] rounded-full pointer-events-none mix-blend-screen opacity-60"></div>
        <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none hidden md:block"></div>

        <motion.div style={{ y }} className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#33A5D3]/30 bg-[#33A5D3]/5 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(51,165,211,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#33A5D3] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#33A5D3]"></span>
              </span>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#33A5D3] font-bold">HMPSTI UB 2026</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="font-black tracking-tighter leading-[0.9] mb-8 text-center relative">
              <span className="block text-xl md:text-3xl text-gray-500 mb-4 font-bold tracking-[0.5em] uppercase">KABINET</span>
              <span className="block text-[13vw] sm:text-[9rem] md:text-[11rem] bg-clip-text text-transparent bg-gradient-to-r from-[#33A5D3] via-white to-[#F59E0B] drop-shadow-[0_0_20px_rgba(51,165,211,0.2)]">
                INNOVARA
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-lg md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed mb-10">
              Mewujudkan era baru melalui <span className="text-[#33A5D3] font-bold border-b border-[#33A5D3]">Inovasi</span> yang berdampak dan <span className="text-[#F59E0B] font-bold border-b border-[#F59E0B]">Kolaborasi</span> tanpa batas.
            </p>
          </FadeIn>

          {/* === NEW: TOMBOL MENUJU PENGUMUMAN === */}
          <FadeIn delay={0.5}>
             <Link 
                to="/pengumuman" 
                className="group relative inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#F05822] to-[#d94a1a] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(240,88,34,0.4)] mb-12"
              >
                {/* Efek kilap (Shimmer) saat di hover */}
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>

                <Megaphone size={20} className="text-white relative z-10 animate-pulse" />
                <span className="relative z-10 font-black text-white uppercase tracking-[0.15em] text-sm md:text-base">
                   Cek Pengumuman Staff Ahli!
                </span>
                <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white transition-all">
                    <ArrowRight size={16} className="text-white group-hover:text-[#F05822] transition-colors" />
                </div>
             </Link>
          </FadeIn>

        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#33A5D3] animate-bounce">
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* --- QUICK MENU (MOBILE ONLY) --- */}
      <QuickMenu />

      {/* --- FILOSOFI SECTION --- */}
      <section className="relative z-10 py-32 bg-[#080808] border-t border-white/5 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#33A5D3]/5 to-transparent pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12 items-stretch">
                <FadeIn className="lg:col-span-2 h-full">
                    <div className="relative h-full min-h-[400px] w-full rounded-[2rem] bg-gradient-to-br from-[#111] to-[#050505] border border-white/10 p-10 flex flex-col justify-between overflow-hidden group hover:border-[#33A5D3]/30 transition-all duration-500 shadow-xl">
                        <div className="flex items-center gap-3 mb-8 opacity-50">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="relative z-10">
                            <Quote size={40} className="text-[#33A5D3] mb-6 opacity-50 rotate-180" />
                            <h3 className="text-5xl lg:text-6xl font-black text-white leading-[0.9] tracking-tight">
                                Satu Hati,<br/>Satu Gerak,<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33A5D3] to-[#F59E0B]">TI JAYA!</span>
                            </h3>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Est. 2026</span>
                            <Terminal size={24} className="text-[#F59E0B] opacity-80" />
                        </div>
                        <div className="absolute -right-20 -bottom-20 w-40 h-40 md:w-64 md:h-64 bg-[#33A5D3]/10 blur-[60px] md:blur-[80px] rounded-full group-hover:bg-[#33A5D3]/20 transition-all duration-500"></div>
                    </div>
                </FadeIn>
                <div className="lg:col-span-3 flex flex-col justify-center space-y-12 pl-0 lg:pl-10">
                    <FadeIn delay={0.2} className="relative group">
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#33A5D3] to-transparent opacity-30 group-hover:opacity-100 transition-opacity"></div>
                        <div className="pl-10 relative">
                            <h4 className="text-6xl md:text-7xl font-black text-white mb-3 tracking-tighter">INNOVA</h4>
                            <div className="inline-block px-3 py-1 bg-[#33A5D3]/10 rounded border border-[#33A5D3]/20 text-[#33A5D3] font-mono text-xs font-bold tracking-widest uppercase mb-4">Innovation</div>
                            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-lg">Semangat menciptakan hal baru yang <span className="text-white font-semibold">beda</span> dari rutinitas sebelumnya.</p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.4} className="relative group">
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#F59E0B] to-transparent opacity-30 group-hover:opacity-100 transition-opacity"></div>
                        <div className="pl-10 relative">
                            <h4 className="text-6xl md:text-7xl font-black text-white mb-3 tracking-tighter">RA</h4>
                            <div className="inline-block px-3 py-1 bg-[#F59E0B]/10 rounded border border-[#F59E0B]/20 text-[#F59E0B] font-mono text-xs font-bold tracking-widest uppercase mb-4">Era / Zaman</div>
                            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-lg">Dimulainya zaman dimana aspirasi didengar & kolaborasi <span className="text-white font-semibold">terbuka lebar</span>.</p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
      </section>

      {/* --- VISI MISI SECTION --- */}
      <section className="relative z-10 py-32 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <FadeIn>
                    <span className="text-[#F59E0B] font-mono uppercase tracking-[0.4em] text-xs font-bold border-b border-[#F59E0B] pb-2">Visi Utama</span>
                    <h2 className="mt-8 text-5xl md:text-7xl font-black text-white leading-tight">
                        RUMAH <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33A5D3] to-[#F59E0B]">KOLABORASI</span>
                    </h2>
                    <div className="mt-8 max-w-3xl mx-auto">
                        <p className="text-2xl text-gray-300 font-light italic leading-relaxed">
                        "Mewujudkan HMPSTI sebagai Rumah Kolaborasi yang menciptakan Inovasi untuk mewujudkan Prestasi."
                        </p>
                    </div>
                </FadeIn>
            </div>

            <div className="text-center mb-12 mt-20">
                <FadeIn delay={0.2}>
                      <span className="text-[#33A5D3] font-mono uppercase tracking-[0.4em] text-xs font-bold border-b border-[#33A5D3] pb-2">Misi Kami</span>
                </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
                <div className="col-span-1 lg:col-span-12 min-h-[220px]">
                    <MisiCard number="1" title="Tata Kelola Profesional" text="Tata kelola organisasi Profesional berbasis kinerja (KPI) untuk memastikan setiap langkah strategis terukur dan berdampak." color="blue" delay={0.1} />
                </div>
                <div className="col-span-1 lg:col-span-6 min-h-[250px]">
                    <MisiCard number="2" title="Kolaborasi Sinergis" text="Menjalin kolaborasi erat dengan organisasi internal, institusi, dan industri luar untuk memperluas jaringan." color="orange" delay={0.2} />
                </div>
                <div className="col-span-1 lg:col-span-6 min-h-[250px]">
                    <MisiCard number="3" title="Jembatan Aspirasi" text="Menjadi garda terdepan dalam memperhatikan hak & kesejahteraan mahasiswa melalui advokasi yang responsif." color="blue" delay={0.3} />
                </div>
                <div className="col-span-1 lg:col-span-6 min-h-[250px]">
                    <MisiCard number="4" title="Pengembangan Prestasi" text="Fokus pada pengembangan Hard Skill & Soft Skill mahasiswa untuk mencetak prestasi di tingkat nasional maupun internasional." color="orange" delay={0.4} />
                </div>
                <div className="col-span-1 lg:col-span-6 min-h-[250px]">
                    <MisiCard number="5" title="Inovasi Fungsional" text="Menghadirkan inovasi program kerja yang tidak hanya baru, tapi juga tepat sasaran dan fungsional bagi mahasiswa." color="blue" delay={0.5} />
                </div>
            </div>
        </div>
      </section>

      {/* --- JOURNEY CTA --- */}
      <section className="relative z-10 py-32 px-6 text-center border-t border-white/5 bg-[#050505] overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-900/10 blur-[120px] rounded-full pointer-events-none"></div>

          <FadeIn delay={0.2}>
            <div className="relative z-10 flex flex-col items-center">
                <p className="text-gray-400 mb-8 font-light tracking-wide text-sm md:text-base">
                    Siap berkenalan dengan wajah-wajah di balik <span className="text-white font-bold">Innovara</span>?
                </p>
                
                <Link 
                    to="/struktur" 
                    className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#0A0A0A] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] border border-white/10"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-amber-500 to-sky-500 opacity-20 group-hover:opacity-40 blur-md transition-opacity"></div>
                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>

                    <span className="relative z-10 font-bold text-white uppercase tracking-[0.2em] text-xs md:text-sm">
                        Explore Struktur
                    </span>
                    <div className="relative z-10 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:translate-x-1 transition-all">
                        <ArrowRight size={16} className="text-sky-400 group-hover:text-amber-400 transition-colors" />
                    </div>
                </Link>
            </div>
          </FadeIn>
      </section>

    </div>
  );
}