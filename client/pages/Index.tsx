"use client";

import { Header } from "@/components/Header";
import { Brain, Radio, Zap, ArrowRight, Star as StarIcon, Target, Users, Lightbulb } from "lucide-react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
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
      hoverEffect && "hover:border-yellow-500/50 hover:bg-white/[0.08] hover:shadow-[0_0_30px_-10px_rgba(253,224,71,0.3)]",
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
            className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20 stroke-text hover:text-yellow-400 transition-colors duration-300 cursor-default uppercase"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
          >
            {item}
            <span className="mx-8 text-yellow-500/40">•</span>
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

  // Data sesuai PDF Page 2
  const evaluationPoints = [
    {
      number: "01",
      description:
        "Kurangnya profesionalitas dalam internal himpunan. Sistem penilaian pengurus saat ini terlalu fokus pada karakter personal bukannya berdasarkan KPI sehingga rentan terjadinya ketidakadilan karena faktor kedekatan pertemanan.",
    },
    {
      number: "02",
      description:
        "Himpunan minim adanya kegiatan pembinaan rutin untuk meningkatkan soft skill dan hard skill yang manfaatnya sangat dirasakan mahasiswa teknologi informasi.",
    },
    {
      number: "03",
      description:
        "Penampungan aspirasi mahasiswa TI kurang menyebar. Wadah aspirasi mahasiswa saat ini hanya menjadi formalitas tanpa adanya tindak lanjut yang transparan dan solutif.",
    },
    {
      number: "04",
      description:
        "Penempatan program pelatihan yang tidak sesuai dengan fungsi utama departemennya. Contohnya berani bicara di departemen perhubungan yang seharusnya ada di departemen PSDM. Perhubungan seharusnya hanya berfokus pada eksternal saja.",
    },
  ];

  // Data sesuai PDF Page 6
  const missions = [
    {
      text: "Membangun tata kelola organisasi yang Profesional berbasis kinerja (KPI).",
    },
    {
      text: "Mempererat rasa kebersamaan serta menjalin kolaborasi dengan organisasi, institusi, dan industri.",
    },
    {
      text: "Menjadi jembatan aspirasi mahasiswa TI dengan memperhatikan hak, kebutuhan, dan kesejahteraan bersama.",
    },
    {
      text: "Meningkatkan kualitas mahasiswa melalui program pengembangan, guna meningkatkan Hard Skill dan Soft Skill mahasiswa untuk mencetak segudang Prestasi.",
    },
    {
      text: "Menghadirkan Inovasi program kerja yang tepat sasaran dan fungsional.",
    },
  ];

  // Data sesuai PDF Page 8
  const departments = [
    "PSDM",
    "INOVASI DAN TEKNOLOGI",
    "MEDIA DAN INFORMASI DIGITAL",
    "ADVOKESMA",
    "HUBUNGAN EKSTERNAL",
    "EKONOMI KREATIF",
    "KREATIFITAS DAN OLAHRAGA",
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-yellow-500 selection:text-black overflow-x-hidden font-sans">
      <Header />

      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-500/10 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow delay-1000"></div>
      </div>

      {/* Hero Section (Page 1) */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
        <motion.div
          style={{ y }}
          className="relative z-10 text-center max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6 inline-block"
          >
            <span className="px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 text-sm font-mono tracking-widest uppercase backdrop-blur-md">
              HMPSTI 2026
            </span>
          </motion.div>

          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black leading-tight tracking-tighter mb-4 uppercase">
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
              className="block text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-700 relative drop-shadow-sm"
            >
              INNOVARA
            </motion.span>
          </h1>
          
          {/* Decorative Stars from PDF */}
          <StarIcon className="absolute top-1/4 right-0 w-8 h-8 text-yellow-400 animate-pulse fill-yellow-400" />
          <StarIcon className="absolute bottom-1/4 left-10 w-6 h-6 text-white animate-pulse" />

          <FadeIn delay={0.6}>
            <button className="mt-12 group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-yellow-400">
              <span className="relative z-10 flex items-center gap-2">
                Explore Vision <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </FadeIn>
        </motion.div>
      </section>

      {/* Evaluation Section (Page 2) */}
      <section className="relative z-10 py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">
              <span className="text-white">Poin Evaluasi</span>{" "}
              <span className="text-yellow-500">HMPSTI 2025</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {evaluationPoints.map((point, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <GlassCard className="h-full group hover:bg-white/5">
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-yellow-500 text-black flex items-center justify-center text-2xl font-black">
                      {point.number}
                    </div>
                    <div>
                      <p className="text-white/80 leading-relaxed text-sm md:text-base">
                        {/* Highlight keywords based on PDF bold text assumption */}
                        {point.description.split(" ").map((word, i) => {
                          const highlight = ["KPI", "soft", "hard", "skill", "minim", "pembinaan", "rutin", "kurang", "menyebar", "tidak", "sesuai"].some(k => word.toLowerCase().includes(k));
                          return (
                            <span key={i} className={highlight ? "text-red-400 font-bold" : ""}>
                              {word}{" "}
                            </span>
                          )
                        })}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Filosofi Section (Page 3) */}
      <section id="filosofi" className="relative z-10 py-24 px-4 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-5xl md:text-7xl font-black mb-12 leading-none uppercase">
                Filosofi
                <br />
                <span className="text-yellow-500">INNOVARA</span>
              </h2>

              <div className="space-y-8">
                <GlassCard className="border-l-4 border-l-yellow-500">
                  <div className="mb-2 bg-yellow-500 w-fit px-2 py-1 text-black font-bold text-sm rounded">KATA DASAR</div>
                  <h3 className="text-3xl font-bold mb-3 text-yellow-500">INNOVA</h3>
                  <p className="text-white text-lg">
                    diambil dari kata <i className="text-yellow-200">innovation</i> atau inovasi yang berarti menciptakan hal baru yang beda dari sebelumnya.
                  </p>
                </GlassCard>

                <GlassCard className="border-l-4 border-l-yellow-500">
                   <div className="mb-2 bg-white w-fit px-2 py-1 text-black font-bold text-sm rounded">AKHIRAN</div>
                  <h3 className="text-3xl font-bold text-white mb-3">RA</h3>
                  <p className="text-white text-lg">
                    diambil dari kata <i className="text-yellow-200">era</i> atau zaman. zaman yang dimana aspirasi didengar, Kolaborasi yang terbuka dan Prestasi terbentuk melalui pembinaan yang ada.
                  </p>
                </GlassCard>
              </div>
            </FadeIn>

             {/* Visual representation right side */}
            <FadeIn delay={0.3} className="hidden lg:flex items-center justify-center relative">
               <div className="absolute w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl"></div>
               <img 
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" 
                alt="Students Crowd" 
                className="relative z-10 rounded-2xl opacity-60 grayscale hover:grayscale-0 transition duration-700 mask-image-gradient"
               />
               <div className="absolute inset-0 z-20 flex items-end justify-center pb-10">
                   <h3 className="text-4xl font-black uppercase italic tracking-tighter">"Satu Hati, Satu Gerak"</h3>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Tiga Pilar Aksi (Page 4) */}
      <section className="relative z-10 py-32 px-4">
        <div className="max-w-7xl mx-auto">
           <FadeIn className="text-center mb-20">
            <h2 className="text-5xl font-black text-white uppercase">Tiga Pilar Aksi</h2>
            <div className="h-1 w-24 bg-white mx-auto mt-6"></div>
           </FadeIn>

           <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Line Connector */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/20 -translate-y-1/2 z-0"></div>

              {[
                  { icon: Users, title: "KOLABORASI", color: "bg-yellow-500 text-black" },
                  { icon: Lightbulb, title: "INOVASI", color: "bg-purple-600 text-white" },
                  { icon: Target, title: "PRESTASI", color: "bg-white text-black" }
              ].map((item, idx) => (
                  <FadeIn key={idx} delay={idx * 0.2} className="relative z-10">
                      <div className="flex flex-col items-center text-center group">
                          <div className={cn(
                              "w-24 h-24 rounded-full flex items-center justify-center mb-8 border-4 border-[#050505] transition-transform duration-300 group-hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.5)]",
                              item.color
                          )}>
                              <item.icon size={40} />
                          </div>
                          <h3 className="text-3xl font-black tracking-widest">{item.title}</h3>
                      </div>
                  </FadeIn>
              ))}
           </div>
        </div>
      </section>

      {/* Visi (Page 5) */}
      <section className="relative z-10 py-24 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-red-900/20 to-transparent pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 text-center">
            <FadeIn>
                <div className="inline-block bg-white text-black text-6xl font-black px-6 py-2 mb-12">VISI</div>
                <h3 className="text-2xl md:text-4xl font-medium text-white leading-relaxed">
                    "Mewujudkan Himpunan Mahasiswa Teknologi Informasi sebagai Rumah <span className="text-red-500 font-bold">Kolaborasi</span> yang menciptakan <span className="text-red-500 font-bold">Inovasi</span> untuk mewujudkan <span className="text-red-500 font-bold">Prestasi</span>"
                </h3>
            </FadeIn>
        </div>
      </section>

      {/* Misi (Page 6) */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
             <div className="text-center mb-16">
                 <div className="inline-block bg-white text-black text-6xl font-black px-6 py-2">MISI</div>
             </div>

             <div className="grid gap-6">
                {missions.map((m, i) => (
                    <FadeIn key={i} delay={i * 0.1}>
                        <div className="flex gap-6 items-center p-6 border-b border-white/10 hover:bg-white/5 transition-colors">
                            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                0{i+1}
                            </div>
                            <p className="text-lg md:text-xl text-white/90">
                                {m.text.split(" ").map((word, idx) => {
                                    // Simple highlighting logic based on PDF colors
                                    const isRed = ["Profesional", "kolaborasi", "jembatan", "aspirasi", "pengembangan", "Hard", "Soft", "Skill", "Prestasi", "Inovasi"].includes(word.replace(/[^a-zA-Z]/g, ""));
                                    return <span key={idx} className={isRed ? "text-red-400 font-bold" : ""}>{word} </span>
                                })}
                            </p>
                        </div>
                    </FadeIn>
                ))}
             </div>
        </div>
      </section>

      {/* Program Unggulan (Page 7) */}
      <section className="relative z-10 py-32 px-4">
        <div className="max-w-6xl mx-auto">
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <FadeIn>
                    <h3 className="text-white text-4xl font-bold uppercase leading-none mb-2">PROGRAM<br/><span className="text-yellow-500">UNGGULAN</span></h3>
                    <div className="bg-yellow-500 text-black text-3xl font-black inline-block px-4 py-2 mt-4 mb-8">INNO CLASS</div>
                    
                    <p className="text-xl text-white/80 mb-8 leading-relaxed">
                        Pelatihan rutin <span className="text-red-400 font-bold">Hard Skill & Soft Skill</span> yang terbuka agar seluruh mahasiswa TI memiliki kesempatan yang sama untuk <span className="text-red-400 font-bold">berkembang</span>.
                    </p>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="bg-[#111] p-8 rounded-xl border-l-4 border-yellow-500 relative">
                        <div className="bg-yellow-500 text-black font-bold px-3 py-1 absolute -top-4 left-4">OUTPUT</div>
                        <p className="text-lg text-white/90 pt-2">
                             Terwujudnya peningkatan kualitas <span className="text-red-400 font-bold">Soft skill</span> dan <span className="text-red-400 font-bold">Hard Skill</span> mahasiswa TI, sehingga melahirkan SDM yang berkompeten dan siap bersaing.
                        </p>
                    </div>
                </FadeIn>
             </div>
        </div>
      </section>

      {/* Departemen (Page 8) */}
      <section className="py-32 relative z-10 border-t border-white/10 bg-black">
         <div className="text-center mb-16">
             <div className="inline-block bg-white text-black text-4xl font-black px-8 py-2 uppercase">DEPARTEMEN</div>
         </div>
         <InfiniteMarquee items={departments} />
      </section>
      
      {/* Footer / Thank You (Page 9) */}
      <section className="h-[50vh] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 to-transparent"></div>
          <motion.h2 
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 uppercase tracking-tighter"
          >
              THANK YOU
          </motion.h2>
      </section>

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