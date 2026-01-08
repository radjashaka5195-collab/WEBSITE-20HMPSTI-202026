import { Navbar } from "../components/Navbar";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom"; 
// Ikon tambahan untuk Footer & Halaman
import { ArrowRight, Sparkles, Terminal, Star as StarIcon, Instagram, Linkedin, ChevronDown } from "lucide-react"; 

// --- IKON CUSTOM (Sama kayak di Home) ---
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
);
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
);

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label?: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="group relative p-3 bg-white/5 rounded-full border border-white/10 hover:border-[#33A5D3]/50 transition-all duration-300 hover:bg-[#33A5D3]/10 hover:-translate-y-1 overflow-hidden cursor-pointer flex items-center justify-center" title={label}>
    <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#33A5D3] transition-colors relative z-10" />
  </a>
);

// --- DATA (TIDAK BERUBAH) ---
const bphInti = {
  ketua: { nama: "Radja Shaka", jabatan: "Ketua Himpunan", foto: "https://ui-avatars.com/api/?name=Radja+Shaka&background=0ea5e9&color=fff&size=256" },
  wakil: { nama: "Putri Salsabila", jabatan: "Wakil Ketua", foto: "https://ui-avatars.com/api/?name=Putri+Salsabila&background=0ea5e9&color=fff&size=256" },
  sekben: [
    { nama: "Vivi", jabatan: "Sekretaris I", foto: "https://ui-avatars.com/api/?name=Vivi&background=0ea5e9&color=fff&size=256" },
    { nama: "Radja Esa", jabatan: "Sekretaris II", foto: "https://ui-avatars.com/api/?name=Radja+Esa&background=0ea5e9&color=fff&size=256" },
    { nama: "Mutia Aura", jabatan: "Bendahara I", foto: "https://ui-avatars.com/api/?name=Mutia+Aura&background=0ea5e9&color=fff&size=256" },
    { nama: "Angel", jabatan: "Bendahara II", foto: "https://ui-avatars.com/api/?name=Angel&background=0ea5e9&color=fff&size=256" },
  ]
};

const dataKompas = {
  ketua: { nama: "Ghabriel Sagala", jabatan: "Ketua KOMPAS", foto: "https://ui-avatars.com/api/?name=Ghabriel+Sagala&background=f59e0b&color=fff&size=256" },
  anggota: [
    { nama: "Divo Farelly", jabatan: "Kompas PSDM" },
    { nama: "Bubur Ayam", jabatan: "Kompas Inotek" },
    { nama: "Daffa Ahmad", jabatan: "Kompas Medinfo" },
    { nama: "Alisya", jabatan: "Kompas Advokesma" },
    { nama: "Brillian Pratama", jabatan: "Kompas Hubeks" },
    { nama: "Bubur Sapi", jabatan: "Kompas Ekraf" },
    { nama: "Ghatan Naufal", jabatan: "Kompas Kora" },
  ]
};

const bphDepartments = [
  {
    id: "psdm", nama: "PSDM",
    ketua: { nama: "Nama Kadiv", jabatan: "Kepala Dept. PSDM" },
    wakil: [{ nama: "Nama Wakil 1", jabatan: "Wakil Dept. PSDM 1" }, { nama: "Nama Wakil 2", jabatan: "Wakil Dept. PSDM 2" }]
  },
  {
    id: "inotek", nama: "Inovasi & Teknologi",
    ketua: { nama: "Nama Kadiv", jabatan: "Kepala Dept. Inotek" },
    wakil: [{ nama: "Nama Wakil 1", jabatan: "Wakil Dept. Inotek 1" }, { nama: "Nama Wakil 2", jabatan: "Wakil Dept. Inotek 2" }]
  },
  {
    id: "medinfo", nama: "Media Informasi",
    ketua: { nama: "Nama Kadiv", jabatan: "Kepala Dept. Medinfo" },
    wakil: [{ nama: "Nama Wakil 1", jabatan: "Wakil Dept. Medinfo 1" }, { nama: "Nama Wakil 2", jabatan: "Wakil Dept. Medinfo 2" }]
  },
  {
    id: "advo", nama: "Advokesma",
    ketua: { nama: "Nama Kadiv", jabatan: "Kepala Dept. Advo" },
    wakil: [{ nama: "Nama Wakil 1", jabatan: "Wakil Dept. Advo 1" }, { nama: "Nama Wakil 2", jabatan: "Wakil Dept. Advo 2" }]
  },
  {
    id: "hubeks", nama: "Hubungan Eksternal",
    ketua: { nama: "Nama Kadiv", jabatan: "Kepala Dept. Hubeks" },
    wakil: [{ nama: "Nama Wakil 1", jabatan: "Wakil Dept. Hubeks 1" }, { nama: "Nama Wakil 2", jabatan: "Wakil Dept. Hubeks 2" }]
  },
  {
    id: "ekraf", nama: "Ekonomi Kreatif",
    ketua: { nama: "Nama Kadiv", jabatan: "Kepala Dept. Ekraf" },
    wakil: [{ nama: "Nama Wakil 1", jabatan: "Wakil Dept. Ekraf 1" }, { nama: "Nama Wakil 2", jabatan: "Wakil Dept. Ekraf 2" }]
  },
  {
    id: "mikat", nama: "Kreatifitas & Olahraga",
    ketua: { nama: "Nama Kadiv", jabatan: "Kepala Dept. Mikat" },
    wakil: [{ nama: "Nama Wakil 1", jabatan: "Wakil Dept. Mikat 1" }, { nama: "Nama Wakil 2", jabatan: "Wakil Dept. Mikat 2" }]
  },
];

// --- COMPONENT PENDUKUNG ---

const CardWrapper = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

const OrgCard = ({ nama, jabatan, foto, variant = "default", className }: any) => {
  const isKompas = variant === "kompas";
  
  // LIVERY CONFIG
  const glowColor = isKompas ? "rgba(245,158,11,0.6)" : "rgba(14,165,233,0.6)"; 
  const accentColor = isKompas ? "text-amber-500" : "text-sky-400";
  const borderColor = isKompas ? "border-amber-500/20 group-hover:border-amber-500/60" : "border-sky-500/20 group-hover:border-sky-500/60";
  const gradientBg = isKompas 
    ? "from-amber-500/5 via-amber-900/5 to-transparent" 
    : "from-sky-500/5 via-sky-900/5 to-transparent";

  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      className={cn(
        "group relative flex flex-col items-center justify-center p-6 w-64 rounded-[2rem] border backdrop-blur-xl transition-all duration-500",
        "bg-white/[0.02] hover:bg-white/[0.05] shadow-2xl shadow-black/50",
        borderColor,
        className
      )}
    >
      <div 
        className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
        style={{ background: `radial-gradient(circle at center, ${glowColor}, transparent 70%)` }}
      ></div>

      <div className={cn("absolute inset-0 rounded-[2rem] bg-gradient-to-b opacity-50 group-hover:opacity-100 transition-all duration-500", gradientBg)}></div>

      <div className={cn("relative w-28 h-28 mb-4 rounded-full p-[2px] bg-gradient-to-b shadow-lg", isKompas ? "from-amber-400 to-transparent" : "from-sky-400 to-transparent")}>
        <div className="w-full h-full rounded-full overflow-hidden bg-[#0A0A0A] border-2 border-black/50">
           <img src={foto || `https://ui-avatars.com/api/?name=${nama}&background=050505&color=fff`} alt={nama} className="w-full h-full object-cover filter brightness-90 group-hover:brightness-110 transition-all duration-500" />
        </div>
      </div>

      <div className="relative z-10 text-center">
        <h3 className="text-white font-bold text-lg leading-tight mb-1 group-hover:text-white transition-colors">{nama}</h3>
        <p className={cn("text-[10px] font-mono uppercase tracking-[0.2em] font-bold opacity-80 group-hover:opacity-100 transition-opacity", accentColor)}>{jabatan}</p>
      </div>
    </motion.div>
  );
};

const WakilCard = ({ nama, jabatan }: any) => (
  <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center gap-3 relative group cursor-pointer z-10">
    <div className="w-16 h-16 rounded-full border border-white/10 group-hover:border-sky-400 transition-all duration-300 overflow-hidden bg-black shadow-lg shadow-black/50">
      <img src={`https://ui-avatars.com/api/?name=${nama}&background=050505&color=fff`} alt={nama} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all" />
    </div>
    <div className="text-center">
        <p className="text-xs font-bold text-gray-400 group-hover:text-sky-300 transition-colors">{nama}</p>
        <p className="text-[9px] text-white/30 uppercase tracking-wider group-hover:text-white/60">{jabatan}</p>
    </div>
  </motion.div>
);

const LineVertical = ({ height = "h-12", variant = "default" }) => {
    const color = variant === "kompas" ? "from-amber-500/50" : "from-sky-500/50";
    return <div className={cn("w-[1px] mx-auto bg-gradient-to-b to-transparent", color, height)}></div>
};

// --- MAIN PAGE ---
export default function Struktur() {
  
  // Data Navigasi untuk Footer
  const footerLinks = [
    { name: "Beranda", path: "/" },
    { name: "Struktur", path: "/struktur" },
    { name: "Departemen", path: "/departemen" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-sky-500/30 overflow-hidden relative">
      <Navbar />

      {/* === BACKGROUND FX === */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-950/30 via-[#050505] to-amber-950/20 -z-20"></div>
      
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] brightness-100 contrast-150 mix-blend-overlay"></div>
         <div className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vw] bg-sky-600/15 blur-[180px] rounded-full mix-blend-screen animate-pulse-slow"></div>
         <div className="absolute bottom-[-20%] right-[-20%] w-[80vw] h-[80vw] bg-amber-600/15 blur-[180px] rounded-full mix-blend-screen animate-pulse-slow delay-1000"></div>
      </div>
      
      <div className="relative z-10 pt-36 pb-32 px-4 max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-24 relative">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-6 backdrop-blur-md">
                    HMPSTI Periode 2026
                </span>
                <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white mb-4 drop-shadow-2xl leading-none">
                    Struktur <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 from-30% via-white via-50% to-amber-500 to-70%">
                        Kabinet
                    </span>
                </h1>
                <p className="text-gray-400 text-lg max-w-xl mx-auto">
                    Susunan punggawa <span className="text-sky-400 font-bold">INNOVA</span><span className="text-amber-500 font-bold">RA</span> yang siap berkolaborasi.
                </p>
            </motion.div>
        </div>

        {/* 1. BPI SECTION */}
        <section className="relative mb-40">
            <div className="relative bg-white/[0.02] backdrop-blur-md border border-sky-500/10 rounded-[40px] p-8 md:p-20 overflow-visible shadow-[0_0_50px_-20px_rgba(14,165,233,0.1)]">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className="px-8 py-3 bg-[#0A0A0A] border border-sky-500/30 rounded-full shadow-[0_0_30px_-10px_rgba(14,165,233,0.3)] flex items-center gap-3">
                        <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></div>
                        <span className="text-sky-400 font-bold uppercase tracking-widest text-xs">Badan Pengurus Inti</span>
                    </div>
                </div>

                <div className="flex flex-col items-center mt-6">
                    <div className="flex flex-col items-center gap-0">
                        <CardWrapper>
                             <OrgCard {...bphInti.ketua} className="scale-110 border-sky-500/40 shadow-[0_0_60px_-20px_rgba(14,165,233,0.3)] z-20" />
                        </CardWrapper>
                        <LineVertical height="h-16" />
                        <CardWrapper delay={0.2}>
                             <OrgCard {...bphInti.wakil} className="z-10" />
                        </CardWrapper>
                    </div>

                    <LineVertical height="h-20" />
                    
                    <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-sky-500/30 to-transparent mb-12 relative">
                        <div className="absolute left-1/2 -top-3 w-[1px] h-3 bg-sky-500/30 -translate-x-1/2"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4">
                        {bphInti.sekben.map((item, idx) => (
                            <CardWrapper key={idx} delay={0.3 + (idx * 0.1)}>
                                <div className="flex flex-col items-center h-full">
                                    <div className="h-6 w-[1px] bg-gradient-to-b from-sky-500/30 to-transparent mb-[-10px] relative z-0"></div>
                                    <OrgCard {...item} className="w-full h-full" />
                                </div>
                            </CardWrapper>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* 2. KOMPAS SECTION */}
        <section className="relative mb-40">
             <div className="relative bg-gradient-to-b from-amber-950/20 to-transparent border border-amber-500/20 rounded-[40px] p-8 md:p-20 backdrop-blur-sm shadow-[0_0_50px_-20px_rgba(245,158,11,0.1)]">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 blur-[80px] rounded-full pointer-events-none"></div>
                 <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className="px-8 py-3 bg-[#0A0A0A] border border-amber-500/30 rounded-full shadow-[0_0_30px_-10px_rgba(245,158,11,0.3)] flex items-center gap-3">
                        <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                        <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">Komisi Pengawas</span>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-6 relative z-10">
                      <CardWrapper>
                        <OrgCard {...dataKompas.ketua} variant="kompas" className="scale-105 border-amber-500/30 shadow-[0_0_60px_-20px_rgba(245,158,11,0.2)]" />
                      </CardWrapper>
                      <LineVertical height="h-16" variant="kompas" />
                      <div className="flex flex-wrap justify-center gap-4 max-w-6xl">
                        {dataKompas.anggota.map((item, idx) => (
                            <CardWrapper key={idx} delay={0.2 + (idx * 0.05)}>
                                <div className="relative pt-6">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-6 border-l border-dashed border-amber-500/30"></div>
                                    <OrgCard {...item} variant="kompas" className="w-52 py-5 px-3 min-h-[160px]" />
                                </div>
                            </CardWrapper>
                        ))}
                      </div>
                </div>
             </div>
        </section>

        {/* 3. DEPARTEMEN GRID */}
        <section className="mb-40">
            <div className="flex items-center gap-6 mb-16">
                 <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
                 <h2 className="text-3xl font-black uppercase tracking-widest text-white drop-shadow-lg">Departemen</h2>
                 <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {bphDepartments.map((dept, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative bg-white/[0.02] border border-white/5 hover:border-sky-500/30 rounded-[30px] p-8 transition-all hover:bg-white/[0.04] overflow-hidden backdrop-blur-md"
                    >
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-sky-500/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative z-10">
                            <div className="text-center mb-8">
                                <h3 className="text-xl font-black text-white group-hover:text-sky-400 transition-colors uppercase tracking-tight">{dept.nama}</h3>
                                <div className="h-[2px] w-8 bg-sky-500/30 mx-auto mt-3 rounded-full group-hover:w-16 transition-all duration-500"></div>
                            </div>
                            <div className="flex flex-col items-center gap-6">
                                 <div className="relative w-full flex justify-center">
                                     <OrgCard nama={dept.ketua.nama} jabatan={dept.ketua.jabatan} className="w-full max-w-[220px] py-4 bg-transparent border-white/5 shadow-none hover:bg-white/[0.03]" />
                                     <div className="absolute left-1/2 top-full w-[1px] h-6 bg-white/10 -translate-x-1/2"></div>
                                     <div className="absolute top-[calc(100%+24px)] left-[15%] right-[15%] h-[1px] bg-white/10"></div>
                                     <div className="absolute top-[calc(100%+24px)] left-[15%] w-[1px] h-4 bg-white/10"></div>
                                     <div className="absolute top-[calc(100%+24px)] right-[15%] w-[1px] h-4 bg-white/10"></div>
                                 </div>
                                 <div className="flex justify-between w-full px-4 pt-6">
                                     {dept.wakil.map((w, i) => (
                                         <WakilCard key={i} nama={w.nama} jabatan={w.jabatan} />
                                     ))}
                                 </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* === NEXT PAGE NAVIGATION === */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-24"
        >
            <Link to="/departemen" className="group relative w-full max-w-4xl">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0A0A] p-10 md:p-14 text-center transition-all duration-500 hover:border-sky-500/50 hover:shadow-[0_0_80px_-20px_rgba(14,165,233,0.3)]">
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-amber-500 to-sky-600 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-[length:200%_auto] animate-gradient-x"></div>
                    
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute top-10 right-20 w-2 h-2 bg-white rounded-full animate-ping"></div>
                        <div className="absolute bottom-10 left-20 w-1 h-1 bg-white rounded-full animate-ping delay-300"></div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center gap-4">
                        <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-[0.3em] font-bold">
                            <Sparkles className="w-4 h-4" />
                            <span>Next Chapter</span>
                            <Sparkles className="w-4 h-4" />
                        </div>
                        
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter group-hover:scale-105 transition-transform duration-500">
                            Jelajahi <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-500">Departemen</span>
                        </h2>
                        
                        <p className="text-gray-400 max-w-lg mx-auto mb-6 group-hover:text-gray-200 transition-colors">
                            Kenali lebih dalam program kerja dan fungsi setiap departemen di kabinet Innovara.
                        </p>

                        <div className="w-16 h-16 rounded-full bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-black group-hover:rotate-[-45deg] transition-all duration-500 shadow-lg">
                             <ArrowRight className="w-8 h-8" strokeWidth={2.5} />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>

      </div>
      
      {/* === FOOTER YANG SUDAH DIPERBARUI (SAMA DENGAN HOME) === */}
      <section className="relative py-20 bg-[#050505] border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center relative z-10">
            {/* LOGO FOOTER */}
            <motion.div whileHover={{ scale: 1.05 }} className="mb-10 cursor-default">
                <span className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#33A5D3] to-[#F59E0B] tracking-tighter select-none drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity">
                    INNOVARA
                </span>
            </motion.div>

            {/* SOSMED ICONS */}
            <div className="flex gap-6 mb-12">
                <SocialLink href="https://www.instagram.com/hmpsti.vokasiub/" icon={Instagram} label="Instagram" />
                <SocialLink href="https://www.tiktok.com/@hmpsti.vokasiub" icon={TikTokIcon} label="TikTok" />
                <SocialLink href="https://www.linkedin.com/company/hmpsti-vokasi-ub/" icon={Linkedin} label="LinkedIn" />
                <SocialLink href="#" icon={WhatsAppIcon} label="Contact Person" />
            </div>

            {/* NAVIGASI FOOTER */}
            <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm font-bold uppercase tracking-widest text-gray-500">
                {footerLinks.map((link) => (
                    <Link key={link.name} to={link.path} className="hover:text-[#33A5D3] transition-colors relative group">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#F59E0B] transition-all group-hover:w-full"></span>
                    </Link>
                ))}
            </div>

            {/* COPYRIGHT */}
            <div className="text-center border-t border-white/5 pt-8 w-full max-w-lg">
                <p className="text-gray-600 font-mono text-[10px] uppercase tracking-widest mb-3">
                    © 2026 HMPSTI UB • <span className="text-[#33A5D3]">Kabinet Innovara</span>
                </p>
                <p className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-[#33A5D3] to-[#F59E0B] tracking-widest uppercase">
                    Satu Hati, Satu Gerak, TI Jaya!
                </p>
            </div>
        </div>
      </section>
    </div>
  );
}