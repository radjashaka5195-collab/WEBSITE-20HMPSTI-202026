"use client";

import { Header } from "@/components/Header";
import { 
  ArrowRight, 
  Star as StarIcon, 
  Target, 
  Users, 
  Lightbulb, 
  ChevronDown, 
  Zap,
  Terminal
} from "lucide-react";
import { useScroll, useTransform, useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { MouseEvent } from "react";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

// Efek Spotlight pada Card
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
              rgba(234, 179, 8, 0.15),
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
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }} // Custom spring-like easing
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SectionHeading = ({ title, subtitle, align = "center" }: { title: string, subtitle?: string, align?: "left" | "center" }) => (
  <div className={cn("mb-16", align === "center" ? "text-center" : "text-left")}>
    {subtitle && (
      <motion.span 
        initial={{ opacity: 0, letterSpacing: "0em" }}
        whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
        className="text-yellow-500 font-mono text-sm uppercase tracking-widest mb-2 block"
      >
        {subtitle}
      </motion.span>
    )}
    <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight">
      {title}
    </h2>
    <div className={cn("h-1 w-24 bg-yellow-500 mt-6", align === "center" && "mx-auto")} />
  </div>
);

const InfiniteMarquee = ({ items }: { items: string[] }) => {
  return (
    <div className="relative flex overflow-x-hidden group mask-gradient-x border-y border-white/10 bg-white/[0.02]">
      <div className="animate-marquee flex whitespace-nowrap gap-12 py-6">
        {[...items, ...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 text-2xl md:text-4xl font-black text-white/20 hover:text-yellow-500 transition-colors duration-300 cursor-default uppercase"
          >
            <span>{item}</span>
            <StarIcon className="w-4 h-4 text-white/10" />
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

  // Scroll Handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Data
  const evaluationPoints = [
    { number: "01", title: "Profesionalitas", desc: "Kurangnya profesionalitas internal. Penilaian terlalu personal, bukan berbasis KPI, memicu ketidakadilan." },
    { number: "02", title: "Pembinaan", desc: "Minim pembinaan rutin. Mahasiswa butuh soft skill & hard skill yang dampaknya nyata." },
    { number: "03", title: "Aspirasi", desc: "Aspirasi tidak menyebar. Wadah saat ini hanya formalitas tanpa tindak lanjut transparan." },
    { number: "04", title: "Salah Kamar", desc: "Penempatan program tidak sesuai fungsi departemen (Contoh: Public Speaking di Perhubungan, harusnya PSDM)." },
  ];

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
    <div className="min-h-screen bg-[#050505] text-white selection:bg-yellow-500 selection:text-black overflow-x-hidden font-sans">
      <Header />

      {/* --- BACKGROUND FX --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        {/* Animated Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-yellow-600/10 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-900/20 blur-[120px] rounded-full animate-pulse-slow delay-1000"></div>
        {/* Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        <motion.div style={{ y }} className="relative z-10 text-center max-w-7xl mx-auto mt-10">
          
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <div className="h-[1px] w-12 bg-yellow-500/50"></div>
            <span className="text-yellow-500 font-mono tracking-[0.3em] text-sm uppercase">HMPSTI 2026</span>
            <div className="h-[1px] w-12 bg-yellow-500/50"></div>
          </motion.div>

          <div className="relative">
            <h1 className="text-7xl sm:text-8xl md:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase select-none">
              <motion.span initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="block text-white/20">Kabinet</motion.span>
              <motion.span initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="block text-white">Innovara</motion.span>
            </h1>
            
            {/* Decor Element */}
            <motion.div style={{ rotate }} className="absolute -right-8 -top-8 md:right-10 md:top-0 text-yellow-500 opacity-80">
               <StarIcon size={64} fill="currentColor" className="animate-spin-slow" />
            </motion.div>
          </div>

          <FadeIn delay={0.4} className="mt-12 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-white/60 leading-relaxed">
              Mewujudkan era baru melalui <span className="text-yellow-400 font-bold">Inovasi</span> yang berdampak dan <span className="text-yellow-400 font-bold">Kolaborasi</span> tanpa batas.
            </p>
          </FadeIn>

          <FadeIn delay={0.6} className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('visi')} 
              className="group relative px-8 py-4 bg-yellow-500 text-black font-black uppercase tracking-wider hover:bg-yellow-400 transition-all clip-path-slant"
            >
              <span className="flex items-center gap-2">
                Explore Vision <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </FadeIn>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-white/30 cursor-pointer"
          onClick={() => scrollToSection('evaluasi')}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* --- EVALUASI --- */}
      <section id="evaluasi" className="relative z-10 py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Poin Evaluasi" subtitle="Refleksi 2025" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {evaluationPoints.map((point, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <SpotlightCard className="h-full bg-black p-6 flex flex-col">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-4xl font-black text-white/10">{point.number}</span>
                    <div className="h-2 w-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 uppercase">{point.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed flex-grow">
                    {point.desc}
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2 text-xs text-red-400 font-mono uppercase">
                      <Zap size={12} /> Priority Fix
                    </div>
                  </div>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- FILOSOFI --- */}
      <section className="relative z-10 py-32 bg-[#080808] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading title="Filosofi Nama" subtitle="Meaning" align="left" />
              
              <div className="space-y-12">
                <FadeIn delay={0.2} direction="right">
                  <div className="relative pl-8 border-l-2 border-yellow-500/30">
                    <h3 className="text-5xl md:text-6xl font-black text-yellow-500 mb-2">INNOVA</h3>
                    <p className="text-sm font-mono text-white/40 mb-4 uppercase tracking-widest">// Root Word: Innovation</p>
                    <p className="text-xl text-white/80">
                      Semangat menciptakan hal baru yang <span className="text-white font-bold">beda</span> dari sebelumnya. Bukan sekadar rutinitas.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4} direction="right">
                  <div className="relative pl-8 border-l-2 border-white/20">
                    <h3 className="text-5xl md:text-6xl font-black text-white mb-2">RA</h3>
                    <p className="text-sm font-mono text-white/40 mb-4 uppercase tracking-widest">// Suffix: Era / Zaman</p>
                    <p className="text-xl text-white/80">
                      Dimulainya zaman dimana aspirasi didengar & kolaborasi terbuka lebar.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Abstract Graphic */}
            <FadeIn direction="left" className="relative hidden lg:block h-[500px]">
               <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-purple-900/20 rounded-3xl blur-3xl"></div>
               <div className="relative h-full border border-white/10 bg-white/5 backdrop-blur-md rounded-3xl p-10 flex flex-col justify-between overflow-hidden">
                  <div className="text-[12rem] font-black text-white/5 absolute -top-10 -right-10 leading-none">26</div>
                  <Terminal className="w-16 h-16 text-yellow-500 mb-6" />
                  <div>
                    <h4 className="text-3xl font-bold mb-2">"Satu Hati, Satu Gerak"</h4>
                    <div className="h-1 w-full bg-gradient-to-r from-yellow-500 to-transparent"></div>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- TIGA PILAR --- */}
      <section className="relative z-10 py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="3 Pilar Aksi" subtitle="Core Values" />
          
          <div className="relative grid md:grid-cols-3 gap-8">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-24 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            {[
              { icon: Users, title: "KOLABORASI", color: "text-blue-400" },
              { icon: Lightbulb, title: "INOVASI", color: "text-yellow-400" },
              { icon: Target, title: "PRESTASI", color: "text-red-400" }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.2}>
                <div className="relative group bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl hover:border-white/30 transition-all duration-500 text-center">
                  <div className={cn("w-20 h-20 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/10", item.color)}>
                    <item.icon size={36} />
                  </div>
                  <h3 className="text-2xl font-black mb-4 tracking-wider">{item.title}</h3>
                  <div className="h-[2px] w-0 group-hover:w-full bg-current transition-all duration-500 mx-auto opacity-50 mb-4"></div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- VISI & MISI --- */}
      <section id="visi" className="relative z-10 py-32 bg-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          
          {/* Visi */}
          <div className="relative">
             <div className="sticky top-32">
               <span className="text-yellow-500 font-mono tracking-widest uppercase mb-4 block">Visi Utama</span>
               <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
                 RUMAH <br/> 
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">KOLABORASI</span>
               </h2>
               <p className="text-xl md:text-2xl leading-relaxed text-white/80 border-l-4 border-yellow-500 pl-6 py-2">
                 "Mewujudkan Himpunan Mahasiswa Teknologi Informasi sebagai Rumah <span className="text-white font-bold">Kolaborasi</span> yang menciptakan <span className="text-white font-bold">Inovasi</span> untuk mewujudkan <span className="text-white font-bold">Prestasi</span>."
               </p>
             </div>
          </div>

          {/* Misi */}
          <div>
            <span className="text-white/50 font-mono tracking-widest uppercase mb-8 block text-right">Misi Kami</span>
            <div className="space-y-6">
              {missions.map((m, i) => (
                <FadeIn key={i} delay={i * 0.1} direction="left">
                  <div className="group flex gap-6 p-6 rounded-xl bg-black/40 border border-white/5 hover:border-yellow-500/50 transition-all duration-300">
                    <div className="text-4xl font-black text-white/10 group-hover:text-yellow-500 transition-colors">0{i+1}</div>
                    <p className="text-lg text-white/90 self-center">
                      {m.text.split(" ").map((word, wIdx) => {
                        const highlight = ["Profesional", "Kolaborasi", "Hard", "Soft", "Prestasi", "Inovasi"].some(k => word.includes(k));
                        return <span key={wIdx} className={highlight ? "text-yellow-400 font-bold" : ""}>{word} </span>
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
      <section className="relative z-10 py-32 px-4">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute inset-0 bg-yellow-500/20 blur-[100px] rounded-full"></div>
          
          <SpotlightCard className="bg-[#080808] p-8 md:p-16 border-yellow-500/20">
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="inline-block bg-yellow-500 text-black font-bold px-3 py-1 text-xs uppercase tracking-widest mb-6 rounded-sm">Flagship Program</div>
                <h2 className="text-5xl md:text-7xl font-black mb-6 leading-none">
                  INNO <span className="text-white/30 italic font-serif">CLASS</span>
                </h2>
                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  Pelatihan rutin <strong className="text-white">Hard Skill & Soft Skill</strong>. Bukan sekadar webinar, tapi kurikulum terstruktur agar seluruh mahasiswa TI punya kesempatan berkembang yang sama.
                </p>
                
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <h4 className="text-yellow-500 font-bold text-sm uppercase mb-2">Target Output</h4>
                  <p className="text-sm text-white/80">Melahirkan SDM berkompeten yang siap bersaing di industri.</p>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative aspect-square md:aspect-video bg-gradient-to-tr from-gray-900 to-black rounded-xl border border-white/10 flex items-center justify-center overflow-hidden group">
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50"></div>
                 <div className="text-center group-hover:scale-110 transition-transform duration-500">
                    <StarIcon className="w-20 h-20 text-yellow-500 mx-auto mb-4 animate-pulse" />
                    <span className="text-2xl font-bold tracking-widest">JOIN US</span>
                 </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* --- DEPARTEMEN --- */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="text-center mb-10">
          <span className="text-xs font-mono text-white/30 uppercase tracking-[0.5em]">Departemen Struktur</span>
        </div>
        <InfiniteMarquee items={departments} />
      </section>

      {/* --- FOOTER --- */}
      <section className="h-[40vh] flex flex-col items-center justify-center relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-black to-black"></div>
        <motion.h2 
          whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="relative z-10 text-6xl md:text-9xl font-black text-white uppercase tracking-tighter"
        >
          Thank You
        </motion.h2>
        <p className="relative z-10 text-white/40 mt-4 font-mono text-sm">© INNOVARA 2026</p>
      </section>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .mask-gradient-x {
           mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .clip-path-slant {
          clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
        }
      `}</style>
    </div>
  );
}