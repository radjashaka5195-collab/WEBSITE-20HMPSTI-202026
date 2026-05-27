import { ArrowRight, ChevronDown, Users, LayoutGrid, Calendar, ShoppingBag } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

// === MAIN COMPONENT ===
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.96]);
  
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#33A5D3]/40 selection:text-white overflow-x-hidden">
      
      {/* ════════════════════════════════════════════
          HERO SECTION — Poster/Editorial Style
      ════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 overflow-hidden">
        
        {/* Ambient light — subtle, not the typical symmetric blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[40vw] bg-[#33A5D3]/8 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-15%] right-[-5%] w-[40vw] h-[40vw] bg-[#F59E0B]/6 blur-[100px] rounded-full pointer-events-none"></div>

        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
          
          {/* Eyebrow — simple, no ping animation */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-gray-500 mb-8 font-medium"
          >
            Himpunan Mahasiswa Program Studi Teknologi Informasi — Universitas Brawijaya
          </motion.p>

          {/* Main Title — editorial, not gradient */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="font-black tracking-tighter leading-none mb-6 text-center text-[12vw] sm:text-[7rem] md:text-[9rem] lg:text-[11rem]">
              <span className="text-white">INNO</span><span className="text-[#33A5D3]">VARA</span>
            </h1>
          </motion.div>

          {/* Tagline — conversational, not corporate */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-lg mx-auto leading-relaxed mb-10"
          >
            Kabinet yang percaya bahwa inovasi lahir dari keberanian berkolaborasi.
          </motion.p>

          {/* Subtle year marker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center gap-4 text-gray-600 text-xs"
          >
            <div className="w-8 h-px bg-gray-700"></div>
            <span className="font-medium tracking-widest">PERIODE 2026 / 2027</span>
            <div className="w-8 h-px bg-gray-700"></div>
          </motion.div>

        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1.5, duration: 1 }} 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-gray-600 font-medium">Scroll</span>
          <ChevronDown size={18} className="text-gray-600 animate-bounce" />
        </motion.div>
      </section>

      {/* Quick Menu — Mobile Only */}
      <QuickMenu />

      {/* ════════════════════════════════════════════
          TENTANG KABINET — Asymmetric Editorial
      ════════════════════════════════════════════ */}
      <section className="relative z-10 py-24 md:py-36 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Section intro */}
          <div className="max-w-2xl mb-20">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.3em] text-[#33A5D3] font-medium mb-6"
            >
              Filosofi Kabinet
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[0.95] tracking-tight mb-6"
            >
              Satu Hati,<br/>
              Satu Gerak,<br/>
              <span className="text-[#33A5D3]">TI Jaya.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-base md:text-lg leading-relaxed"
            >
              INNOVARA bukan sekadar nama. Ini adalah komitmen — gabungan dari kata <em className="text-white not-italic font-semibold">Innova</em> (inovasi) dan <em className="text-white not-italic font-semibold">Ra</em> (era baru). Sebuah era dimana setiap mahasiswa TI punya ruang untuk bersuara, berkarya, dan berprestasi.
            </motion.p>
          </div>

          {/* Kata kunci — Staggered, not symmetric */}
          <div className="grid md:grid-cols-12 gap-6 md:gap-4">
            
            {/* INNOVA block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-7 group"
            >
              <div className="relative p-8 md:p-10 rounded-2xl bg-[#0A0A0A] border border-white/[0.04] hover:border-[#33A5D3]/20 transition-colors duration-500 overflow-hidden">
                <div className="absolute top-6 right-8 text-[5rem] md:text-[7rem] font-black text-white/[0.015] leading-none select-none pointer-events-none">01</div>
                <span className="text-[#33A5D3] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Innova — Inovasi</span>
                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 leading-tight">
                  Menciptakan yang belum pernah ada.
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  Bukan sekadar mengikuti tren — tapi punya keberanian untuk memulai sesuatu yang baru, yang beda, yang berani keluar dari rutinitas lama.
                </p>
              </div>
            </motion.div>

            {/* RA block — offset */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="md:col-span-5 md:mt-12 group"
            >
              <div className="relative p-8 md:p-10 rounded-2xl bg-[#0A0A0A] border border-white/[0.04] hover:border-[#F59E0B]/20 transition-colors duration-500 overflow-hidden">
                <div className="absolute top-6 right-8 text-[5rem] md:text-[7rem] font-black text-white/[0.015] leading-none select-none pointer-events-none">02</div>
                <span className="text-[#F59E0B] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Ra — Era Baru</span>
                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 leading-tight">
                  Zaman baru dimulai dari sini.
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Era dimana aspirasi didengar, kolaborasi terbuka lebar, dan setiap mahasiswa punya peran yang berarti.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          VISI MISI — Clean & Direct
      ════════════════════════════════════════════ */}
      <section className="relative z-10 py-24 md:py-36 border-t border-white/[0.04] bg-[#030303]">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* VISI */}
          <div className="mb-24 md:mb-32">
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-xs uppercase tracking-[0.3em] text-[#F59E0B] font-medium mb-4 block">Visi Kami</span>
                  <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
                    Rumah<br/>Kolabo<span className="text-[#33A5D3]">rasi.</span>
                  </h2>
                </motion.div>
              </div>
              <div className="md:col-span-8 md:pt-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <blockquote className="relative pl-6 border-l-2 border-white/10">
                    <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed italic">
                      "Mewujudkan HMPSTI sebagai Rumah Kolaborasi yang menciptakan Inovasi untuk mewujudkan Prestasi."
                    </p>
                  </blockquote>
                  <p className="mt-6 text-gray-500 text-sm leading-relaxed max-w-xl pl-6">
                    Bukan hanya organisasi — HMPSTI adalah ruang bagi setiap mahasiswa TI untuk tumbuh, berproses, dan meraih pencapaian bersama.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* MISI */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-[#33A5D3] font-medium block">5 Misi Utama</span>
            </motion.div>

            <div className="space-y-1">
              {[
                { n: "01", title: "Tata Kelola Profesional", desc: "Organisasi berbasis kinerja (KPI) — setiap langkah strategis terukur dan berdampak nyata." },
                { n: "02", title: "Kolaborasi Sinergis", desc: "Membangun jaringan erat dengan organisasi internal, institusi, dan industri di luar kampus." },
                { n: "03", title: "Jembatan Aspirasi", desc: "Garda terdepan advokasi — memperjuangkan hak dan kesejahteraan mahasiswa secara responsif." },
                { n: "04", title: "Pengembangan Prestasi", desc: "Mengasah hard skill dan soft skill untuk mencetak prestasi di tingkat nasional hingga internasional." },
                { n: "05", title: "Inovasi Fungsional", desc: "Program kerja yang bukan hanya baru, tapi tepat sasaran dan benar-benar dibutuhkan mahasiswa." },
              ].map((misi, idx) => (
                <motion.div
                  key={misi.n}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="group grid grid-cols-12 gap-4 items-baseline py-6 border-b border-white/[0.04] hover:bg-white/[0.01] transition-colors px-2 -mx-2 rounded-lg cursor-default"
                >
                  <div className="col-span-2 sm:col-span-1">
                    <span className={`text-sm font-bold ${idx % 2 === 0 ? 'text-[#33A5D3]' : 'text-[#F59E0B]'}`}>
                      {misi.n}
                    </span>
                  </div>
                  <div className="col-span-10 sm:col-span-4 md:col-span-3">
                    <h4 className="text-white font-bold text-base md:text-lg leading-snug group-hover:text-[#33A5D3] transition-colors duration-300">
                      {misi.title}
                    </h4>
                  </div>
                  <div className="col-span-12 sm:col-span-7 md:col-span-8 sm:pl-4">
                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                      {misi.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CTA — Minimal, Intentional
      ════════════════════════════════════════════ */}
      <section className="relative z-10 py-24 md:py-32 px-6 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <p className="text-gray-500 text-sm md:text-base mb-3">
              Penasaran siapa saja yang ada di balik Innovara?
            </p>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-10 leading-tight">
              Kenalan dulu, yuk.
            </h3>
            
            <Link 
              to="/struktur" 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#050505] rounded-full font-bold text-sm uppercase tracking-wider hover:bg-[#33A5D3] hover:text-white transition-all duration-300"
            >
              Lihat Struktur Kabinet
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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