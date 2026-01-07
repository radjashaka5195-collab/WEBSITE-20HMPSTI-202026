import { ArrowRight, Star as StarIcon, Terminal, Menu, X } from "lucide-react";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Helper untuk class tailwind
function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }

// --- COMPONENT: NAVBAR (Professional Glass) ---
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Struktur", path: "/struktur" },
    { name: "Departemen", path: "/departemen" },
  ];

  return (
    <>
      <nav className={cn("fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out", isScrolled ? "bg-dark/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-lg shadow-black/20" : "bg-transparent border-transparent py-8")}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="relative z-[101] cursor-pointer font-black text-xl tracking-tighter flex items-center gap-3 text-white group">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-dark bg-primary shadow-[0_0_25px_rgba(135,206,235,0.3)] group-hover:bg-secondary group-hover:shadow-[0_0_25px_rgba(255,127,36,0.3)] transition-all duration-500">
                <Terminal size={20} strokeWidth={3} />
            </div>
            <span className="text-xl tracking-tight font-black">
              <span className="text-primary">INNO</span><span className="text-secondary">VARA</span>
            </span>
          </Link>

          <div className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className={cn("text-[12px] font-bold uppercase transition-all duration-300 tracking-[0.2em] relative group", location.pathname === link.path ? "text-primary" : "text-gray-400 hover:text-white")}>
                {link.name}
                <span className={cn("absolute -bottom-2 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left", location.pathname === link.path && "scale-x-100")} />
              </Link>
            ))}
          </div>

          <button className="relative z-[101] md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[90] bg-dark/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8">
             {navLinks.map((link) => (
                <Link key={link.name} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-black text-white hover:text-primary uppercase tracking-tighter">{link.name}</Link>
             ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const FadeIn = ({ children, className, delay = 0, direction = "up" }: any) => {
  return (
    <motion.div initial={{ opacity: 0, y: direction === "up" ? 40 : 0, x: direction === "left" ? 40 : 0 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }} className={className}>
      {children}
    </motion.div>
  );
};

const SectionHeading = ({ title, subtitle, align = "center", dark = false }: any) => (
  <div className={cn("mb-12 md:mb-20", align === "center" ? "text-center" : "text-left")}>
    {subtitle && <span className={cn("font-mono text-xs font-bold uppercase tracking-[0.3em] mb-4 block", dark ? "text-gray-500" : "text-secondary")}>{subtitle}</span>}
    <h2 className={cn("text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tight", dark ? "text-white" : "text-white")}>{title}</h2>
  </div>
);

// === HALAMAN HOME UTAMA ===
export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  const missions = [
    { text: "Tata kelola organisasi Profesional berbasis kinerja (KPI)." },
    { text: "Kolaborasi erat dengan organisasi, institusi, dan industri." },
    { text: "Jembatan aspirasi: memperhatikan hak & kesejahteraan." },
    { text: "Pengembangan Hard/Soft Skill untuk mencetak Prestasi." },
    { text: "Inovasi program kerja yang tepat sasaran & fungsional." },
  ];

  return (
    <div className="min-h-screen bg-dark text-white font-sans selection:bg-secondary selection:text-white overflow-x-hidden">
      <Navbar />

      {/* BACKGROUND FX */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-150 mix-blend-overlay"></div>
        {/* Glow Effects */}
        <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-primary/10 blur-[180px] rounded-full mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-secondary/10 blur-[180px] rounded-full mix-blend-screen animate-pulse-slow delay-1000"></div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-20 overflow-hidden">
        <motion.div style={{ y }} className="relative z-10 text-center w-full max-w-7xl mx-auto">
          
          {/* HMPSTI 2026 Label */}
          <FadeIn delay={0.1}>
            <div className="flex items-center justify-center gap-6 mb-8 opacity-80">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary"></div>
                <span className="text-primary font-mono tracking-[0.4em] text-xs uppercase font-bold">HMPSTI 2026</span>
                <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
          </FadeIn>

          {/* JUDUL UTAMA (Diperbaiki agar tidak nabrak) */}
          <div className="relative w-full">
            {/* KABINET: Dijadikan block di atas, bukan watermark di belakang */}
            <span className="block text-white/50 text-[3vw] md:text-[1.5rem] tracking-[0.5em] font-bold uppercase mb-2 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              KABINET
            </span>

            {/* INNOVARA: Judul Besar */}
            <h1 className="font-black leading-[0.9] tracking-tighter uppercase select-none w-full relative z-10">
              <span className="block text-[13vw] sm:text-[12vw] lg:text-[11rem] drop-shadow-2xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-primary to-primary filter drop-shadow-[0_0_40px_rgba(135,206,235,0.3)]">INNO</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-bl from-white via-secondary to-secondary filter drop-shadow-[0_0_40px_rgba(255,127,36,0.3)]">VARA</span>
              </span>
            </h1>
            
            {/* Bintang Dekorasi */}
            <motion.div style={{ rotate }} className="absolute -right-4 -top-0 md:right-[10%] md:top-4 text-secondary opacity-80 hidden sm:block filter drop-shadow-[0_0_30px_rgba(255,127,36,0.6)]">
                <StarIcon size={64} className="md:w-24 md:h-24" fill="currentColor" strokeWidth={0} />
            </motion.div>
          </div>

          <FadeIn delay={0.3}>
            <p className="mt-12 text-lg md:text-2xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto tracking-wide">
                Mewujudkan era baru melalui <span className="text-white font-semibold border-b-2 border-primary/50 pb-0.5">Inovasi</span> yang berdampak dan <span className="text-white font-semibold border-b-2 border-secondary/50 pb-0.5">Kolaborasi</span> tanpa batas.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-16 flex justify-center">
                <Link to="/struktur" className="group relative px-12 py-5 bg-secondary text-white font-black uppercase tracking-widest transition-all clip-path-slant shadow-[0_20px_50px_-10px_rgba(255,127,36,0.5)] hover:shadow-[0_20px_60px_-10px_rgba(255,127,36,0.7)] hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 skew-y-12"></div>
                <span className="relative flex items-center justify-center gap-3 text-lg">Lihat Struktur <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" /></span>
                </Link>
            </div>
          </FadeIn>
        </motion.div>
      </section>

      {/* 2. FILOSOFI */}
      <section className="relative z-10 py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
            {/* Kolom Kiri: Teks */}
            <div>
              <SectionHeading title="Filosofi Nama" subtitle="MEANING" align="left" dark={true} />
              <div className="space-y-16 mt-16 pl-4 border-l border-white/5">
                {/* INNOVA */}
                <FadeIn className="relative pl-8">
                  <div className="absolute left-[-17px] top-2 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(135,206,235,0.8)]"></div>
                  <h3 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-white mb-4 tracking-tighter leading-none">INNOVA</h3>
                  <p className="text-sm text-primary/80 font-mono mb-6 tracking-[0.2em] font-bold">DARI KATA : INNOVATION</p>
                  <p className="text-xl text-gray-400 leading-relaxed max-w-md font-light">
                    Semangat menciptakan hal baru yang <span className="text-white font-bold">beda</span> dari sebelumnya. Bukan sekadar rutinitas.
                  </p>
                </FadeIn>
                
                {/* RA */}
                <FadeIn delay={0.2} className="relative pl-8">
                  <div className="absolute left-[-17px] top-2 w-3 h-3 bg-secondary rounded-full shadow-[0_0_10px_rgba(255,127,36,0.8)]"></div>
                  <h3 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white mb-4 tracking-tighter leading-none">RA</h3>
                  <p className="text-sm text-secondary/80 font-mono mb-6 tracking-[0.2em] font-bold">DARI KATA: ERA / ZAMAN</p>
                  <p className="text-xl text-gray-400 leading-relaxed max-w-md font-light">
                    Dimulainya zaman dimana aspirasi didengar & kolaborasi terbuka lebar.
                  </p>
                </FadeIn>
              </div>
            </div>
            
            {/* Kolom Kanan: Kartu Visual */}
            <FadeIn direction="left" className="relative hidden lg:flex h-[650px] items-center justify-end">
               <div className="relative w-full h-full bg-gradient-to-br from-surface/80 to-surface/30 backdrop-blur-2xl rounded-[3rem] border border-white/5 overflow-hidden p-14 flex flex-col justify-between shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)] group hover:border-primary/30 transition-all duration-700">
                 <div className="absolute right-[-2rem] top-1/2 -translate-y-1/2 font-black text-[30rem] text-white/[0.02] select-none pointer-events-none leading-none tracking-tighter transition-transform duration-700 group-hover:scale-110">26</div>
                 <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full group-hover:bg-secondary/20 transition-colors duration-700"></div>

                 <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:border-primary/50 transition-colors">
                    <Terminal className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                 </div>

                 <div className="relative z-10">
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mb-8 rounded-full"></div>
                    <h4 className="text-5xl font-black text-white mb-2 leading-[1.1] tracking-tight">"Satu Hati,<br/>Satu Gerak,<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">TI JAYA!</span>"</h4>
                 </div>
               </div>
            </FadeIn>
        </div>
      </section>

      {/* 3. VISI MISI */}
      <section className="relative z-10 py-32 bg-surface/20 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start">
          {/* Kolom Kiri: Visi */}
          <FadeIn>
             <div className="sticky top-32">
                <span className="text-primary font-mono uppercase mb-8 block tracking-[0.3em] font-bold text-xs border-l-2 border-primary pl-4">Visi Utama</span>
                <h2 className="text-7xl font-black leading-[0.9] mb-10 tracking-tighter text-white">RUMAH <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-gradient-x">KOLABORASI</span></h2>
                <p className="text-2xl text-gray-300 border-l-[4px] border-secondary pl-8 py-6 font-light italic leading-relaxed bg-white/5 rounded-r-2xl">
                "Mewujudkan HMPSTI sebagai Rumah Kolaborasi yang menciptakan Inovasi untuk mewujudkan Prestasi."
                </p>
             </div>
          </FadeIn>

          {/* Kolom Kanan: Misi */}
          <div className="flex flex-col justify-center">
            <span className="text-secondary font-mono uppercase mb-10 block tracking-[0.3em] font-bold text-xs border-l-2 border-secondary pl-4">Misi Kami</span>
            <div className="space-y-6">
              {missions.map((m, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="flex gap-8 p-8 rounded-3xl bg-surface/40 border border-white/5 hover:border-secondary/40 transition-all duration-300 group hover:bg-surface/80 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:-translate-x-2">
                    <div className="text-5xl font-black text-white/10 group-hover:text-secondary transition-colors leading-none font-outline-2">0{i+1}</div>
                    <p className="text-lg text-gray-300 self-center group-hover:text-white transition-colors font-light leading-relaxed">{m.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="py-24 bg-black text-center border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none"></div>
        <motion.h2 whileInView={{ scale: [0.95, 1], opacity: [0, 1] }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-[12vw] sm:text-[6rem] font-black text-white uppercase tracking-tighter mb-8 leading-none opacity-20 hover:opacity-100 transition-opacity duration-500">
            <span className="text-primary">INNO</span><span className="text-secondary">VARA</span>
        </motion.h2>
        <div className="flex justify-center items-center gap-4 text-gray-500 font-mono text-xs sm:text-sm tracking-widest uppercase">
            <span>© HMPSTI UB 2026</span>
            <span className="w-1 h-1 bg-primary rounded-full"></span>
            <span>Kabinet Innovara</span>
            <span className="w-1 h-1 bg-secondary rounded-full"></span>
            <span>Satu Hati, Satu Gerak, TI Jaya!</span>
        </div>
      </section>

      {/* CUSTOM CSS */}
      <style>{`
        .clip-path-slant { clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%); }
      `}</style>
    </div>
  );
}