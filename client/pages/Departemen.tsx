import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ArrowUpRight, X, CheckCircle2, User } from "lucide-react"; 

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
      { nama: "Tiara Nurfadilah", jabatan: "Wakil Ketua 1", foto: "/assets/leaders/Tiara_Wakil Departemen 1_MEDINFO.png", ig: "tiaraa_nfh" },
      { nama: "Latisha Syifa Pratiwi", jabatan: "Wakil Ketua 2", foto: "/assets/leaders/Latisha_Wakil Departemen 2_MEDINFO.png", ig: "latisha.prtiwi" },
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
      { nama: "Nathanael Eleazar Handata", jabatan: "Ketua Departemen", foto: "/assets/leaders/nathanael_ketua departemen_hubeks.png", ig: "nthanaellll" },
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
      { nama: "Dinda Eka Cantika", jabatan: "Wakil Ketua", foto: "/assets/leaders/Dinda_WakilDepartemen_EKRAF.png", ig: "dindaecaa" },
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

// --- COMPONENT: Dept Card ---
const DeptCard = ({ data, index, onClick }: { data: any, index: number, onClick: () => void }) => {
  const isAmber = data.theme === "amber";
  const mainColor = isAmber ? "text-amber-500" : "text-sky-500";
  const borderHover = isAmber ? "group-hover:border-amber-500/50" : "group-hover:border-sky-500/50";
  const glowColor = isAmber ? "rgba(245,158,11,0.4)" : "rgba(14,165,233,0.4)";

  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative h-[380px] w-full rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer",
        borderHover
      )}
    >
      <div 
        className="absolute -right-20 -top-20 w-64 h-64 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: glowColor }}
      ></div>

      <div className="relative z-10">
        <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center p-3 bg-white/5 border border-white/10 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-black/50 backdrop-blur-sm", mainColor)}>
            <img 
                src={data.logo} 
                alt={`${data.nama} logo`} 
                className="w-full h-full object-contain drop-shadow-lg" 
            />
        </div>
        
        <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">{data.nama}</h3>
        <p className={cn("text-[10px] font-mono font-bold tracking-widest uppercase mb-4 opacity-70 group-hover:opacity-100 transition-opacity", mainColor)}>
            {data.panjang}
        </p>
        <p className="text-gray-400 text-sm leading-relaxed max-w-[90%] line-clamp-3 group-hover:text-gray-200 transition-colors">
            {data.desc}
        </p>
      </div>

      <div className={cn("absolute bottom-8 right-8 text-white/20 transition-all duration-500 group-hover:text-white group-hover:rotate-[-45deg] group-hover:scale-125")}>
         <ArrowUpRight size={32} />
      </div>
    </motion.div>
  );
};

// --- COMPONENT: Leader Card (With Photo & Clickable IG) ---
const LeaderCard = ({ leader, theme }: { leader: any, theme: string }) => {
    const isAmber = theme === "amber";
    const accentColor = isAmber ? "bg-amber-500" : "bg-sky-500";
    const textColor = isAmber ? "group-hover:text-amber-400" : "group-hover:text-sky-400";
    
    // buat nampung isian fotonya aja biar rapi
    const ImageContent = () => (
        <div className={cn(
            "w-14 h-14 rounded-xl overflow-hidden border-2 border-white/10 transition-all duration-500",
            leader.ig ? "hover:border-white/50 cursor-pointer" : "",
            isAmber ? "group-hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]" : "group-hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]"
        )}>
            {leader.foto ? (
                <img 
                    src={leader.foto} 
                    alt={leader.nama} 
                    className="w-full h-full object-cover object-top transition-all duration-500 hover:scale-110"
                    onError={(e) => {
                        // kalo file ga nemu, balikin ke icon user
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                />
            ) : null}
            <div className={cn("w-full h-full bg-black/50 flex items-center justify-center text-white/20", leader.foto ? "hidden" : "")}>
                <User size={24} />
            </div>
        </div>
    );

    return (
        <div className="group relative flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300">
            {/* bagian foto yang bisa di-klik */}
            <div className="relative shrink-0 z-10">
                {leader.ig ? (
                    <a href={`https://instagram.com/${leader.ig.replace('@', '')}`} target="_blank" rel="noreferrer" title={`Instagram @${leader.ig.replace('@', '')}`}>
                        <ImageContent />
                    </a>
                ) : (
                    <ImageContent />
                )}
                
                {/* titik/badge warna sesuai tema departemen */}
                <div className={cn("absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-[#0A0A0A] pointer-events-none", accentColor)}></div>
            </div>
            
            <div className="flex-1">
                <p className={cn("text-white font-bold text-sm md:text-base leading-tight transition-colors", textColor)}>
                    {leader.nama}
                </p>
                <div className="flex flex-col gap-0.5 mt-1">
                    <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-gray-400">
                        {leader.jabatan}
                    </p>
                    {leader.ig && (
                        <span className="text-[10px] text-gray-500 hover:text-white transition-colors">
                            <a href={`https://instagram.com/${leader.ig.replace('@', '')}`} target="_blank" rel="noreferrer">
                                @{leader.ig.replace('@', '')}
                            </a>
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}

// --- MAIN PAGE ---
export default function Departemen() {
  const [selectedDept, setSelectedDept] = useState<any>(null);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-sky-500/30 overflow-x-hidden">
      
      {/* BACKGROUND FX */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] brightness-100 contrast-150 mix-blend-overlay"></div>
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

      {/* === MODAL / POPUP === */}
      <AnimatePresence>
        {selectedDept && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-8 overflow-y-auto">
            
            {/* Backdrop Blur */}
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                onClick={() => setSelectedDept(null)}
                className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Content Container */}
            <motion.div 
                layoutId={`card-${selectedDept.id}`}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-6xl bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px] max-h-[90vh]"
            >
                {/* Close Button */}
                <button onClick={() => setSelectedDept(null)} className="absolute top-6 right-6 z-50 p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors border border-white/10 group">
                    <X size={20} className="text-white group-hover:rotate-90 transition-transform" />
                </button>

                {/* Left Side: Info Utama & Leaders */}
                <div className={cn("p-8 md:p-12 w-full md:w-5/12 flex flex-col justify-start relative overflow-hidden overflow-y-auto scrollbar-hide", selectedDept.theme === "amber" ? "bg-gradient-to-br from-amber-950/40 to-black" : "bg-gradient-to-br from-sky-950/40 to-black")}>
                      
                      {/* Logo Besar */}
                      <div className="relative z-10 mb-8">
                        <div className={cn("w-20 h-20 rounded-3xl flex items-center justify-center p-3 bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl")}>
                            <img 
                                src={selectedDept.logo} 
                                alt={selectedDept.nama} 
                                className="w-full h-full object-contain" 
                            />
                        </div>
                      </div>
                      
                      <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4 text-white">{selectedDept.nama}</h2>
                        
                        <p className="text-gray-300 text-sm leading-relaxed mb-8 border-l-2 border-white/10 pl-4">
                            {selectedDept.desc}
                        </p>

                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm mb-10">
                            <span className="text-xs font-bold uppercase tracking-widest text-white">"{selectedDept.motto}"</span>
                        </div>
                        
                        {/* LEADERS SECTION (With Photo) */}
                        <div className="mt-2">
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-5 flex items-center gap-2">
                                <span className="w-4 h-[1px] bg-white/20"></span>
                                Board of Leaders
                            </h3>
                            <div className="flex flex-col gap-3">
                                {selectedDept.leaders?.map((leader: any, idx: number) => (
                                    <LeaderCard key={idx} leader={leader} theme={selectedDept.theme} />
                                ))}
                            </div>
                        </div>

                      </div>
                </div>

                {/* Right Side: Focus Grid */}
                <div className="w-full md:w-7/12 bg-black/40 p-8 md:p-12 flex flex-col justify-center overflow-y-auto relative">
                      {/* Grid Background */}
                      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02]"></div>

                      <div className="relative z-10 mb-8">
                          <h3 className="text-xl font-bold text-white uppercase tracking-widest flex items-center gap-3">
                              <span className={cn("w-1.5 h-8 rounded-full", selectedDept.theme === "amber" ? "bg-amber-500" : "bg-sky-500")}></span>
                              Focus & Program
                          </h3>
                      </div>

                      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {selectedDept.focus.map((item: string, idx: number) => (
                              <div 
                                  key={idx} 
                                  className="group flex items-center gap-4 p-5 rounded-2xl bg-[#0F0F0F] border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1"
                              >
                                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors", selectedDept.theme === "amber" ? "bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-black" : "bg-sky-500/10 text-sky-500 group-hover:bg-sky-500 group-hover:text-black")}>
                                      <CheckCircle2 size={18} />
                                  </div>
                                  <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors leading-snug">{item}</span>
                              </div>
                          ))}
                      </div>
                </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}