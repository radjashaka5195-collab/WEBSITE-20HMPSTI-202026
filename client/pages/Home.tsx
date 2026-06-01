import { ArrowRight, ChevronDown, Users, LayoutGrid, Calendar, ShoppingBag, Award, Heart, Zap, Compass, Shield, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

// === MAIN HOME COMPONENT ===
export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 90, damping: 14 }
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white selection:text-black overflow-x-hidden relative">
      
      {/* Subtle Noise Texture Overlay (Human Editorial Vibe) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.025] brightness-125 mix-blend-overlay" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%270 0 256 256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27/%3E%3C/svg%3E")'}}></div>

      {/* ════════════════════════════════════════════
          HERO SECTION — Editorial Poster Style
      ════════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-32 overflow-hidden border-b border-white/[0.04]">
        
        {/* Subtle, asymmetric light leak */}
        <div className="absolute top-0 right-[-10%] w-[60vw] h-[60vw] bg-sky-500/[0.03] blur-[150px] rounded-full pointer-events-none"></div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-6xl w-full mx-auto"
        >

          {/* Clean Label */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-[#33A5D3] font-bold">
              Himpunan Mahasiswa Teknologi Informasi
            </span>
          </motion.div>

          {/* Bold Editorial Title (Solid vs Outline Text) */}
          <motion.div variants={itemVariants}>
            <h1 className="font-black tracking-tighter leading-[0.85] text-left text-[14vw] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] uppercase select-none">
              INNO<br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.8)" }}>VARA</span>
            </h1>
          </motion.div>

          {/* Subtitle & Info Grid */}
          <div className="grid md:grid-cols-12 gap-8 mt-12 items-end">
            <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-5">
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                Platform gerakan progresif mahasiswa Teknologi Informasi Universitas Brawijaya. Kami percaya inovasi lahir dari kolaborasi yang transparan, setara, dan tak terbatas.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-5 lg:col-start-8 flex flex-wrap gap-4 justify-start md:justify-end">
              <Link 
                to="/departemen"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-[#33A5D3] hover:text-white rounded-full font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300"
              >
                Jelajahi Divisi
                <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
              </Link>
              
              <a 
                href="#tentang"
                className="px-8 py-4 bg-transparent hover:bg-white/5 text-white rounded-full font-mono text-xs font-bold uppercase tracking-widest border border-white/10 transition-all duration-300"
              >
                Tentang Kabinet
              </a>
            </motion.div>
          </div>

        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 sm:right-12 md:right-20 lg:right-32 flex items-center gap-3 select-none">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">Scroll down</span>
          <ChevronDown size={14} className="text-white/30 animate-bounce" />
        </div>
      </section>

      {/* Quick Menu — Mobile Only */}
      <QuickMenu />

      {/* ════════════════════════════════════════════
          STATISTIK KABINET — Clean Editorial Stats
      ════════════════════════════════════════════ */}
      <section className="relative z-10 py-16 px-6 sm:px-12 md:px-20 lg:px-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 md:gap-x-12 border-b border-white/5 pb-16">
          {[
            { num: "07", label: "Departemen Sinergis", desc: "Divisi kerja terfokus pengembangan akademik & minat bakat." },
            { num: "100+", label: "Pengurus Aktif", desc: "Anggota kabinet yang menggerakkan roda HMPSTI." },
            { num: "30+", label: "Program Pembangunan", desc: "Agenda taktis terukur berbasis indikator keberhasilan." },
            { num: "1.000+", label: "Mahasiswa Terlayani", desc: "Ruang advokasi, bantuan kesejahteraan, dan perlindungan hak." },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col"
            >
              <h3 className="text-4xl sm:text-5xl font-black text-white mb-2 font-mono">
                {stat.num}
              </h3>
              <div className="w-6 h-[2px] bg-[#33A5D3] mb-3"></div>
              <span className="font-mono text-xs uppercase tracking-wider text-gray-200 font-bold mb-1">
                {stat.label}
              </span>
              <p className="text-xs text-gray-500 leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          TENTANG KABINET — split 2-column layout
      ════════════════════════════════════════════ */}
      <section id="tentang" className="relative z-10 py-24 px-6 sm:px-12 md:px-20 lg:px-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-[#33A5D3] font-bold mb-6"
            >
              Jargon Kebanggaan
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6.5xl font-black text-white leading-[0.95] tracking-tighter uppercase"
            >
              Satu Hati,<br/>
              Satu Gerak,<br/>
              <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #33A5D3" }}>TI JAYA.</span>
            </motion.h2>
            <div className="mt-8 h-px bg-white/10 w-24"></div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg md:text-xl leading-relaxed font-light"
            >
              Nama <strong className="text-white font-bold">INNOVARA</strong> berasal dari gabungan kata <em>Innova</em> yang berarti inovasi dan <em>Ra</em> yang berarti era atau zaman. Kami mendefinisikan kabinet ini bukan sebagai struktur hierarki yang kaku, melainkan ruang kolektif yang dinamis untuk bertukar ide secara terbuka.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-white/5">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-3 block">01 / INNOVA (Inovasi)</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Semangat untuk melahirkan terobosan, gagasan, serta metode baru yang solutif bagi seluruh kebutuhan pelayanan mahasiswa.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#33A5D3] font-bold mb-3 block">02 / RA (Era / Zaman)</span>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Menandakan dimulainya era atau zaman baru kepengurusan yang terbuka, adaptif, dan inklusif bagi seluruh mahasiswa Teknologi Informasi.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════
          VISI MISI — Clean & Structured Accordion
      ════════════════════════════════════════════ */}
      <section className="relative z-10 py-24 border-t border-white/[0.04] bg-[#020202]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32">
          
          {/* VISI */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#33A5D3] font-bold mb-4 block">Visi Kami</span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-none tracking-tighter">
                  Rumah Besar<br/>Kolaborasi.
                </h2>
              </div>
              <div className="lg:col-span-7">
                <blockquote className="pl-6 border-l-2 border-[#33A5D3]">
                  <p className="text-xl sm:text-2xl text-gray-300 font-light leading-relaxed italic">
                    "Mewujudkan HMPSTI sebagai Rumah Kolaborasi yang adaptif dan inklusif demi melahirkan Inovasi unggul untuk mengantar pencapaian Prestasi bersama."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>

          {/* MISI (Clean List style, no glowing blocks) */}
          <div className="border-t border-white/5 pt-16">
            <div className="mb-12">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/30 block mb-2">Pilar Gerak</span>
              <h3 className="text-3xl font-black text-white tracking-tight">Lima Misi Strategis</h3>
            </div>

            <div className="space-y-1">
              {[
                { 
                  n: "01", 
                  title: "Tata Kelola Profesional", 
                  desc: "Menciptakan birokrasi internal organisasi yang solid, akuntabel, dan berbasis indikator kinerja terukur.",
                  icon: Award
                },
                { 
                  n: "02", 
                  title: "Kolaborasi Sinergis", 
                  desc: "Membuka jejaring kemitraan strategis yang solid baik dengan internal kampus maupun mitra industri luar kampus.",
                  icon: Users
                },
                { 
                  n: "03", 
                  title: "Jembatan Aspirasi", 
                  desc: "Bertindak responsif, proaktif, dan taktis dalam advokasi pemenuhan hak-hak serta kesejahteraan mahasiswa.",
                  icon: Heart
                },
                { 
                  n: "04", 
                  title: "Ekosistem Prestasi", 
                  desc: "Menyediakan pembekalan intensif, kompetensi praktis, dan dukungan fasilitas bagi mahasiswa berprestasi.",
                  icon: Zap
                },
                { 
                  n: "05", 
                  title: "Inovasi Fungsional", 
                  desc: "Mengembangkan produk teknologi tepat guna untuk penyempurnaan layanan internal dan efisiensi birokrasi.",
                  icon: Compass
                },
              ].map((misi, idx) => (
                <div
                  key={misi.n}
                  className="group grid grid-cols-12 gap-4 items-baseline py-8 border-b border-white/5 hover:bg-white/[0.01] transition-colors duration-300 px-4 -mx-4 rounded-xl"
                >
                  {/* Number */}
                  <div className="col-span-2 sm:col-span-1">
                    <span className="font-mono text-sm font-bold text-gray-500 group-hover:text-white transition-colors">
                      {misi.n}
                    </span>
                  </div>

                  {/* Title & Icon */}
                  <div className="col-span-10 sm:col-span-4 md:col-span-3 flex items-center gap-3">
                    <misi.icon size={16} className="text-gray-500 group-hover:text-[#33A5D3] transition-colors" />
                    <h4 className="text-white font-black text-lg group-hover:text-white transition-colors">
                      {misi.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <div className="col-span-12 sm:col-span-7 md:col-span-8 sm:pl-6 mt-2 sm:mt-0">
                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                      {misi.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════
          CTA — Minimalist Banner
      ════════════════════════════════════════════ */}
      <section className="relative z-10 py-32 px-6 sm:px-12 md:px-20 lg:px-32 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#33A5D3] mb-6">Directory</span>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-none">
              Di Balik Layar Innovara.
            </h3>
            <p className="text-gray-400 text-sm sm:text-base max-w-md leading-relaxed mb-10">
              Temukan profil lengkap Badan Pengurus Harian (BPH) dan struktur pelaksana organisasi kabinet.
            </p>
            
            <Link 
              to="/struktur" 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-[#33A5D3] hover:text-white rounded-full font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300"
            >
              Struktur Organisasi
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

// ── Quick Menu (Mobile Only) ──
const QuickMenu = () => {
  const menus = [
    { name: "Struktur", icon: Users, path: "/struktur" },
    { name: "Divisi", icon: LayoutGrid, path: "/departemen" },
    { name: "Kalender", icon: Calendar, path: "/kalender" },
    { name: "Store", icon: ShoppingBag, path: "/merch" },
  ];

  return (
    <div className="md:hidden w-full px-6 -mt-6 relative z-20 mb-16">
      <div className="grid grid-cols-4 gap-2">
        {menus.map((item, idx) => (
          <Link 
            key={idx} 
            to={item.path}
            className="flex flex-col items-center gap-2 py-4 rounded-xl bg-white/[0.03] border border-white/[0.04] active:scale-95 transition-transform"
          >
            <item.icon size={20} className="text-gray-400" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};