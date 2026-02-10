import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom"; 
import { Instagram, ArrowRight } from "lucide-react"; 

// --- ASSETS PLACEHOLDER ---
const PLACEHOLDER_MAN = "https://ouch-cdn2.icons8.com/3Ro3XNdxB8qJ2XJjZ_zYgZtWv51k5G7oJ7uW_JzZ_Jz/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOC82/YWU4NzQ2MS0wZGM4/LTRjODMtYjNjOC02/YjQ0OGIyOWFhZGYu/cG5n.png";

// --- STATIC DATA ---
const bphInti = [
  { 
    role: "leader", 
    nama: "Radja Shaka", 
    jabatan: "Ketua Himpunan", 
    foto: "/assets/logos/images/radja.png", 
    quote: "Memimpin dengan visi, melangkah dengan aksi.",
    instagram: "https://www.instagram.com/rs.quranique/"
  },
  { 
    role: "vice", 
    nama: "Putri Salsabila", 
    jabatan: "Wakil Ketua", 
    foto: "/assets/logos/images/putri.png", 
    quote: "Sinergi adalah kunci keberhasilan.",
    instagram: "https://www.instagram.com/ptrisabill/"
  },
  { role: "staff", nama: "Mutia Aura", jabatan: "Sekretaris I", foto: "/assets/logos/images/mutia.png", instagram: "https://www.instagram.com/mutiaauraaaa_/" },
  { role: "staff", nama: "Raja Esa", jabatan: "Sekretaris II", foto: "/assets/logos/images/esa.png", instagram: "https://www.instagram.com/rajaesa_/" },
  { role: "staff", nama: "Vivi", jabatan: "Bendahara I", foto: "/assets/logos/images/vivi.png", instagram: "https://www.instagram.com/fwairypiyy/" },
  { role: "staff", nama: "Angel", jabatan: "Bendahara II", foto: "/assets/logos/images/angel.png", instagram: "https://www.instagram.com/angelinvcn_/" },
];

const dataKompas = {
  ketua: { 
    nama: "Ghabriel Sagala", 
    jabatan: "Ketua KOMPAS", 
    foto: "/assets/logos/images/gabriel.png",
    instagram: "https://www.instagram.com/ghabrielsagala/"
  },
  anggota: [
    { nama: "Divo Farelly", jabatan: "Kompas PSDM", instagram: "https://www.instagram.com/divo.farrelly/", foto: "/assets/logos/images/divo.png" },
    { nama: "Jiddan", jabatan: "Kompas Inotek", instagram: "https://www.instagram.com/jiddanfillah_/", foto: "/assets/logos/images/jiddan.png" },
    { nama: "Daffa Ahmad", jabatan: "Kompas Medinfo", instagram: "https://www.instagram.com/dfaahm/", foto: "/assets/logos/images/damad.png" },
    { nama: "Alisya", jabatan: "Kompas Advokesma", instagram: "https://www.instagram.com/alisyaauraf/", foto: "/assets/logos/images/alisya.png" },
    { nama: "Brillian Pratama", jabatan: "Kompas Hubeks", instagram: "https://www.instagram.com/brilianpratama__/", foto: "/assets/logos/images/brillian.png" },
    { nama: "Felisha", jabatan: "Kompas Ekraf", instagram: "https://www.instagram.com/felisharegitaa/", foto: "/assets/logos/images/felisha.png" },
    { nama: "Ghatan Naufal", jabatan: "Kompas Kora", instagram: "https://www.instagram.com/ghatan.naufal/", foto: "/assets/logos/images/ghatan.png" },
  ]
};

// --- ANIMATION VARIANTS ---
const containerVar: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVar: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

// --- COMPONENTS ---

const BPHCard = ({ item, className }: any) => {
  const isLeader = item.role === "leader" || item.role === "vice";
  return (
    <motion.a 
      href={item.instagram}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVar}
      whileHover={{ y: -8 }}
      className={cn("group relative flex flex-col items-center justify-end w-full cursor-pointer will-change-transform", isLeader ? "h-[420px]" : "h-[320px]", className)}
    >
      <div className={cn("absolute bottom-0 w-full rounded-3xl border border-white/10 bg-[#0A0A0A] overflow-hidden transition-all duration-500 group-hover:border-sky-500/40 group-hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.3)]", isLeader ? "h-[300px]" : "h-[220px]")}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-sky-500/20 blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
      </div>
      <div className={cn("absolute left-1/2 -translate-x-1/2 z-10 transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]", isLeader ? "bottom-[100px] h-[340px] w-auto" : "bottom-[80px] h-[260px] w-auto")}>
          <img 
            src={item.foto} 
            alt={item.nama} 
            decoding="async"
            className="h-full w-full object-contain filter contrast-110 brightness-110" 
          />
      </div>
      <div className="relative z-20 text-center w-full px-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 mb-3 group-hover:border-sky-500/50 transition-colors shadow-lg">
             <span className="text-[10px] font-bold tracking-widest uppercase text-sky-400">{item.jabatan}</span>
             <Instagram className="w-3 h-3 text-white/80" />
          </div>
          <h3 className={cn("font-black text-white leading-tight drop-shadow-xl", isLeader ? "text-3xl" : "text-xl")}>{item.nama}</h3>
          {isLeader && item.quote && <p className="text-gray-400 text-xs italic mt-2 opacity-60 group-hover:opacity-100 transition-opacity">"{item.quote}"</p>}
      </div>
    </motion.a>
  );
};

const KompasLeaderCard = ({ item }: any) => (
  <motion.a 
    href={item.instagram}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="group relative flex flex-col items-center justify-end h-[500px] w-full cursor-pointer will-change-transform" 
  >
      <div className="absolute bottom-0 w-full h-[380px] rounded-[2.5rem] border border-white/10 bg-[#0A0A0A] overflow-hidden group-hover:border-amber-500/40 group-hover:shadow-[0_0_50px_-10px_rgba(245,158,11,0.3)] transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/30 to-transparent opacity-60"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-amber-500/10 blur-[80px] group-hover:opacity-60 transition-opacity"></div>
      </div>
      
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[120px] h-[400px] w-auto z-10 transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
          <img 
            src={item.foto} 
            alt={item.nama} 
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain filter contrast-110 brightness-110" 
          />
      </div>

      <div className="relative z-20 text-center w-full px-6 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 backdrop-blur-xl border border-amber-500/30 mb-4 group-hover:border-amber-500/80 transition-all shadow-xl">
              <span className="text-xs font-black tracking-widest uppercase text-amber-500">Ketua Kompas</span>
              <Instagram className="w-3 h-3 text-amber-500" />
          </div>
          <h3 className="font-black text-white text-4xl leading-none drop-shadow-2xl">{item.nama}</h3>
      </div>
  </motion.a>
);

const KompasMemberCard = ({ nama, jabatan, instagram, foto }: any) => (
  <motion.a 
    href={instagram}
    target="_blank"
    rel="noopener noreferrer"
    variants={itemVar} 
    className="group relative flex flex-col items-center justify-end h-[300px] w-full cursor-pointer will-change-transform"
  >
      <div className="absolute bottom-0 w-full h-[200px] rounded-2xl border border-white/5 bg-[#0F0F0F] overflow-hidden group-hover:border-amber-500/30 group-hover:bg-amber-950/10 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-[80px] h-[240px] w-auto z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2 drop-shadow-lg">
           <img 
             src={foto || PLACEHOLDER_MAN} 
             alt={nama} 
             loading="lazy"
             decoding="async"
             className="h-full w-full object-contain filter contrast-110 transition-all duration-500" 
           />
      </div>

      <div className="relative z-20 text-center w-full px-2 mb-5">
          <h4 className="text-lg font-bold text-white leading-tight group-hover:text-amber-400 transition-colors drop-shadow-md">{nama}</h4>
          <div className="flex items-center justify-center gap-2 mt-1">
             <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest group-hover:text-amber-500/70">{jabatan}</p>
             <Instagram className="w-3 h-3 text-gray-600 group-hover:text-amber-500 transition-colors" />
          </div>
      </div>
  </motion.a>
);

// --- MAIN PAGE ---
export default function Struktur() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-sky-500/30 overflow-x-hidden relative flex flex-col">
      
      {/* BACKGROUND GLOBAL */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[#050505]"></div>
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-sky-900/15 blur-[120px] rounded-full opacity-60"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-amber-900/10 blur-[150px] rounded-full opacity-50"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay hidden md:block"></div>
      </div>

      <div className="relative z-10 pt-32 pb-10 px-6 max-w-7xl mx-auto w-full">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-white/10 pb-10">
            <div>
                <motion.div initial={{ width: 0 }} animate={{ width: "40px" }} transition={{ duration: 1 }} className="h-1 bg-sky-500 mb-6 rounded-full"></motion.div>
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sky-500 font-mono text-xs uppercase tracking-[0.3em] mb-3 block font-bold">Organization Chart</motion.span>
                <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none">
                    Struktur<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-white to-sky-200">Kabinet.</span>
                </motion.h1>
            </div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-gray-400 max-w-md text-sm md:text-base leading-relaxed text-right md:text-right">
                Susunan punggawa <strong className="text-white">INNOVARA</strong> yang menjadi otak dan penggerak di balik setiap inovasi HMPSTI UB Periode 2026/2027.
            </motion.p>
        </div>

        {/* --- BADAN PENGURUS INTI --- */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex items-center gap-4 mb-20">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-sky-500/30"></div>
            <div className="px-4 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/10 backdrop-blur-md"><span className="text-xs font-bold text-sky-400 tracking-widest uppercase">Badan Pengurus Inti</span></div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-sky-500/30"></div>
        </motion.div>

        <motion.div variants={containerVar} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 mb-40">
            <div className="md:col-span-1 flex justify-center"><BPHCard item={bphInti[0]} /></div>
            <div className="md:col-span-1 flex justify-center"><BPHCard item={bphInti[1]} /></div>
            <div className="md:col-span-2 mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {bphInti.slice(2).map((item, idx) => (<BPHCard key={idx} item={item} />))}
                </div>
            </div>
        </motion.div>

        {/* --- BAGIAN KOMPAS --- */}
        <div className="relative pt-24 border-t border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                <div className="lg:col-span-3 flex flex-col gap-8">
                      <div>
                        <h2 className="text-4xl font-black text-white mb-2">KOMPAS</h2>
                        <p className="text-gray-500 text-sm">Komisi Pengawas Kinerja Organisasi</p>
                    </div>
                    <KompasLeaderCard item={dataKompas.ketua} />
                </div>

                <motion.div 
                    variants={containerVar}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-4" 
                >
                    {dataKompas.anggota.map((item, idx) => (
                        <KompasMemberCard key={idx} {...item} />
                    ))}
                </motion.div>
            </div>
        </div>

      </div>

      {/* --- JOURNEY CTA (NEXT: DEPARTEMEN) --- */}
      <section className="relative z-10 py-24 px-6 text-center border-t border-white/5 bg-[#050505] overflow-hidden mt-12">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-amber-900/10 blur-[100px] rounded-full pointer-events-none"></div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex flex-col items-center"
          >
            <p className="text-gray-400 mb-8 font-light tracking-wide text-sm md:text-base">
                Penasaran dengan bidang gerak kami? <span className="text-white font-bold">Cek Divisi HMPSTI.</span>
            </p>
            
            <Link 
                to="/departemen" 
                className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#0A0A0A] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] border border-white/10"
            >
                {/* Gradient Border & Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-sky-500 to-amber-500 opacity-20 group-hover:opacity-40 blur-md transition-opacity"></div>
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>

                <span className="relative z-10 font-bold text-white uppercase tracking-[0.2em] text-xs md:text-sm">
                    Explore Departemen
                </span>
                <div className="relative z-10 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:translate-x-1 transition-all">
                    <ArrowRight size={16} className="text-amber-400 group-hover:text-sky-400 transition-colors" />
                </div>
            </Link>
          </motion.div>
      </section>
      
    </div>
  );
}