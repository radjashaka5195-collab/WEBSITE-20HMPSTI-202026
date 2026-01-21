import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Search, BadgeCheck, X, Quote, ArrowRight } from "lucide-react";

// --- DATA FINAL (19 ORANG) ---
const announcementData = [
  // --- PSDM ---
  { 
    id: 1, 
    name: "Adam Ahmad Bimantoro", 
    dept: "PSDM", 
    role: "Kepala Departemen", 
    impression: "Background Jack di PSDM emang udah dapet banget si. Yakin bisa bawa departemen ini makin solid dan on track. Gaspol Jack!" 
  },
  { 
    id: 2, 
    name: "Muhammad Hafizh Fajarianto", 
    dept: "PSDM", 
    role: "Wakil Kepala Departemen 1", 
    impression: "Skill komunikasi kamu emang potensial banget. Kelihatan kok bisa handle proker gede kayak Samba TI, approach ke Maba juga asik. Tinggal poles dikit jadi deh." 
  },
  { 
    id: 3, 
    name: "Vallerina Gracela Purba", 
    dept: "PSDM", 
    role: "Wakil Kepala Departemen 2", 
    impression: "Rin, anggep aja ini start yang fresh ya! Tunjukin semangat baru kamu dan kasih warna positif buat PSDM. Ditunggu banget kontribusinya." 
  },

  // --- ADVOKESMA ---
  { 
    id: 4, 
    name: "Kayla Alodia Calista", 
    dept: "ADVOKESMA", 
    role: "Ketua Departemen", 
    impression: "Thank you Kay buat ide dan semangatnya. Yakin si kontribusi kamu bakal kerasa banget impactnya buat Advokesma." 
  },
  { 
    id: 5, 
    name: "Dean Adiba Anugrah", 
    dept: "ADVOKESMA", 
    role: "Wakil Ketua Departemen 1", 
    impression: "Dean, rasa ingin tahu plus pengalaman kamu itu kuncinya. Yakin banget bisa bawa inovasi baru buat kita. Sikat!" 
  },
  { 
    id: 6, 
    name: "Nadia Salwa Oktavia", 
    dept: "ADVOKESMA", 
    role: "Wakil Ketua Departemen 2", 
    impression: "Semangat belajar kamu kelihatan banget Nadia. Manfaatin itu buat cari relasi seluas-luasnya dan bawa ide seger biar Advokesma makin jalan." 
  },

  // --- INOTEK ---
  { 
    id: 7, 
    name: "Muhammad Rohan Rifqi", 
    dept: "INOTEK", 
    role: "Ketua Departemen", 
    impression: "Rohan, ilmu IT kamu jangan dipendem sendiri ya. Salurin ke teman teman yang lain biar pada jago juga. Bawa Inotek level up!" 
  },
  { 
    id: 8, 
    name: "Muhammad Mu'taz Syafiq", 
    dept: "INOTEK", 
    role: "Wakil Ketua Departemen 1", 
    impression: "Syafiq, selamat gabung! Ini tempat yang pas buat belajar bareng Rohan. Yuk all out buat Inotek biar makin inovatif." 
  },
  { 
    id: 9, 
    name: "Seila Salsabiela", 
    dept: "INOTEK", 
    role: "Wakil Ketua Departemen 2", 
    impression: "Seila, pengalaman magang plus anak Provoks juga kan, itu nilai plus banget. Skill kamu bakal kepake banget sih di sini buat jembatanin Inotek." 
  },

  // --- KREATIFITAS & OLAHRAGA (KORA) ---
  { 
    id: 10, 
    name: "Wiratama Satrio Herlambang", 
    dept: "KREATIFITAS & OLAHRAGA", 
    role: "Ketua Departemen", 
    impression: "Jiwa leadership Wira emang udah kelihatan. Plus pengalaman di minat bakat, yakin KORA bakal keurus banget dan makin DOR! Semangat Lead!" 
  },
  { 
    id: 11, 
    name: "Raihan Ammar Ahsani", 
    dept: "KREATIFITAS & OLAHRAGA", 
    role: "Wakil Ketua Departemen 1", 
    impression: "Ide inovasi Ammar menarik, problem solving juga jalan. Paket lengkap lah buat bikin KORA makin seru proker-prokernya. Ditunggu eksekusinya Mar!" 
  },
  { 
    id: 12, 
    name: "Damar Putra Hartono", 
    dept: "KREATIFITAS & OLAHRAGA", 
    role: "Wakil Ketua Departemen 2", 
    impression: "Public speaking Damar oke bangeet, problem solving dapet, pengalaman juga ada. Pertahanin terus performanya sampe akhir periode ya!" 
  },

  // --- EKONOMI KREATIF (EKRAF) ---
  { 
    id: 13, 
    name: "Muktabar Zaki Pramana Wibisono", 
    dept: "EKONOMI KREATIF", 
    role: "Ketua Departemen", 
    impression: "Zaki, pemikiran kreatif kamu itu aset! Ekraf butuh banget ide inovatif kaya gitu. Tumpahin aja semua ide liarnya di sini." 
  },
  { 
    id: 14, 
    name: "Dinda Eka Cantika", 
    dept: "EKONOMI KREATIF", 
    role: "Wakil Ketua Departemen", 
    impression: "Dinda, setuju banget kamu punya sisi inovatif. Collab bareng Zaki ya bikin Ekraf makin kreatif dan beda dari biasanya. Semangat Din!" 
  },

  // --- MEDINFO ---
  { 
    id: 15, 
    name: "Muhammad Raihan Hidayah", 
    dept: "MEDINFO", 
    role: "Ketua Departemen", 
    impression: "Raihan, selamat memimpin Medinfo! Bikin wajah HMPSTI jadi makin kece di sosmed." 
  },
  { 
    id: 16, 
    name: "Tiara Nurfadilah", 
    dept: "MEDINFO", 
    role: "Wakil Ketua Departemen 1", 
    impression: "Tiara, selamat bertugas! Jadiin ini tempat buat asah skill dan ketelitian kamu ya. Bikin konten Medinfo makin rapi dan estetik." 
  },
  { 
    id: 17, 
    name: "Latisha Syifa Pratiwi", 
    dept: "MEDINFO", 
    role: "Wakil Ketua Departemen 2", 
    impression: "Latisa, welcome aboard! Semoga betah dan bisa nyalurin ide kreatif yang mungkin selama ini dipendem." 
  },

  // --- HUBEKS ---
  { 
    id: 18, 
    name: "Nathanael Eleazar Handata", 
    dept: "HUBEKS", 
    role: "Ketua Departemen", 
    impression: "Nathan, Visi Misi jangan cuma jadi tulisan di kertas ya. Harus beneran dijalanin dan jangan dilupain. Pegang terus komitmennya. Ide kamu luar biasa kerennya!" 
  },
  { 
    id: 19, 
    name: "Evan Swardana Adinata", 
    dept: "HUBEKS", 
    role: "Wakil Ketua Departemen", 
    impression: "Evan, Keputusan yang udah diambil harus dijalanin sampe garis finish. Yakin kamu bisa komitmen dan jangan mengecewakan!" 
  },
];

export default function Announcement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("ALL");
  const [selectedCandidate, setSelectedCandidate] = useState<any>(null);

  const departments = ["ALL", ...new Set(announcementData.map((item) => item.dept))];

  const filteredData = announcementData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === "ALL" || item.dept === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#33A5D3] selection:text-white relative">
      <Navbar />

      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        
        {/* HEADER (STANDARD RESPONSIVE) */}
        <div className="relative text-center mb-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[150px] bg-sky-600/15 blur-[100px] rounded-full pointer-events-none"></div>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* JUDUL: Responsive Aman */}
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-black text-white tracking-tighter leading-[1.1] md:leading-[0.9] mb-8 drop-shadow-2xl">
              SELAMAT DATANG<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33A5D3] via-white to-[#F59E0B]">
                PENGURUS BARU
              </span>
            </h1>
            
            {/* DESKRIPSI: Responsive Aman */}
            <div className="inline-block relative max-w-full px-4">
               <div className="absolute inset-0 bg-white/5 blur-md rounded-2xl md:rounded-full"></div>
               <p className="relative z-10 text-gray-300 text-xs sm:text-sm md:text-lg py-3 px-6 rounded-2xl md:rounded-full border border-white/10 bg-[#0A0A0A]/50 backdrop-blur-sm shadow-xl whitespace-normal md:whitespace-nowrap leading-relaxed">
                  Selamat mengemban amanah. Klik namamu untuk melihat pesan khusus dari kami!
               </p>
            </div>
          </motion.div>
        </div>

        {/* SEARCH & FILTER */}
        <div className="mb-12 space-y-6 relative z-20">
            <div className="relative max-w-lg mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-500" />
                </div>
                <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-4 border border-white/10 rounded-xl leading-5 bg-white/5 text-gray-300 placeholder-gray-500 focus:outline-none focus:bg-white/10 focus:border-[#33A5D3] transition duration-150 ease-in-out sm:text-sm"
                    placeholder="Cari nama pengurus..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
                {departments.map((dept) => (
                    <button
                        key={dept}
                        onClick={() => setSelectedDept(dept)}
                        className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                            selectedDept === dept 
                            ? "bg-[#33A5D3] border-[#33A5D3] text-white shadow-[0_0_15px_-3px_rgba(51,165,211,0.5)]" 
                            : "bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                        }`}
                    >
                        {dept}
                    </button>
                ))}
            </div>
        </div>

        {/* LIST CARD HASIL */}
        {filteredData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20">
                {filteredData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        layoutId={`card-${item.id}`} 
                        onClick={() => setSelectedCandidate(item)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="group relative bg-gradient-to-br from-[#0F0F0F] to-[#050505] border border-white/10 rounded-3xl p-6 hover:border-[#33A5D3]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#33A5D3]/10 overflow-hidden cursor-pointer flex flex-col justify-between min-h-[180px]"
                    >
                         <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#33A5D3]/5 rounded-full blur-[60px] group-hover:bg-[#33A5D3]/10 transition-all duration-500 pointer-events-none"></div>

                         {/* Header Card */}
                         <div className="relative z-10 flex items-start justify-between mb-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#33A5D3]/10 border border-[#33A5D3]/20 text-[#33A5D3] text-[10px] font-bold tracking-widest uppercase">
                                {item.dept}
                            </div>
                            <BadgeCheck className="text-[#33A5D3] w-6 h-6 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                         </div>

                         {/* Body Card */}
                         <div className="relative z-10 mb-6">
                            <h3 className="text-xl font-bold text-white mb-1 leading-tight group-hover:text-[#33A5D3] transition-colors">{item.name}</h3>
                            <p className="text-gray-400 text-sm font-medium">{item.role}</p>
                         </div>

                         {/* Footer Card */}
                         <div className="relative z-10 mt-auto pt-4 border-t border-white/5 flex items-center justify-between group-hover:border-[#33A5D3]/20 transition-colors">
                             <span className="text-xs text-gray-500 font-medium group-hover:text-white transition-colors">Lihat Pesan</span>
                             <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#33A5D3] transition-all duration-300">
                                <ArrowRight size={14} className="text-gray-400 group-hover:text-white" />
                             </div>
                         </div>
                    </motion.div>
                ))}
            </div>
        ) : (
            <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl bg-white/5 relative z-20">
                <p className="text-gray-400">Maaf, nama tersebut tidak ditemukan.</p>
                <button onClick={() => {setSearchTerm(""); setSelectedDept("ALL")}} className="text-[#33A5D3] text-sm mt-2 hover:underline">Reset Pencarian</button>
            </div>
        )}
      </div>

      {/* --- MODAL POPUP (STANDARD BERSIH) --- */}
      <AnimatePresence>
        {selectedCandidate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop Blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCandidate(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div 
              layoutId={`card-${selectedCandidate.id}`} 
              className="relative w-full max-w-lg bg-[#0F0F0F] border border-[#33A5D3]/30 rounded-3xl p-8 shadow-2xl overflow-hidden"
            >
               {/* Background Ornament */}
               <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#33A5D3]/10 rounded-full blur-[100px]"></div>
               <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#F59E0B]/5 rounded-full blur-[100px]"></div>

               {/* Close Button (STANDARD) */}
               <button 
                 onClick={() => setSelectedCandidate(null)}
                 className="absolute top-4 right-4 p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors z-20 border border-white/5"
               >
                 <X size={20} className="text-gray-400 hover:text-white" />
               </button>

               <div className="relative z-10 flex flex-col items-center text-center pt-2">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#33A5D3] to-[#0A0A0A] p-[1px] mb-6 shadow-xl shadow-[#33A5D3]/20">
                     <div className="w-full h-full rounded-full bg-[#0A0A0A] flex items-center justify-center">
                        <BadgeCheck className="w-10 h-10 text-[#33A5D3]" />
                     </div>
                  </div>

                  <h2 className="text-2xl font-black text-white mb-2 leading-tight">{selectedCandidate.name}</h2>
                  
                  {/* ROLE BADGE */}
                  <div className="mb-8">
                      <span className="font-sans font-bold text-sm tracking-wide uppercase text-[#F59E0B] border border-[#F59E0B]/20 bg-[#F59E0B]/10 px-4 py-1.5 rounded-full shadow-[0_0_15px_-3px_rgba(245,158,11,0.2)]">
                        {selectedCandidate.role}
                      </span>
                  </div>

                  {/* PESAN KESAN BOX */}
                  <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl w-full">
                     <Quote className="absolute -top-4 -left-2 w-8 h-8 text-[#33A5D3] fill-[#33A5D3] opacity-50" />
                     <p className="text-white text-lg leading-relaxed font-medium">
                       "{selectedCandidate.impression}"
                     </p>
                     <Quote className="absolute -bottom-4 -right-2 w-8 h-8 text-[#33A5D3] fill-[#33A5D3] rotate-180 opacity-50" />
                  </div>

                  {/* FOOTER MODAL */}
                  <div className="mt-8 text-center">
                    <p className="text-gray-600 text-[10px] font-bold tracking-[0.2em] uppercase">
                        HMPSTI VOKASI UB 2026
                    </p>
                  </div>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}