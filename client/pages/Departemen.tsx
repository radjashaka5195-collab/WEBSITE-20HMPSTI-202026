import { Navbar } from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom"; 
import { ArrowUpRight, X, Instagram, Linkedin, CheckCircle2 } from "lucide-react"; 

// --- IKON CUSTOM ---
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

// --- DATA DEPARTEMEN ---
const departments = [
  {
    id: "psdm",
    nama: "PSDM",
    panjang: "Pengembangan Sumber Daya Mahasiswa",
    desc: "Kami hadir untuk menggali dan mengembangkan potensi terbaik setiap mahasiswa TI. Fokus kami adalah membentuk karakter kepemimpinan yang kuat dan menciptakan lingkungan di mana setiap anggota bisa bertumbuh bersama.",
    theme: "sky",
    logo: "/assets/logos/PSDM.png",
    motto: "Membentuk Kader, Membangun Karakter.",
    focus: ["Kaderisasi Mahasiswa", "Leadership Training", "Monitoring Staff", "Bonding Internal"]
  },
  {
    id: "inotek",
    nama: "INOTEK",
    panjang: "Inovasi & Teknologi",
    desc: "Rumah bagi para inovator muda. Di sini, kami mengeksplorasi teknologi terkini, mulai dari pengembangan software hingga IoT, untuk menciptakan solusi nyata yang bermanfaat bagi sekitar.",
    theme: "amber",
    logo: "/assets/logos/Inotek.png",
    motto: "Innovate Today, Lead Tomorrow.",
    focus: ["Software Development", "Internet of Things", "Riset Ilmiah", "Tech Workshop"]
  },
  {
    id: "medinfo",
    nama: "MEDINFO",
    panjang: "Media & Informasi",
    desc: "Gardu kreatif himpunan yang mengelola seluruh arus informasi. Kami memadukan desain visual yang estetik dan strategi media sosial untuk memastikan setiap pesan tersampaikan dengan menarik.",
    theme: "sky",
    logo: "/assets/logos/Medinfo.png",
    motto: "Creativity Beyond Limit.",
    focus: ["Social Media Mgt", "Graphic Design", "Videography", "Creative Content"]
  },
  {
    id: "advo",
    nama: "ADVOKESMA",
    panjang: "Advokasi & Kesejahteraan",
    desc: "Kami adalah garda terdepan dalam memperjuangkan hak dan kesejahteraan mahasiswa. Mulai dari bantuan akademik hingga penyaluran aspirasi, kami siap mendengar dan bertindak.",
    theme: "amber",
    logo: "/assets/logos/Advokesma.png",
    motto: "Melayani dengan Hati.",
    focus: ["Layanan Advokasi", "Info Beasiswa", "Forum Aspirasi", "Crisis Center"]
  },
  {
    id: "hubeks",
    nama: "HUBEKS",
    panjang: "Hubungan Eksternal",
    desc: "Jembatan penghubung HMPSTI dengan dunia luar. Kami aktif membangun relasi strategis dengan alumni, instansi, dan organisasi lain untuk membuka peluang kolaborasi yang lebih luas.",
    theme: "sky",
    logo: "/assets/logos/Hubeks.png",
    motto: "Connecting Opportunities.",
    focus: ["Relasi Eksternal", "Studi Banding", "Alumni Relation", "Company Visit"]
  },
  {
    id: "ekraf",
    nama: "EKRAF",
    panjang: "Ekonomi Kreatif",
    desc: "Motor penggerak kemandirian finansial organisasi. Lewat semangat wirausaha, kami menciptakan produk-produk kreatif dan merchandise keren yang tidak hanya bernilai jual tapi juga membanggakan.",
    theme: "amber",
    logo: "/assets/logos/Ekraf.png",
    motto: "Business with Passion.",
    focus: ["Merchandise Store", "Business Plan", "Sponsorship", "Creative Preneur"]
  },
  {
    id: "mikat",
    nama: "KORA",
    panjang: "Kreatifitas & Olahraga",
    desc: "Wadah ekspresi bagi bakat seni dan olahraga mahasiswa. Kami percaya keseimbangan itu penting, jadi kami hadirkan berbagai kegiatan seru untuk menyalurkan hobi dan menjaga semangat tetap menyala.",
    theme: "sky",
    logo: "/assets/logos/Kora.png",
    motto: "Sportive Spirit, Creative Mind.",
    focus: ["E-Sport Tournament", "Olahraga Rutin", "Festival Musik", "Komunitas Seni"]
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
      {/* Background Glow */}
      <div 
        className="absolute -right-20 -top-20 w-64 h-64 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: glowColor }}
      ></div>

      <div className="relative z-10">
        {/* LOGO SECTION */}
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
                
                <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
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

      {/* === FOOTER === */}
      <section className="relative py-20 bg-[#050505] border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center relative z-10">
            <motion.div whileHover={{ scale: 1.05 }} className="mb-10 cursor-default">
                <span className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#33A5D3] to-[#F59E0B] tracking-tighter select-none drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity">
                    INNOVARA
                </span>
            </motion.div>

            <div className="flex gap-6 mb-12">
                <SocialLink href="https://www.instagram.com/hmpsti.vokasiub/" icon={Instagram} label="Instagram" />
                <SocialLink href="https://www.tiktok.com/@hmpsti.vokasiub" icon={TikTokIcon} label="TikTok" />
                <SocialLink href="https://www.linkedin.com/company/hmpsti-vokasi-ub/" icon={Linkedin} label="LinkedIn" />
                <SocialLink href="#" icon={WhatsAppIcon} label="Contact Person" />
            </div>

            <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm font-bold uppercase tracking-widest text-gray-500">
                {footerLinks.map((link) => (
                    <Link key={link.name} to={link.path} className="hover:text-[#33A5D3] transition-colors relative group">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#F59E0B] transition-all group-hover:w-full"></span>
                    </Link>
                ))}
            </div>

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

      {/* === MODAL / POPUP === */}
      <AnimatePresence>
        {selectedDept && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-8">
            
            {/* Backdrop Blur */}
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                onClick={() => setSelectedDept(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Content Container */}
            <motion.div 
                layoutId={`card-${selectedDept.id}`}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-5xl bg-[#0A0A0A] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[500px]"
            >
                {/* Close Button */}
                <button onClick={() => setSelectedDept(null)} className="absolute top-6 right-6 z-50 p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors border border-white/10">
                    <X size={20} className="text-white" />
                </button>

                {/* Left Side: Info Utama */}
                <div className={cn("p-8 md:p-12 w-full md:w-5/12 flex flex-col justify-center relative overflow-hidden", selectedDept.theme === "amber" ? "bg-gradient-to-br from-amber-950/40 to-black" : "bg-gradient-to-br from-sky-950/40 to-black")}>
                      {/* Logo Besar */}
                      <div className="relative z-10 mb-8">
                        <div className={cn("w-24 h-24 rounded-3xl flex items-center justify-center p-4 bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl")}>
                            <img 
                                src={selectedDept.logo} 
                                alt={selectedDept.nama} 
                                className="w-full h-full object-contain" 
                            />
                        </div>
                      </div>
                      
                      <div className="relative z-10">
                        <h2 className="text-5xl font-black uppercase tracking-tighter leading-none mb-4 text-white">{selectedDept.nama}</h2>
                        <div className={cn("h-1 w-20 mb-6 rounded-full", selectedDept.theme === "amber" ? "bg-amber-500" : "bg-sky-500")}></div>
                        
                        <p className="text-gray-300 text-sm leading-relaxed mb-8">
                            {selectedDept.desc}
                        </p>

                        {/* Motto Badge (ICON BINTANG SUDAH DIHAPUS) */}
                        <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <span className="text-xs font-bold uppercase tracking-widest text-white">"{selectedDept.motto}"</span>
                        </div>
                      </div>
                </div>

                {/* Right Side: Focus Grid */}
                <div className="w-full md:w-7/12 bg-black/50 p-8 md:p-12 flex flex-col justify-center">
                      <div className="mb-8">
                          <h3 className="text-lg font-bold text-white uppercase tracking-widest flex items-center gap-3">
                              <span className={cn("w-2 h-8 rounded-full", selectedDept.theme === "amber" ? "bg-amber-500" : "bg-sky-500")}></span>
                              Fokus Utama
                          </h3>
                      </div>

                      {/* Grid Kartu Fokus */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {selectedDept.focus.map((item: string, idx: number) => (
                              <div 
                                  key={idx} 
                                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                              >
                                  <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0", selectedDept.theme === "amber" ? "bg-amber-500/20 text-amber-500" : "bg-sky-500/20 text-sky-500")}>
                                      <CheckCircle2 size={20} />
                                  </div>
                                  <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors">{item}</span>
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