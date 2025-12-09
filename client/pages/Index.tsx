"use client";

import { 
  ArrowRight, 
  Star as StarIcon, 
  Target, 
  Users, 
  Lightbulb, 
  ChevronDown, 
  Terminal,
  Menu,
  X
} from "lucide-react";
import { useScroll, useTransform, useMotionTemplate, useMotionValue, motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { MouseEvent, useState, useEffect } from "react";

// --- KONFIGURASI WARNA (Agar Konsisten) ---
// Primary (Highlight/Text): #33A5D3
// Secondary (Base/Structure): #1D77BF

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components Internal ---

// 1. MODERN NAVBAR
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Beranda", id: "home" },
    { name: "Filosofi", id: "filosofi" },
    { name: "Visi Misi", id: "visi" },
    { name: "Program", id: "program" },
  ];

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false); 
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
          isScrolled 
            ? "bg-black/80 backdrop-blur-md border-b border-[#1D77BF]/30 py-4" 
            : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => handleScrollTo("home")}
            className="relative z-[101] cursor-pointer font-black text-xl tracking-tighter flex items-center gap-2 text-white"
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white bg-gradient-to-br from-[#1D77BF] to-[#33A5D3] shadow-[0_0_15px_rgba(51,165,211,0.5)]">
               <Terminal size={18} />
            </div>
            <span>KABINET INNOVARA</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScrollTo(link.id)}
                className="text-sm font-medium text-white/70 hover:text-[#33A5D3] transition-colors uppercase tracking-wider hover:drop-shadow-[0_0_8px_rgba(51,165,211,0.8)]"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="relative z-[101] md:hidden text-white w-10 h-10 flex items-center justify-center rounded-full active:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className="text-[#33A5D3]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: [0.32, 0, 0.67, 0] }}
            className="fixed inset-0 z-[90] bg-[#050505] md:hidden flex flex-col justify-center items-center"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[20%] w-[80vw] h-[80vw] bg-[#1D77BF]/20 blur-[100px] rounded-full"></div>
                <div className="absolute -bottom-[20%] -left-[20%] w-[80vw] h-[80vw] bg-[#33A5D3]/20 blur-[100px] rounded-full"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
            </div>

            <div className="flex flex-col gap-8 text-center relative z-10">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  onClick={() => handleScrollTo(link.id)}
                  className="text-4xl font-black text-white/40 hover:text-[#33A5D3] uppercase tracking-tighter transition-all hover:scale-110 active:scale-95"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 text-[#1D77BF] font-mono text-xs uppercase tracking-widest"
            >
              HMPSTI 2026
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Efek Spotlight (Fixed Color RGB: 51, 165, 211)
function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group relative border border-white/10 bg-white/5 overflow-hidden rounded-xl",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(51, 165, 211, 0.2), 
              transparent 80%
            )
          `, 
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

const FadeIn = ({
  children,
  className,
  delay = 0,
  direction = "up"
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }} 
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SectionHeading = ({ title, subtitle, align = "center" }: { title: string, subtitle?: string, align?: "left" | "center" }) => (
  <div className={cn("mb-10 md:mb-16", align === "center" ? "text-center" : "text-left")}>
    {subtitle && (
      <motion.span 
        initial={{ opacity: 0, letterSpacing: "0em" }}
        whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
        className="text-[#33A5D3] font-mono text-xs md:text-sm uppercase tracking-widest mb-2 block"
      >
        {subtitle}
      </motion.span>
    )}
    <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white uppercase leading-tight">
      {title}
    </h2>
    <div className={cn("h-1 w-16 md:w-24 bg-[#1D77BF] mt-4 md:mt-6", align === "center" && "mx-auto")} />
  </div>
);

const InfiniteMarquee = ({ items }: { items: string[] }) => {
  return (
    <div className="relative flex overflow-x-hidden group mask-gradient-x border-y border-white/10 bg-white/[0.02]">
      <div className="animate-marquee flex whitespace-nowrap gap-8 md:gap-12 py-4 md:py-6">
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 text-xl sm:text-2xl md:text-4xl font-black text-white/20 hover:text-[#33A5D3] transition-colors duration-300 cursor-default uppercase"
          >
            <span>{item}</span>
            <StarIcon className="w-3 h-3 md:w-4 md:h-4 text-[#1D77BF]" />
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main Page ---

export default function Index() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const missions = [
    { text: "Tata kelola organisasi Profesional berbasis kinerja (KPI)." },
    { text: "Kolaborasi erat dengan organisasi, institusi, dan industri." },
    { text: "Jembatan aspirasi: memperhatikan hak & kesejahteraan." },
    { text: "Pengembangan Hard/Soft Skill untuk mencetak Prestasi." },
    { text: "Inovasi program kerja yang tepat sasaran & fungsional." },
  ];

  const departments = [
    "PSDM", "Inovasi & Teknologi", "Media & Informasi Digital", "Advokesma", "Hubungan Eksternal", "Ekonomi Kreatif", "Kreatifitas & Olahraga"
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#33A5D3] selection:text-black overflow-x-hidden font-sans">
      
      <Navbar />

      {/* --- BACKGROUND FX --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#1D77BF]/10 blur-[80px] md:blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[#33A5D3]/10 blur-[80px] md:blur-[120px] rounded-full animate-pulse-slow delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] md:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-10 overflow-hidden">
        <motion.div style={{ y }} className="relative z-10 text-center w-full max-w-7xl mx-auto">
          
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-[1px] w-8 md:w-16 bg-[#1D77BF]/50"></div>
            <span className="text-[#33A5D3] font-mono tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-sm uppercase font-bold">HMPSTI 2026</span>
            <div className="h-[1px] w-8 md:w-16 bg-[#1D77BF]/50"></div>
          </motion.div>

          <div className="relative w-full">
            <h1 className="font-black leading-[0.9] tracking-tighter uppercase select-none w-full">
              <motion.span 
                initial={{ y: 50, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.8 }} 
                className="block text-white/20 text-[8vw] sm:text-[5vw] md:text-[4vw] mb-2"
              >
                Kabinet
              </motion.span>
              <motion.span 
                initial={{ y: 50, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.8, delay: 0.1 }} 
                // Gradient Text Consistent
                className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-[#33A5D3] to-[#1D77BF] text-[13vw] sm:text-[12vw] lg:text-[10rem]"
              >
                Innovara
              </motion.span>
            </h1>
            
            <motion.div style={{ rotate }} className="absolute -right-2 -top-4 md:right-10 md:top-0 text-[#33A5D3] opacity-80 hidden sm:block">
               <StarIcon size={32} className="md:w-16 md:h-16 animate-spin-slow" fill="currentColor" />
            </motion.div>
          </div>

          <FadeIn delay={0.4} className="mt-8 md:mt-12 max-w-xl md:max-w-2xl mx-auto px-4">
            <p className="text-sm md:text-xl text-white/60 leading-relaxed font-light">
              Mewujudkan era baru melalui <span className="text-[#33A5D3] font-bold">Inovasi</span> yang berdampak dan <span className="text-[#33A5D3] font-bold">Kolaborasi</span> tanpa batas.
            </p>
          </FadeIn>

          <FadeIn delay={0.6} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4 sm:px-0">
            <button 
              onClick={() => scrollToSection('visi')} 
              // Button Consistent with Hero Gradient
              className="group w-full sm:w-auto relative px-8 py-3 md:py-4 bg-gradient-to-r from-[#1D77BF] to-[#33A5D3] text-white font-black uppercase tracking-wider hover:opacity-90 transition-all clip-path-slant shadow-[0_0_20px_rgba(51,165,211,0.4)]"
            >
              <span className="flex items-center justify-center gap-2 text-sm md:text-base">
                Explore Vision <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </FadeIn>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 md:bottom-10 text-white/30 cursor-pointer"
          onClick={() => scrollToSection('filosofi')}
        >
          <ChevronDown size={28} className="md:w-8 md:h-8" />
        </motion.div>
      </section>

      {/* --- FILOSOFI --- */}
      <section id="filosofi" className="relative z-10 py-20 md:py-32 bg-[#080808] border-y border-white/5 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading title="Filosofi Nama" subtitle="Meaning" align="left" />
              
              <div className="space-y-10 md:space-y-12">
                <FadeIn delay={0.2} direction="right">
                  <div className="relative pl-6 md:pl-8 border-l-2 border-[#1D77BF]">
                    <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#33A5D3] mb-2">INNOVA</h3>
                    <p className="text-[10px] md:text-sm font-mono text-white/40 mb-3 uppercase tracking-widest">// Root Word: Innovation</p>
                    <p className="text-base md:text-xl text-white/80">
                      Semangat menciptakan hal baru yang <span className="text-white font-bold">beda</span> dari sebelumnya. Bukan sekadar rutinitas.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4} direction="right">
                  <div className="relative pl-6 md:pl-8 border-l-2 border-white/20">
                    <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2">RA</h3>
                    <p className="text-[10px] md:text-sm font-mono text-white/40 mb-3 uppercase tracking-widest">// Suffix: Era / Zaman</p>
                    <p className="text-base md:text-xl text-white/80">
                      Dimulainya zaman dimana aspirasi didengar & kolaborasi terbuka lebar.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Abstract Graphic */}
            <FadeIn direction="left" className="relative hidden lg:block h-[500px]">
               <div className="absolute inset-0 bg-gradient-to-br from-[#1D77BF]/20 to-[#33A5D3]/20 rounded-3xl blur-3xl"></div>
               <div className="relative h-full border border-white/10 bg-white/5 backdrop-blur-md rounded-3xl p-10 flex flex-col justify-between overflow-hidden">
                  <div className="text-[12rem] font-black text-white/5 absolute -top-10 -right-10 leading-none">26</div>
                  <Terminal className="w-16 h-16 text-[#33A5D3] mb-6" />
                  <div>
                    <h4 className="text-3xl font-bold mb-2">"Satu Hati, Satu Gerak, TI JAYA!"</h4>
                    <div className="h-1 w-full bg-gradient-to-r from-[#33A5D3] to-transparent"></div>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- TIGA PILAR (UNIFORM COLORS) --- */}
      <section className="relative z-10 py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="3 Pilar Aksi" subtitle="Core Values" />
          
          <div className="relative grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="hidden md:block absolute top-24 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#1D77BF]/40 to-transparent"></div>
            
            {[
              { icon: Users, title: "KOLABORASI" },
              { icon: Lightbulb, title: "INOVASI" },
              { icon: Target, title: "PRESTASI" }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.2}>
                <div className="relative group bg-[#0a0a0a] border border-white/10 p-6 md:p-8 rounded-2xl hover:border-[#33A5D3]/50 transition-all duration-500 text-center h-full">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/10 group-hover:bg-[#1D77BF]/10 text-[#33A5D3]">
                    <item.icon size={28} className="md:w-9 md:h-9" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-black mb-4 tracking-wider text-white">{item.title}</h3>
                  <div className="h-[2px] w-0 group-hover:w-full bg-[#33A5D3] transition-all duration-500 mx-auto opacity-50 mb-4"></div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- VISI & MISI --- */}
      <section id="visi" className="relative z-10 py-20 md:py-32 bg-white/5 overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Visi */}
          <div className="relative">
             <div className="relative lg:sticky lg:top-32">
               <span className="text-[#33A5D3] font-mono tracking-widest uppercase mb-4 block text-xs md:text-sm">Visi Utama</span>
               <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 md:mb-8">
                 RUMAH <br/> 
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33A5D3] to-[#1D77BF]">KOLABORASI</span>
               </h2>
               <p className="text-base md:text-2xl leading-relaxed text-white/80 border-l-4 border-[#1D77BF] pl-6 py-2">
                 "Mewujudkan Himpunan Mahasiswa Teknologi Informasi sebagai Rumah <span className="text-white font-bold">Kolaborasi</span> yang menciptakan <span className="text-white font-bold">Inovasi</span> untuk mewujudkan <span className="text-white font-bold">Prestasi</span>."
               </p>
             </div>
          </div>

          {/* Misi */}
          <div>
            <span className="text-white/50 font-mono tracking-widest uppercase mb-6 md:mb-8 block text-left lg:text-right text-xs md:text-sm">Misi Kami</span>
            <div className="space-y-4 md:space-y-6">
              {missions.map((m, i) => (
                <FadeIn key={i} delay={i * 0.1} direction="left">
                  <div className="group flex gap-4 md:gap-6 p-5 md:p-6 rounded-xl bg-black/40 border border-white/5 hover:border-[#33A5D3]/50 transition-all duration-300">
                    <div className="text-2xl md:text-4xl font-black text-white/10 group-hover:text-[#33A5D3] transition-colors">0{i+1}</div>
                    <p className="text-sm md:text-lg text-white/90 self-center">
                      {m.text.split(" ").map((word, wIdx) => {
                        const highlight = ["Profesional", "Kolaborasi", "Hard", "Soft", "Prestasi", "Inovasi"].some(k => word.includes(k));
                        return <span key={wIdx} className={highlight ? "text-[#33A5D3] font-bold" : ""}>{word} </span>
                      })}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- PROGRAM UNGGULAN --- */}
      <section id="program" className="relative z-10 py-20 md:py-32 px-4 scroll-mt-20">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute inset-0 bg-[#1D77BF]/20 blur-[60px] md:blur-[100px] rounded-full"></div>
          
          <SpotlightCard className="bg-[#080808] p-6 md:p-16 border-[#1D77BF]/20 text-center">
            <div className="relative z-10">
              <div className="inline-block bg-[#1D77BF] text-white font-bold px-3 py-1 text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6 rounded-sm">Program Unggulan</div>
              
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-black mb-4 md:mb-6 leading-none break-words">
                INNO <span className="text-white/30 italic font-serif">CLASS</span>
              </h2>
              
              <p className="text-sm md:text-xl text-white/70 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
                Pelatihan rutin <strong className="text-white">Hard Skill & Soft Skill</strong>. Bukan sekadar webinar, tapi kurikulum terstruktur agar seluruh mahasiswa TI punya kesempatan berkembang yang sama.
              </p>
              
              <div className="inline-block p-4 md:p-6 bg-white/5 rounded-xl border border-white/10 w-full max-w-lg mx-auto">
                <h4 className="text-[#33A5D3] font-bold text-xs md:text-sm uppercase mb-2 flex items-center justify-center gap-2">
                  <Target size={14} className="md:w-4 md:h-4" /> Target Output
                </h4>
                <p className="text-xs md:text-base text-white/90">Melahirkan SDM berkompeten yang siap bersaing di industri.</p>
              </div>

            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* --- DEPARTEMEN --- */}
      <section className="py-16 md:py-20 bg-black border-t border-white/10">
        <div className="text-center mb-8 md:mb-10">
          <span className="text-[10px] md:text-xs font-mono text-white/30 uppercase tracking-[0.3em] md:tracking-[0.5em]">Departemen Struktur</span>
        </div>
        <InfiniteMarquee items={departments} />
      </section>

      {/* --- FOOTER --- */}
      <section className="h-[30vh] md:h-[40vh] flex flex-col items-center justify-center relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1D77BF]/20 via-black to-black"></div>
        <motion.h2 
          whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="relative z-10 text-5xl sm:text-7xl md:text-9xl font-black text-white uppercase tracking-tighter"
        >
          Thank You
        </motion.h2>
        <p className="relative z-10 text-white/40 mt-2 md:mt-4 font-mono text-xs md:text-sm">© INNOVARA 2026</p>
      </section>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); } 
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .mask-gradient-x {
           mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .clip-path-slant {
          clip-path: polygon(5% 0, 100% 0, 95% 100%, 0% 100%);
        }
        @media (min-width: 640px) {
          .clip-path-slant {
            clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
          }
        }
      `}</style>
    </div>
  );
}