import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ArrowUpRight, X, CheckCircle2, User, Instagram, Quote } from "lucide-react"; 

// --- DATA DEPARTEMEN ---
const departments = [
  {
    id: "psdm",
    nama: "PSDM",
    panjang: "Pengembangan Sumber Daya Mahasiswa",
    desc: "Mewujudkan sumber daya mahasiswa Teknologi Informasi yang aktif, kompeten, berintegritas, adaptif, dan berjiwa kepemimpinan melalui proses kaderisasi dan pengembangan organisasi yang berkelanjutan.",
    theme: "sky",
    logo: "/assets/logos/PSDM.png",
    motto: "Membentuk Kader, Membangun Karakter.",
    focus: ["Leadership Development Camp", "TI Career Simulation", "Rangkaian Samba TI", "Maba to Maba (M2M)"],
    leaders: [
      { nama: "Adam Ahmad Bimantoro", jabatan: "Ketua Departemen", foto: "", ig: "" },
      { nama: "Muhammad Hafizh Fajariyanto", jabatan: "Wakil Ketua 1", foto: "/assets/leaders/Hafizh_Wakil Ketua Departemen 1_PSDM .jpg", ig: "hapiz24_" },
      { nama: "Vallerina Gracela Purba", jabatan: "Wakil Ketua 2", foto: "/assets/leaders/Vallerina_Wakil Ketua Departemen 2_PSDM.jpg", ig: "vallerinacelaa" },
    ]
  },
  {
    id: "inotek",
    nama: "INOTEK",
    panjang: "Inovasi & Teknologi",
    desc: "Pusat pengembangan kompetensi teknis yang praktis dan berdampak nyata. Kami berperan sebagai 'Tech-Hub' yang menjembatani mahasiswa dengan tren industri IT terkini melalui riset, kompetisi, dan portofolio karya.",
    theme: "amber",
    logo: "/assets/logos/Inotek.png",
    motto: "Explore, Compete, Create.",
    focus: ["Ignite Academy", "InKnowledge", "Roots X InnoFair"],
    leaders: [
      { nama: "Muhammad Rohan Rifqi", jabatan: "Ketua Departemen", foto: "/assets/leaders/Muhammad Rohan Rifqi_Ketua Departemen_INOTEK.jpeg", ig: "rclhan" },
      { nama: "Muhammad Mu'taz Syafiq", jabatan: "Wakil Ketua 1", foto: "/assets/leaders/Muhammad Mu_taz Syafiq_Wakil Ketua Departemen 1_INOTEK.jpg", ig: "mutazsyafiq_" },
      { nama: "Seila Salsabiela", jabatan: "Wakil Ketua 2", foto: "/assets/leaders/Seila Salsabiela_Wakil Departemen_Inotek.jpg", ig: "selai_____x" },
    ]
  },
  {
    id: "medinfo",
    nama: "MEDINFO",
    panjang: "Media & Informasi",
    desc: "Gardu kreatif yang mengoptimalkan sistem komunikasi dan informasi berbasis teknologi. Kami fokus memperkuat identitas visual, menjembatani arus informasi, dan meningkatkan citra digital HMPSTI secara profesional.",
    theme: "sky",
    logo: "/assets/logos/Medinfo.png",
    motto: "Creativity Beyond Limit.",
    focus: ["Company Profile & Branding", "Workshop Design & Video", "Medinfo Class"],
    leaders: [
      { nama: "Muhammad Raihan Hidayah", jabatan: "Ketua Departemen", foto: "/assets/leaders/Han_Kepala Departemen Medinfo.JPG", ig: "raihanhidayah06" },
      { nama: "Tiara Nurfadilah", jabatan: "Wakil Ketua 1", foto: "/assets/leaders/Tiara_Wakil Departemen 1_MEDINFO.jpg", ig: "tiaraa_nfh" },
      { nama: "Latisha Syifa Pratiwi", jabatan: "Wakil Ketua 2", foto: "/assets/leaders/Latisha_Wakil Departemen 2_MEDINFO.jpg", ig: "latisha.prtiwi" },
    ]
  },
  {
    id: "advo",
    nama: "ADVOKESMA",
    panjang: "Advokasi & Kesejahteraan",
    desc: "Pusat advokasi dan pengabdian yang progresif. Kami hadir sebagai jembatan strategis untuk memperjuangkan hak mahasiswa, menyalurkan aspirasi, serta memberikan solusi nyata bagi kesejahteraan mahasiswa dan masyarakat.",
    theme: "amber",
    logo: "/assets/logos/Advokesma.png",
    motto: "Melayani dengan Hati.",
    focus: ["TI Speaks (Layanan Advokasi)", "HaloADVO (Pusat Aspirasi)", "IT Charity (Pengabdian)", "SEAVO (Social Event)", "SE-TI"],
    leaders: [
      { nama: "Kayla Alodia Calista", jabatan: "Ketua Departemen", foto: "/assets/leaders/Kayla Alodia Calista_Kepala DepartmentAdvokesma.jpg", ig: "kaylalodia" },
      { nama: "Dean Adiba Anugrah", jabatan: "Wakil Ketua 1", foto: "/assets/leaders/Dean Adiba Anugrah_Wakil Kepala Departemen Bidang Kesma_ADVOKESMA.jpg", ig: "deanadiba._" },
      { nama: "Nadia Salwa Oktavia", jabatan: "Wakil Ketua 2", foto: "/assets/leaders/Nadia Salwa Oktavia_Wakil Kepala Departemen Bidang Advokasi_ADVOKESMA.jpg", ig: "naadiiiaaa.a" },
    ]
  },
  {
    id: "hubeks",
    nama: "HUBEKS",
    panjang: "Hubungan Eksternal",
    desc: "Inisiator kolaborasi yang adaptif dan profesional. Kami menjadi garda terdepan dalam membangun sinergi strategis dengan mitra eksternal, alumni, dan industri untuk membuka peluang karier dan networking bagi mahasiswa.",
    theme: "sky",
    logo: "/assets/logos/Hubeks.png",
    motto: "The Synergy Hub.",
    focus: ["Vistech 2.0 (Visit Technology)", "Tech Career Radar", "Ramadhan Charity Connect"],
    leaders: [
      { nama: "Nathanael Eleazar Handata", jabatan: "Ketua Departemen", foto: "/assets/leaders/nathanael_ketua departemen_hubeks.jpg", ig: "nthanaellll" },
      { nama: "Evan Swardana Adinata", jabatan: "Wakil Ketua", foto: "/assets/leaders/Evan_Wakil Kepala Departemen_HUBEKS.jpg", ig: "epanlagi_" },
    ]
  },
  {
    id: "ekraf",
    nama: "EKRAF",
    panjang: "Ekonomi Kreatif",
    desc: "Inkubator wirausaha bagi mahasiswa TI. Kami membekali mahasiswa dengan kemampuan mengemas skill IT menjadi produk bernilai ekonomi, sekaligus menjadi motor penggerak kemandirian finansial organisasi.",
    theme: "amber",
    logo: "/assets/logos/Ekraf.png",
    motto: "Business with Passion.",
    focus: ["Jelajah Teknologi", "TI Merch", "Inspired Talk", "Creatrip"],
    leaders: [
      { nama: "Muktabar Zaki Pramana Wlbisono", jabatan: "Ketua Departemen", foto: "/assets/leaders/Muktabar Zaki_KadepEkraf_HMPSTI.jpg", ig: "muktabarzaki" },
      { nama: "Dinda Eka Cantika", jabatan: "Wakil Ketua", foto: "/assets/leaders/Dinda_WakilDepartemen_EKRAF.jpg", ig: "dindaecaa" },
    ]
  },
  {
    id: "mikat",
    nama: "KORA",
    panjang: "Kreatifitas & Olahraga",
    desc: "Wadah pengembangan potensi non-akademik yang berbasis kolaborasi dan inovasi. Kami memfasilitasi penyaluran minat bakat di bidang seni dan olahraga untuk mendorong prestasi dan keseimbangan hidup mahasiswa.",
    theme: "sky",
    logo: "/assets/logos/Kora.png",
    motto: "Sportive Spirit, Creative Mind.",
    focus: ["Techno Competition", "Techno Cup (E-Sport)", "IT Fun Game", "Hall Of Fame & Akustik"],
    leaders: [
      { nama: "Wiratama Satrio Herlambang", jabatan: "Ketua Departemen", foto: "/assets/leaders/Wiratama Satrio H_Ketua Departemen_Kora", ig: "wirattamaa_" },
      { nama: "Raihan Ammar Ahsani", jabatan: "Wakil Ketua 1", foto: "/assets/leaders/Raihan Ammar Ahsani_Wakil Departemen_KORA.jpg", ig: "amar.rhn" },
      { nama: "Damar Putra Hartono", jabatan: "Wakil Ketua 2", foto: "", ig: "" },
    ]
  },
];

// --- HELPER: Theme Colors ---
const getThemeColors = (theme: string) => {
  const isAmber = theme === "amber";
  return {
    isAmber,
    accent: isAmber ? "text-amber-500" : "text-sky-500",
    accentBg: isAmber ? "bg-amber-500" : "bg-sky-500",
    accentBgSoft: isAmber ? "bg-amber-500/10" : "bg-sky-500/10",
    accentBorder: isAmber ? "border-amber-500/30" : "border-sky-500/30",
    accentBorderHover: isAmber ? "hover:border-amber-500/50" : "hover:border-sky-500/50",
    accentGlow: isAmber ? "rgba(245,158,11,0.4)" : "rgba(14,165,233,0.4)",
    accentShadow: isAmber 
      ? "hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]" 
      : "hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.3)]",
    gradientFrom: isAmber ? "from-amber-950/40" : "from-sky-950/40",
  };
};

// --- COMPONENT: Dept Card (with leader preview avatars) ---
const DeptCard = ({ data, index, onClick }: { data: any, index: number, onClick: () => void }) => {
  const tc = getThemeColors(data.theme);
  const leadersWithPhoto = data.leaders.filter((l: any) => l.foto);

  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        "group relative h-[420px] w-full rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer",
        tc.accentBorderHover, tc.accentShadow
      )}
    >
      {/* Background glow */}
      <div 
        className="absolute -right-20 -top-20 w-64 h-64 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: tc.accentGlow }}
      ></div>

      {/* Top content */}
      <div className="relative z-10">
        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center p-2.5 bg-white/5 border border-white/10 mb-5 transition-all duration-500 group-hover:scale-110 group-hover:bg-black/50 backdrop-blur-sm", tc.accent)}>
            <img 
                src={data.logo} 
                alt={`${data.nama} logo`} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain drop-shadow-lg" 
            />
        </div>
        
        <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-1">{data.nama}</h3>
        <p className={cn("text-[10px] font-mono font-bold tracking-widest uppercase mb-3 opacity-70 group-hover:opacity-100 transition-opacity", tc.accent)}>
            {data.panjang}
        </p>
        <p className="text-gray-400 text-sm leading-relaxed max-w-[90%] line-clamp-2 group-hover:text-gray-200 transition-colors">
            {data.desc}
        </p>
      </div>

      {/* Bottom: Leader preview avatars + arrow */}
      <div className="relative z-10 flex items-center justify-between mt-4">
        {/* Avatar Stack */}
        <div className="flex items-center">
          <div className="flex -space-x-3">
            {data.leaders.slice(0, 3).map((leader: any, idx: number) => (
              <div 
                key={idx} 
                className={cn(
                  "w-10 h-10 rounded-full border-2 border-[#0A0A0A] overflow-hidden bg-white/5 transition-transform duration-300 group-hover:translate-x-0",
                  idx === 1 && "group-hover:-translate-x-0.5",
                  idx === 2 && "group-hover:-translate-x-1",
                )}
                style={{ zIndex: 10 - idx }}
              >
                {leader.foto ? (
                  <img 
                    src={leader.foto} 
                    alt={leader.nama}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                ) : null}
                <div className={cn("w-full h-full flex items-center justify-center text-white/30 bg-white/5", leader.foto ? "hidden" : "")}>
                  <User size={16} />
                </div>
              </div>
            ))}
          </div>
          <span className="ml-3 text-[10px] font-mono text-gray-500 uppercase tracking-wider group-hover:text-gray-300 transition-colors">
            {data.leaders.length} Leaders
          </span>
        </div>

        <div className="text-white/20 transition-all duration-500 group-hover:text-white group-hover:rotate-[-45deg] group-hover:scale-125">
           <ArrowUpRight size={28} />
        </div>
      </div>
    </motion.div>
  );
};

// --- COMPONENT: Big Leader Card (for modal) ---
const BigLeaderCard = ({ leader, theme, index }: { leader: any, theme: string, index: number }) => {
  const tc = getThemeColors(theme);
  const isKetua = leader.jabatan.toLowerCase().includes("ketua departemen") || leader.jabatan.toLowerCase().includes("kepala departemen");

  const cardContent = (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.15 + index * 0.1 }}
      className={cn(
        "group relative flex flex-col items-center text-center p-6 rounded-3xl border transition-all duration-500",
        "bg-white/[0.02] border-white/5",
        tc.accentBorderHover,
        tc.accentShadow,
        isKetua && tc.accentBorder,
        isKetua && "bg-white/[0.04]",
      )}
    >
      {/* Photo */}
      <div className={cn(
        "relative mb-5 rounded-2xl overflow-hidden border-2 transition-all duration-500",
        isKetua ? "w-28 h-28 sm:w-32 sm:h-32" : "w-24 h-24 sm:w-28 sm:h-28",
        "border-white/10 group-hover:border-white/30",
        tc.isAmber 
          ? "group-hover:shadow-[0_0_25px_-5px_rgba(245,158,11,0.4)]" 
          : "group-hover:shadow-[0_0_25px_-5px_rgba(14,165,233,0.4)]",
      )}>
        {leader.foto ? (
          <img 
            src={leader.foto} 
            alt={leader.nama}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
            }}
          />
        ) : null}
        <div className={cn(
          "w-full h-full flex items-center justify-center bg-gradient-to-br from-white/5 to-white/[0.02]",
          leader.foto ? "hidden" : ""
        )}>
          <User size={40} className="text-white/15" />
        </div>

        {/* Ketua badge overlay */}
        {isKetua && (
          <div className={cn("absolute bottom-0 left-0 right-0 py-1 text-center text-[9px] font-black uppercase tracking-widest", tc.accentBg, "text-black")}>
            Ketua
          </div>
        )}
      </div>

      {/* Name & Role */}
      <h4 className={cn(
        "font-bold text-white leading-tight mb-1 transition-colors",
        isKetua ? "text-lg" : "text-base",
        tc.isAmber ? "group-hover:text-amber-400" : "group-hover:text-sky-400"
      )}>
        {leader.nama}
      </h4>
      <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-3">
        {leader.jabatan}
      </p>

      {/* Instagram link */}
      {leader.ig && (
        <div className={cn(
          "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold transition-all duration-300",
          "bg-white/5 border border-white/5",
          tc.isAmber 
            ? "text-amber-400/70 group-hover:bg-amber-500/10 group-hover:border-amber-500/20 group-hover:text-amber-400" 
            : "text-sky-400/70 group-hover:bg-sky-500/10 group-hover:border-sky-500/20 group-hover:text-sky-400"
        )}>
          <Instagram size={12} />
          <span>@{leader.ig.replace('@', '')}</span>
        </div>
      )}
    </motion.div>
  );

  // Wrap with link if IG exists
  if (leader.ig) {
    return (
      <a 
        href={`https://instagram.com/${leader.ig.replace('@', '')}`} 
        target="_blank" 
        rel="noreferrer"
        className="block"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
};

// --- MAIN PAGE ---
export default function Departemen() {
  const [selectedDept, setSelectedDept] = useState<any>(null);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-sky-500/30 overflow-x-hidden">
      
      {/* BACKGROUND FX */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 opacity-[0.04] brightness-100 contrast-150 mix-blend-overlay" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%270 0 256 256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.65%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27/%3E%3C/svg%3E")'}}></div>
         <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-sky-600/10 blur-[150px] rounded-full mix-blend-screen animate-pulse-slow"></div>
         <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-amber-600/10 blur-[150px] rounded-full mix-blend-screen animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
        
        {/* HERO TITLE */}
        <div className="text-center mb-20 md:mb-32">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-[1px] w-8 md:w-12 bg-sky-500/50"></div>
                    <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-sky-400 font-bold">Our Divisions</span>
                    <div className="h-[1px] w-8 md:w-12 bg-amber-500/50"></div>
                </div>

                <h1 className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none text-white drop-shadow-2xl">
                    Depar<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-white to-amber-500">temen</span>
                </h1>
                
                <p className="mt-6 text-gray-400 text-sm md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
                    Kenali lebih dekat bidang gerak dan fokus setiap Departemen <span className="text-white font-bold inline-block">HMPSTI UB</span>.
                </p>
            </motion.div>
        </div>

        {/* DEPARTMENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {departments.map((dept, idx) => (
                <DeptCard key={dept.id} data={dept} index={idx} onClick={() => setSelectedDept(dept)} />
            ))}
        </div>
      </div>

      {/* === MODAL / POPUP (REDESIGNED - Leader Focused) === */}
      <AnimatePresence>
        {selectedDept && (() => {
          const tc = getThemeColors(selectedDept.theme);
          return (
          <div className="fixed inset-0 z-[200] flex items-start sm:items-center justify-center px-4 py-6 sm:py-8 overflow-y-auto">
            
            {/* Backdrop Blur */}
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                onClick={() => setSelectedDept(null)}
                className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Content Container - Single Column, Scrollable */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="relative w-full max-w-3xl bg-[#0A0A0A] border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl my-auto"
            >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedDept(null)} 
                  className="absolute top-5 right-5 z-50 p-2 bg-black/60 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors border border-white/10 group"
                >
                    <X size={18} className="text-white group-hover:rotate-90 transition-transform" />
                </button>

                {/* ===== HEADER SECTION ===== */}
                <div className={cn("relative p-8 sm:p-10 pb-8 overflow-hidden", `bg-gradient-to-br ${tc.gradientFrom} to-[#0A0A0A]`)}>
                  {/* Subtle glow */}
                  <div 
                    className="absolute -top-20 -right-20 w-60 h-60 blur-[80px] rounded-full opacity-30 pointer-events-none" 
                    style={{ background: tc.accentGlow }}
                  ></div>

                  <div className="relative z-10 flex items-start gap-5">
                    {/* Logo */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center p-3 bg-white/5 border border-white/10 backdrop-blur-md shrink-0">
                      <img 
                        src={selectedDept.logo} 
                        alt={selectedDept.nama} 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain" 
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter leading-none text-white mb-1">
                        {selectedDept.nama}
                      </h2>
                      <p className={cn("text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase mb-3", tc.accent)}>
                        {selectedDept.panjang}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">
                        {selectedDept.desc}
                      </p>
                    </div>
                  </div>

                  {/* Motto */}
                  <div className="relative z-10 mt-6 flex items-center gap-3">
                    <Quote size={14} className={cn("shrink-0 rotate-180", tc.accent)} />
                    <span className={cn("text-xs font-bold italic tracking-wide", tc.accent)}>
                      {selectedDept.motto}
                    </span>
                  </div>
                </div>

                {/* ===== LEADERS SECTION (THE STAR!) ===== */}
                <div className="p-8 sm:p-10 pt-6">
                  {/* Section Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className={cn("w-1 h-6 rounded-full", tc.accentBg)}></span>
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/60">
                      Board of Leaders
                    </h3>
                    <div className="flex-1 h-px bg-white/5"></div>
                  </div>

                  {/* Leaders Grid - Responsive */}
                  <div className={cn(
                    "grid gap-4",
                    selectedDept.leaders.length === 2 
                      ? "grid-cols-1 sm:grid-cols-2" 
                      : "grid-cols-1 sm:grid-cols-3",
                  )}>
                    {selectedDept.leaders?.map((leader: any, idx: number) => (
                      <BigLeaderCard key={idx} leader={leader} theme={selectedDept.theme} index={idx} />
                    ))}
                  </div>
                </div>

                {/* ===== FOCUS & PROGRAMS ===== */}
                <div className="px-8 sm:px-10 pb-8 sm:pb-10">
                  {/* Section Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className={cn("w-1 h-6 rounded-full", tc.accentBg)}></span>
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/60">
                      Focus & Program
                    </h3>
                    <div className="flex-1 h-px bg-white/5"></div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedDept.focus.map((item: string, idx: number) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + idx * 0.05 }}
                        className={cn(
                          "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-300",
                          "bg-white/[0.02] border-white/5 hover:bg-white/5 hover:border-white/10",
                        )}
                      >
                        <CheckCircle2 size={14} className={cn(tc.accent, "shrink-0")} />
                        <span className="text-sm font-medium text-gray-300">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

            </motion.div>
          </div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
}