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
      className={cn("group block relative w-full cursor-pointer will-change-transform", className)}
    >
      <div className={cn(
        "relative rounded-2xl bg-[#0A0A0A] overflow-hidden border transition-all duration-500",
        isLeader ? "h-[400px] border-white/10 group-hover:border-[#33A5D3]/40" : "h-[320px] border-white/5 group-hover:border-[#33A5D3]/30"
      )}>
        {/* Photo Container */}
        <div className="absolute inset-0 pt-10 px-6 flex justify-center items-end bg-gradient-to-t from-black via-[#0A0A0A]/20 to-transparent z-10 transition-transform duration-700 group-hover:scale-105">
           <img 
             src={item.foto} 
             alt={item.nama} 
             loading="lazy"
             decoding="async"
             className={cn("w-auto object-contain filter contrast-110 grayscale-[15%] group-hover:grayscale-0 transition-all duration-500", isLeader ? "h-[320px]" : "h-[240px]")} 
           />
        </div>
        
        {/* Content Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6 z-20 bg-gradient-to-t from-black via-black/80 to-transparent">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-mono text-[#33A5D3] uppercase tracking-widest mb-1">{item.jabatan}</p>
              <h3 className={cn("font-black text-white leading-tight", isLeader ? "text-2xl" : "text-xl group-hover:text-[#33A5D3]/90 transition-colors")}>
                {item.nama}
              </h3>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#33A5D3] group-hover:text-black transition-all">
               <Instagram size={14} className="text-white group-hover:text-black" />
            </div>
          </div>
          {isLeader && item.quote && (
            <div className="overflow-hidden">
              <p className="text-gray-400 text-xs italic mt-3 pr-8 leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                "{item.quote}"
              </p>
            </div>
          )}
        </div>
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
    className="group block relative w-full cursor-pointer will-change-transform h-[450px]" 
  >
      <div className="absolute inset-0 rounded-2xl bg-[#0A0A0A] overflow-hidden border border-white/10 group-hover:border-[#F59E0B]/40 transition-all duration-500">
         
         <div className="absolute inset-0 pt-10 flex justify-center items-end bg-gradient-to-t from-black via-[#0A0A0A]/50 to-transparent z-10 transition-transform duration-700 group-hover:scale-105">
           <img 
             src={item.foto} 
             alt={item.nama} 
             loading="lazy"
             decoding="async"
             className="h-[380px] w-auto object-contain filter contrast-110 grayscale-[15%] group-hover:grayscale-0 transition-all duration-500" 
           />
         </div>

         <div className="absolute inset-x-0 bottom-0 p-8 z-20 bg-gradient-to-t from-black via-black/90 to-transparent">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-mono text-[#F59E0B] uppercase tracking-widest mb-1.5">{item.jabatan}</p>
                <h3 className="font-black text-white text-3xl leading-tight">{item.nama}</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#F59E0B] group-hover:text-black transition-all">
                 <Instagram size={16} className="text-white group-hover:text-black" />
              </div>
            </div>
         </div>
      </div>
  </motion.a>
);

const KompasMemberCard = ({ nama, jabatan, instagram, foto }: any) => (
  <motion.a 
    href={instagram}
    target="_blank"
    rel="noopener noreferrer"
    variants={itemVar} 
    className="group block relative w-full cursor-pointer will-change-transform h-[280px]"
  >
      <div className="absolute inset-0 rounded-2xl bg-[#080808] overflow-hidden border border-white/5 group-hover:border-[#F59E0B]/30 group-hover:bg-[#0A0A0A] transition-all duration-300">
          
          <div className="absolute inset-0 pt-8 flex justify-center items-end z-10 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
             <img 
               src={foto || PLACEHOLDER_MAN} 
               alt={nama} 
               loading="lazy"
               decoding="async"
               className="h-[220px] w-auto object-contain filter contrast-110 grayscale-[30%] group-hover:grayscale-0 transition-all duration-500" 
             />
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5 z-20 bg-gradient-to-t from-black via-black/80 to-transparent">
             <h4 className="text-base font-bold text-white mb-1 group-hover:text-[#F59E0B] transition-colors">{nama}</h4>
             <div className="flex items-center justify-between">
                <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">{jabatan}</p>
                <Instagram size={12} className="text-gray-600 group-hover:text-[#F59E0B] transition-colors" />
             </div>
          </div>
      </div>
  </motion.a>
);

// --- MAIN PAGE ---
export default function Struktur() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#33A5D3]/30 overflow-x-hidden relative flex flex-col">
      
      {/* BACKGROUND AMBIENT LIGHT */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#33A5D3]/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#F59E0B]/5 blur-[150px] rounded-full pointer-events-none"></div>
      </div>

      <div className="relative z-10 pt-32 pb-10 px-6 max-w-7xl mx-auto w-full">
        {/* HEADER - Editorial Style */}
        <div className="mb-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="text-xs uppercase tracking-[0.3em] text-[#33A5D3] font-medium mb-4 block">Organization Chart</span>
                <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.85] mb-6">
                    STRUK<span className="text-[#33A5D3]">TUR</span>
                </h1>
                <p className="text-gray-400 max-w-lg text-base md:text-lg leading-relaxed">
                    Susunan punggawa <strong className="text-white font-semibold">INNOVARA</strong> yang menjadi otak dan penggerak di balik setiap inovasi HMPSTI UB Periode 2026/2027.
                </p>
            </motion.div>
        </div>

        {/* --- BADAN PENGURUS INTI --- */}
        <div className="mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-widest text-white mb-3">Badan Pengurus Inti</h2>
              <div className="w-12 h-1 bg-[#33A5D3] rounded-full"></div>
          </motion.div>

          <motion.div variants={containerVar} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-1"><BPHCard item={bphInti[0]} /></div>
              <div className="md:col-span-1"><BPHCard item={bphInti[1]} /></div>
              <div className="md:col-span-2 mt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                      {bphInti.slice(2).map((item, idx) => (<BPHCard key={idx} item={item} />))}
                  </div>
              </div>
          </motion.div>
        </div>

        {/* --- BAGIAN KOMPAS --- */}
        <div className="relative pt-24 border-t border-white/[0.04]">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
                <h2 className="text-lg md:text-xl font-bold uppercase tracking-widest text-white mb-2">KOMPAS</h2>
                <p className="text-gray-500 text-sm mb-4">Komisi Pengawas Kinerja Organisasi</p>
                <div className="w-12 h-1 bg-[#F59E0B] rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4">
                    <KompasLeaderCard item={dataKompas.ketua} />
                </div>

                <motion.div 
                    variants={containerVar}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4" 
                >
                    {dataKompas.anggota.map((item, idx) => (
                        <KompasMemberCard key={idx} {...item} />
                    ))}
                </motion.div>
            </div>
        </div>
      </div>

      {/* --- JOURNEY CTA --- */}
      <section className="relative z-10 py-24 px-6 border-t border-white/[0.04] bg-[#030303] mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <p className="text-gray-500 text-sm md:text-base mb-3">
              Penasaran dengan bidang gerak kami?
            </p>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-10 leading-tight">
              Cek Divisi <span className="text-[#F59E0B]">HMPSTI.</span>
            </h3>
            
            <Link 
              to="/departemen" 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#050505] rounded-full font-bold text-sm uppercase tracking-wider hover:bg-[#F59E0B] hover:text-white transition-all duration-300"
            >
              Explore Departemen
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}