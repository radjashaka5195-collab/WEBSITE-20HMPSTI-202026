"use client";

import { Header } from "@/components/Header";
import { Brain, Radio, Zap, ArrowRight, Star as StarIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const FadeIn = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const GlassCard = ({
  children,
  className,
  hoverEffect = true,
}: {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}) => (
  <div
    className={cn(
      "relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 transition-all duration-300",
      hoverEffect && "hover:border-primary/50 hover:bg-white/[0.08] hover:shadow-[0_0_30px_-10px_rgba(255,200,0,0.3)]",
      className
    )}
  >
    {children}
  </div>
);

const InfiniteMarquee = ({ items }: { items: string[] }) => {
  return (
    <div className="relative flex overflow-x-hidden group mask-gradient-x">
      <div className="animate-marquee flex whitespace-nowrap gap-8 py-4">
        {[...items, ...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20 stroke-text hover:text-primary transition-colors duration-300 cursor-default uppercase"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
          >
            {item}
            <span className="mx-8 text-primary/40">•</span>
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

  const evaluationPoints = [
    {
      number: "01",
      title: "Profesionalitas Internal",
      description:
        "Sistem penilaian pengurus saat ini terlalu fokus pada karakter personal. Kami mengubahnya menjadi berbasis KPI (Key Performance Indicator) untuk objektivitas.",
    },
    {
      number: "02",
      title: "Pembinaan Rutin",
      description:
        "Minimnya kegiatan pembinaan soft skill & hard skill. Kami hadirkan pelatihan rutin yang berdampak langsung bagi mahasiswa TI.",
    },
    {
      number: "03",
      title: "Sentralisasi Aspirasi",
      description:
        "Wadah aspirasi seringkali hanya formalitas. Kami menjamin tindak lanjut yang transparan, solutif, dan tersebar merata.",
    },
    {
      number: "04",
      title: "Fungsi Departemen",
      description:
        "Penempatan program yang salah kamar (mis: Public Speaking di Perhubungan). Kami kembalikan fungsi departemen sesuai fitrahnya.",
    },
  ];

  const missions = [
    {
      title: "Tata Kelola Profesional",
      desc: "Berbasis kinerja (KPI) yang terukur dan adil.",
    },
    {
      title: "Kolaborasi Luas",
      desc: "Sinergi dengan organisasi, institusi, dan industri.",
    },
    {
      title: "Jembatan Aspirasi",
      desc: "Memperhatikan hak, kebutuhan, dan kesejahteraan.",
    },
    {
      title: "Pengembangan Kualitas",
      desc: "Mencetak prestasi melalui Hard Skill & Soft Skill.",
    },
    {
      title: "Inovasi Fungsional",
      desc: "Program kerja yang tepat sasaran dan berdampak.",
    },
  ];

  const departments = [
    "PSDM",
    "Riset & Teknologi",
    "Medinfo",
    "Advokesma",
    "Hubungan Luar",
    "Ekonomi Kreatif",
    "Minat Bakat",
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-black overflow-x-hidden font-sans">
      <Header />

      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow delay-1000"></div>
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
        <motion.div
          style={{ y }}
          className="relative z-10 text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6 inline-block"
          >
            <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono tracking-widest uppercase backdrop-blur-md">
              HMPSTI 2026
            </span>
          </motion.div>

          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black leading-tight tracking-tighter mb-8">
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="block text-white"
            >
              KABINET
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-primary relative"
            >
              INNOVARA
              <svg
                className="absolute -bottom-4 left-0 w-full h-3 text-primary"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-50"
                />
              </svg>
            </motion.span>
          </h1>

          <FadeIn delay={0.6}>
            <p className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Membangun masa depan melalui{" "}
              <span className="text-white font-semibold">Kolaborasi</span>,
              menciptakan{" "}
              <span className="text-white font-semibold">Inovasi</span>, dan
              mewujudkan{" "}
              <span className="text-white font-semibold">Prestasi</span>.
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <button className="group relative px-8 py-4 bg-primary text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,200,0,0.6)]">
              <span className="relative z-10 flex items-center gap-2">
                Jelajahi Visi Kami <ArrowRight className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </FadeIn>
        </motion.div>
      </section>

      {/* Evaluation Section */}
      <section className="relative z-10 py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-white">REFLEKSI &</span>{" "}
              <span className="text-primary underline decoration-wavy decoration-white/20 underline-offset-8">
                EVALUASI
              </span>
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">
              Langkah awal pembaruan dimulai dengan menyadari kekurangan untuk
              disempurnakan.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {evaluationPoints.map((point, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <GlassCard className="h-full group">
                  <div className="flex gap-6 items-start">
                    <span className="text-6xl font-black text-white/5 group-hover:text-primary/20 transition-colors duration-500 -mt-2">
                      {point.number}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                        {point.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed text-sm md:text-base">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="filosofi" className="relative z-10 py-24 px-4 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-5xl md:text-7xl font-black mb-12 leading-none">
                FILOSOFI
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
                  NAMA
                </span>
              </h2>

              <div className="space-y-8">
                <GlassCard>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary px-3 py-1 text-black font-black rounded text-sm">
                      KATA DASAR
                    </div>
                    <h3 className="text-3xl font-bold">INNOVA</h3>
                  </div>
                  <p className="text-white/70">
                    Berasal dari <i>Innovation</i>. Semangat untuk selalu
                    menciptakan kebaruan yang solutif, tidak terpaku pada cara
                    lama yang usang.
                  </p>
                </GlassCard>

                <GlassCard>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white px-3 py-1 text-black font-black rounded text-sm">
                      AKHIRAN
                    </div>
                    <h3 className="text-3xl font-bold text-white">RA</h3>
                  </div>
                  <p className="text-white/70">
                    Merepresentasikan <i>Era</i> atau Zaman. Menandakan
                    dimulainya era baru HMPSTI yang lebih terbuka, kolaboratif,
                    dan berprestasi.
                  </p>
                </GlassCard>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="relative h-[500px] w-full hidden lg:block">
              {/* Abstract 3D shape representation */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-[100px] animate-pulse"></div>
              <div className="relative h-full border border-white/10 bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden">
                 <div className="absolute top-0 right-0 p-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                 <div className="relative z-10">
                    <StarIcon className="w-16 h-16 text-primary mb-6 animate-spin-slow" />
                    <div className="text-6xl font-black text-white/20">2026</div>
                 </div>
                 <div className="relative z-10">
                    <div className="h-1 w-24 bg-primary mb-4"></div>
                    <p className="text-2xl font-bold">"New Era, New Hope"</p>
                 </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative z-10 py-32 px-4">
        <div className="max-w-7xl mx-auto">
           <FadeIn className="text-center mb-16">
            <span className="text-primary font-mono tracking-widest uppercase mb-2 block">Core Values</span>
            <h2 className="text-4xl md:text-5xl font-black text-white">3 PILAR AKSI</h2>
           </FadeIn>

           <div className="grid md:grid-cols-3 gap-8">
              {[
                  { icon: Brain, title: "KOLABORASI", color: "text-blue-400", border: "hover:border-blue-400/50" },
                  { icon: Radio, title: "INOVASI", color: "text-primary", border: "hover:border-primary/50" },
                  { icon: Zap, title: "PRESTASI", color: "text-purple-400", border: "hover:border-purple-400/50" }
              ].map((item, idx) => (
                  <FadeIn key={idx} delay={idx * 0.2}>
                      <div className={cn(
                          "group h-full p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 transition-all duration-500 hover:-translate-y-2",
                          item.border
                      )}>
                          <div className={cn("w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition", item.color)}>
                              <item.icon size={32} />
                          </div>
                          <h3 className="text-2xl font-black mb-3">{item.title}</h3>
                          <div className="h-1 w-12 bg-white/10 group-hover:w-full transition-all duration-500 mb-4"></div>
                          <p className="text-white/50 text-sm">
                              Fondasi utama dalam setiap langkah pergerakan kabinet untuk mencapai visi organisasi.
                          </p>
                      </div>
                  </FadeIn>
              ))}
           </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="relative z-10 py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4">
             <div className="grid lg:grid-cols-12 gap-12">
                {/* Visi Side */}
                <div className="lg:col-span-5 sticky top-24 h-fit">
                    <FadeIn>
                        <h2 className="text-8xl font-black text-white/5 mb-[-40px] select-none">VISI</h2>
                        <h3 className="text-4xl font-bold text-white mb-8 relative z-10">
                            RUMAH <span className="text-primary">KOLABORASI</span>
                        </h3>
                        <p className="text-xl text-white/80 leading-relaxed border-l-4 border-primary pl-6">
                            "Mewujudkan Himpunan Mahasiswa Teknologi Informasi sebagai Rumah Kolaborasi yang menciptakan Inovasi untuk mewujudkan Prestasi."
                        </p>
                    </FadeIn>
                </div>

                {/* Misi Side */}
                <div className="lg:col-span-7">
                    <div className="space-y-4">
                        {missions.map((m, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="group flex gap-6 p-6 rounded-xl hover:bg-white/5 transition border border-transparent hover:border-white/10">
                                    <div className="text-primary font-mono text-xl">0{i+1}</div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition">{m.title}</h4>
                                        <p className="text-white/60">{m.desc}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
             </div>
        </div>
      </section>

      {/* Program Unggulan */}
      <section className="relative z-10 py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 z-0 transform origin-left scale-110"></div>
        <div className="max-w-6xl mx-auto relative z-10">
            <div className="bg-black border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden">
                {/* Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full"></div>
                
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <div className="inline-block px-3 py-1 bg-primary text-black font-bold rounded mb-6 text-sm">PROGRAM UNGGULAN</div>
                        <h2 className="text-4xl md:text-6xl font-black mb-6">INNO <span className="text-white/30 italic">CLASS</span></h2>
                        <p className="text-white/70 text-lg mb-8">
                            Bukan sekadar webinar. Ini adalah pelatihan intensif <i>Hard Skill</i> & <i>Soft Skill</i> yang dirancang kurikulumnya sesuai kebutuhan industri saat ini.
                        </p>
                        <div className="flex gap-4">
                            <div className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-center">
                                <div className="text-primary font-bold text-xl">12+</div>
                                <div className="text-xs text-white/50 uppercase mt-1">Sesi Kelas</div>
                            </div>
                            <div className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-center">
                                <div className="text-primary font-bold text-xl">Mentoring</div>
                                <div className="text-xs text-white/50 uppercase mt-1">Eksklusif</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="relative z-10 aspect-video bg-gradient-to-br from-white/10 to-black rounded-xl border border-white/10 flex items-center justify-center group overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center pl-1 group-hover:scale-110 transition duration-300">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Departments Marquee */}
      <section className="py-24 relative z-10 border-t border-white/10 bg-black">
         <div className="text-center mb-12">
             <span className="text-white/40 font-mono text-sm tracking-widest uppercase">Our Structure</span>
         </div>
         <InfiniteMarquee items={departments} />
      </section>
      
      {/* CSS for custom animations not in tailwind */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .mask-gradient-x {
           mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .stroke-text {
           -webkit-text-stroke: 1px rgba(255,255,255,0.2); 
        }
      `}</style>
    </div>
  );
}