import { Navbar } from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link untuk Footer
import { ArrowUpRight, X, Target, User, Instagram, Linkedin } from "lucide-react"; // Tambah Icon Sosmed

// --- IKON CUSTOM (Sama kayak di Home & Struktur) ---
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

// --- DATA DUMMY STAF (Bisa diupdate nanti) ---
const dummyStaff = [
  { nama: "Budi Santoso", posisi: "Staff Ahli" },
  { nama: "Siti Aminah", posisi: "Staff Muda" },
  { nama: "Kevin Sanjaya", posisi: "Staff Muda" },
  { nama: "Marcus Gideon", posisi: "Staff Muda" },
  { nama: "Lesti Kejora", posisi: "Staff Magang" },
  { nama: "Rizky Billar", posisi: "Staff Magang" },
];

// --- DATA DEPARTEMEN LENGKAP ---
const departments = [
  {
    id: "psdm",
    nama: "PSDM",
    panjang: "Pengembangan Sumber Daya Mahasiswa",
    desc: "Jantung kaderisasi dan pengembangan potensi mahasiswa TI.",
    theme: "sky",
    logo: "/assets/logos/PSDM.png",
    proker: ["Latihan Dasar Kepemimpinan", "Upgrading Pengurus", "Staff Magang"],
    staff: dummyStaff
  },
  {
    id: "inotek",
    nama: "INOTEK",
    panjang: "Inovasi & Teknologi",
    desc: "Wadah eksplorasi teknologi, coding, dan riset ilmiah.",
    theme: "amber",
    logo: "/assets/logos/Inotek.png",
    proker: ["Software Fair", "Workshop IoT", "Hackathon Internal"],
    staff: dummyStaff
  },
  {
    id: "medinfo",
    nama: "MEDINFO",
    panjang: "Media & Informasi",
    desc: "Wadah informasi kreatif dan branding visual himpunan.",
    theme: "sky",
    logo: "/assets/logos/Medinfo.png",
    proker: ["Podcast TI", "Design Class", "Company Profile Video"],
    staff: dummyStaff
  },
  {
    id: "advo",
    nama: "ADVOKESMA",
    panjang: "Advokasi & Kesejahteraan",
    desc: "Gardu terdepan dalam pelayanan dan advokasi hak mahasiswa.",
    theme: "amber",
    logo: "/assets/logos/Advokesma.png",
    proker: ["Forum Aspirasi", "Info Beasiswa", "Crisis Center UKT"],
    staff: dummyStaff
  },
  {
    id: "hubeks",
    nama: "HUBEKS",
    panjang: "Hubungan Eksternal",
    desc: "Membangun relasi strategis dengan pihak luar kampus.",
    theme: "sky",
    logo: "/assets/logos/Hubeks.png",
    proker: ["Studi Banding", "Alumni Gathering", "Kunjungan Industri"],
    staff: dummyStaff
  },
  {
    id: "ekraf",
    nama: "EKRAF",
    panjang: "Ekonomi Kreatif",
    desc: "Motor penggerak finansial mandiri melalui entrepreneurship.",
    theme: "amber",
    logo: "/assets/logos/Ekraf.png",
    proker: ["Merchandise Store", "Business Plan Comp", "Kantin Kejujuran"],
    staff: dummyStaff
  },
  {
    id: "mikat",
    nama: "KORA",
    panjang: "Kreatifitas & Olahraga",
    desc: "Fasilitator penyalur hobi, seni, dan olahraga mahasiswa.",
    theme: "sky",
    logo: "/assets/logos/Kora.png",
    proker: ["Porseni TI", "Music Festival", "E-Sport Tournament"],
    staff: dummyStaff
  },
];

// --- COMPONENT: Staff Card (Mini) ---
const StaffCard = ({ nama, posisi, theme }: any) => {
    const isAmber = theme === "amber";
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
        >
            <div className={cn("w-12 h-12 rounded-full p-[2px] bg-gradient-to-br", isAmber ? "from-amber-500 to-transparent" : "from-sky-500 to-transparent")}>
                <div className="w-full h-full rounded-full overflow-hidden bg-black">
                    <img src={`https://ui-avatars.com/api/?name=${nama}&background=050505&color=fff`} alt={nama} className="w-full h-full object-cover" />
                </div>
            </div>
            <div>
                <h4 className="font-bold text-white text-sm">{nama}</h4>
                <p className={cn("text-[10px] uppercase tracking-wider font-mono", isAmber ? "text-amber-500" : "text-sky-500")}>{posisi}</p>
            </div>
        </motion.div>
    )
}

// --- COMPONENT: Dept Card (Trigger) ---
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
        "group relative h-[400px] w-full rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer",
        borderHover
      )}
    >
      {/* Background Glow */}
      <div 
        className="absolute -right-20 -top-20 w-64 h-64 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: glowColor }}
      ></div>

      <div className="relative z-10">
        {/* LOGO SECTION */}
        <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center p-3 bg-white/5 border border-white/10 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-black/50 backdrop-blur-sm", mainColor)}>
            <img 
                src={data.logo} 
                alt={`${data.nama} logo`} 
                className="w-full h-full object-contain drop-shadow-lg" 
            />
        </div>
        
        <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">{data.nama}</h3>
        <p className={cn("text-xs font-mono font-bold tracking-widest uppercase mb-4 opacity-70 group-hover:opacity-100 transition-opacity", mainColor)}>
            {data.panjang}
        </p>
        <p className="text-gray-400 text-sm leading-relaxed max-w-[90%] group-hover:text-gray-200 transition-colors">
            {data.desc}
        </p>
      </div>

      <div className="relative z-10 mt-auto translate-y-4 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <div className="h-[1px] w-full bg-white/10 mb-4 group-hover:bg-white/30 transition-colors"></div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
             <User size={14} />
             <span>{data.staff.length} Anggota Staff</span>
        </div>
      </div>

      <div className={cn("absolute bottom-8 right-8 text-white/20 transition-all duration-500 group-hover:text-white group-hover:rotate-[-45deg] group-hover:scale-125")}>
         <ArrowUpRight size={32} />
      </div>
    </motion.div>
  );
};

// --- MAIN PAGE ---
export default function Departemen() {
  const [selectedDept, setSelectedDept] = useState<any>(null);

  const footerLinks = [
    { name: "Beranda", path: "/" },
    { name: "Struktur", path: "/struktur" },
    { name: "Departemen", path: "/departemen" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-sky-500/30 overflow-x-hidden">
      <Navbar />

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
                    <div className="h-[1px] w-12 bg-sky-500/50"></div>
                    <span className="font-mono text-xs uppercase tracking-[0.4em] text-sky-400 font-bold">Our Divisions</span>
                    <div className="h-[1px] w-12 bg-amber-500/50"></div>
                </div>

                <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none text-white drop-shadow-2xl">
                    Depar<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-white to-amber-500">temen</span>
                </h1>
                
                <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Klik kartu untuk melihat <span className="text-amber-500 font-bold">Program Kerja</span> & <span className="text-sky-500 font-bold">Anggota Staff</span>.
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

      {/* === FOOTER YANG SUDAH DIPERBARUI === */}
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

      {/* === MODAL / POPUP DETAIL DEPARTEMEN === */}
      <AnimatePresence>
        {selectedDept && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-8">
            
            {/* Backdrop Blur */}
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                onClick={() => setSelectedDept(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />

            {/* Content Container */}
            <motion.div 
                layoutId={`card-${selectedDept.id}`}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-5xl max-h-full bg-[#0A0A0A] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
                {/* Close Button */}
                <button onClick={() => setSelectedDept(null)} className="absolute top-6 right-6 z-50 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <X size={20} className="text-white" />
                </button>

                {/* Left Side: Info & Proker */}
                <div className={cn("p-8 md:p-12 w-full md:w-1/3 flex flex-col relative overflow-hidden", selectedDept.theme === "amber" ? "bg-amber-950/20" : "bg-sky-950/20")}>
                      {/* Decorative Blob */}
                      <div className={cn("absolute top-0 left-0 w-64 h-64 blur-[80px] rounded-full opacity-30 pointer-events-none", selectedDept.theme === "amber" ? "bg-amber-500" : "bg-sky-500")}></div>
                      
                      <div className="relative z-10">
                        {/* MODAL LOGO */}
                        <img 
                            src={selectedDept.logo} 
                            alt={selectedDept.nama} 
                            className="w-24 h-24 object-contain mb-6 drop-shadow-2xl" 
                        />
                        
                        <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-2">{selectedDept.nama}</h2>
                        <p className={cn("text-xs font-mono uppercase tracking-widest mb-6 opacity-80 font-bold", selectedDept.theme === "amber" ? "text-amber-400" : "text-sky-400")}>{selectedDept.panjang}</p>
                        <p className="text-sm text-gray-300 mb-8 leading-relaxed">{selectedDept.desc}</p>

                        <div className="space-y-4">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2">Program Kerja Unggulan</h3>
                            <ul className="space-y-3">
                                {selectedDept.proker.map((pk: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <Target size={16} className={cn("mt-0.5 shrink-0", selectedDept.theme === "amber" ? "text-amber-500" : "text-sky-500")} />
                                            {pk}
                                    </li>
                                ))}
                            </ul>
                        </div>
                      </div>
                </div>

                {/* Right Side: Staff Grid */}
                <div className="flex-1 bg-black/50 p-8 md:p-12 overflow-y-auto max-h-[60vh] md:max-h-[80vh]">
                      <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-bold text-white">Anggota Staff</h3>
                        <span className="text-xs font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full">{selectedDept.staff.length} Orang</span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {selectedDept.staff.map((staf: any, i: number) => (
                            <StaffCard key={i} nama={staf.nama} posisi={staf.posisi} theme={selectedDept.theme} />
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