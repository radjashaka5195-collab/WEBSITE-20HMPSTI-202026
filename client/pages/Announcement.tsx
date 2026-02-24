"use client";

import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

/* ============================
   KONFIGURASI LINK WHATSAPP
============================ */
const WA_ADMIN_LINK = "https://wa.me/6282218361690?text=Halo%20Admin,%20saya%20sudah%20cek%20pengumuman%20dan%20dinyatakan%20lolos%20Staff%20Ahli%20HMPSTI.%20Mohon%20izin%20untuk%20bergabung%20ke%20grup.";
const WA_GROUP_LINK = "https://chat.whatsapp.com/FeeL6bSUNn8BUqfoPJnQFO?mode=hq2tswa";

/* ============================
   DATA KELULUSAN (LOLOS)
============================ */
const announcementData = [
  // PSDM
  { name: "Iksan Arlatin", divisi: "PSDM" },
  { name: "Cantika Rizky R P", divisi: "PSDM" },
  { name: "Imtina darin huwaida", divisi: "PSDM" },
  { name: "Yulinafaesa Sinaga", divisi: "PSDM" },
  { name: "Shafa Kamalia", divisi: "PSDM" },
  { name: "Ahmad Amril Zul Hafizza", divisi: "PSDM" },
  { name: "Muhammad Albar Athaillah", divisi: "PSDM" },
  // INOTEK
  { name: "Jonathan Winner Naya", divisi: "Inotek" },
  { name: "Miftakhul dzakira Asma", divisi: "Inotek" },
  { name: "Akmal Cahya Pamungkas", divisi: "Inotek" },
  { name: "Nafhisa Nailah Husnah", divisi: "Inotek" },
  { name: "Fauzi Ahmad Zaki", divisi: "Inotek" },
  { name: "Rafif Arvazean", divisi: "Inotek" },
  { name: "Oktovia Enjelika Br Nababan", divisi: "Inotek" },
  { name: "Vanesia Chelselia", divisi: "Inotek" },
  // EKRAF
  { name: "Zefanya Angelika Putri Bagariang", divisi: "Ekraf" },
  { name: "Annisa Intan Khoirina", divisi: "Ekraf" },
  { name: "Egalia Diantika Putri", divisi: "Ekraf" },
  { name: "Andhika Ahmad G.", divisi: "Ekraf" },
  { name: "M Pasha", divisi: "Ekraf" },
  { name: "Tania Syabandiah", divisi: "Ekraf" },
  { name: "Tania Hertawan", divisi: "Ekraf" },
  // HUBEKS
  { name: "Muhammad Rendy Ramadhani", divisi: "Hubeks" },
  { name: "Muhammad Nizam Putra Rasya", divisi: "Hubeks" },
  { name: "Indah Brilliant", divisi: "Hubeks" },
  { name: "Tzurayya Aisyah Priantika", divisi: "Hubeks" },
  { name: "Abdulloh Hammad", divisi: "Hubeks" },
  { name: "Muhammad Muzakky", divisi: "Hubeks" },
  { name: "Hafiz Maulana Al Fauzi", divisi: "Hubeks" },
  // MEDINFO
  { name: "Anisa Dwi Ariyanti", divisi: "Medinfo" },
  { name: "Nasywa Putri Rachmitha", divisi: "Medinfo" },
  { name: "David Bimantoro Sarashadi", divisi: "Medinfo" },
  { name: "Kasiva Imtiyas Zaidah Iftinan", divisi: "Medinfo" },
  { name: "Mayla Tahmida", divisi: "Medinfo" },
  { name: "Sabil Rizki", divisi: "Medinfo" },
  { name: "Zulfa Fitri", divisi: "Medinfo" },
  { name: "Sabrina Aulia Putri", divisi: "Medinfo" },
  { name: "Kayla rihadatul", divisi: "Medinfo" },
  { name: "Keisya Lanika", divisi: "Medinfo" },
  { name: "Jessica Ester Nolia", divisi: "Medinfo" },
  { name: "Mifta Annisa Rabbani", divisi: "Medinfo" }, // Mifta sudah kembali Lolos
  // ADVOKESMA
  { name: "Anne Sada Dewi", divisi: "Advokesma" },
  { name: "Firyal zalfaa aulia", divisi: "Advokesma" },
  { name: "Rahel Jessica Lestari Habeahan", divisi: "Advokesma" },
  { name: "Muhammad Fidho Pratama", divisi: "Advokesma" },
  { name: "Jenri Setiawan Sitepu", divisi: "Advokesma" },
  { name: "Bilqis Nailatul Muna", divisi: "Advokesma" },
  { name: "Angeliqia V G Pardosi", divisi: "Advokesma" },
  { name: "Muhammad Ardan Al ayubi", divisi: "Advokesma" },
  // KORA
  { name: "Joshua Winner Naya", divisi: "Kora" },
  { name: "Achmad Fachri amrullah", divisi: "Kora" },
  { name: "Sabila Rahma Aulia", divisi: "Kora" },
  { name: "Neza Frischa", divisi: "Kora" },
];

/* ============================
   DATA TIDAK LOLOS
============================ */
const failedData = [
  // Mifta dihapus dari daftar ini
  "Serli Maharani Putri Yustina",
  "TOPAN SYAHPUTRA",
  "Ridhwan Purwahdani"
];

// Definisi Warna
const GULF_BLUE = "#9FD1ED";
const GULF_ORANGE = "#F05822";
const GULF_DARK_BG = "#0F0F0F";
const RED_ERROR = "#EF4444";

export default function Announcement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [resultStatus, setResultStatus] = useState<"LOLOS" | "TIDAK_LOLOS" | "NOT_FOUND" | null>(null);
  const [matchedUser, setMatchedUser] = useState<{ name: string; divisi?: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = () => {
    if (!searchTerm.trim()) return;
    setLoading(true);
    
    setTimeout(() => {
      const formattedSearch = searchTerm.toLowerCase().trim();
      
      const foundLolos = announcementData.find(
        (item) => item.name.toLowerCase().trim() === formattedSearch
      );

      if (foundLolos) {
        setMatchedUser(foundLolos);
        setResultStatus("LOLOS");
      } else {
        const foundGagal = failedData.find(
          (name) => name.toLowerCase().trim() === formattedSearch
        );

        if (foundGagal) {
          setMatchedUser({ name: foundGagal });
          setResultStatus("TIDAK_LOLOS");
        } else {
          setMatchedUser(null);
          setResultStatus("NOT_FOUND");
        }
      }
      setLoading(false);
    }, 1000);
  };

  const closePopup = () => {
    setResultStatus(null);
    setMatchedUser(null);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans relative overflow-hidden">
      <Navbar />

      <div className="pt-32 sm:pt-40 pb-20 px-6 max-w-4xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight mb-6"
        >
          PENGUMUMAN KELULUSAN
          <br />
          <span 
            style={{ backgroundImage: `linear-gradient(to right, ${GULF_BLUE}, white, ${GULF_ORANGE})` }} 
            className="text-transparent bg-clip-text text-2xl sm:text-4xl md:text-5xl"
          >
            STAFF AHLI HMPSTI 2026
          </span>
        </motion.h1>

        <p className="text-gray-400 mb-10 text-base sm:text-lg">
          Silakan masukkan nama lengkap Anda untuk melihat hasil seleksi.
        </p>

        <div className="max-w-xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Ketik Nama Lengkap di sini..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
            className="w-full px-6 sm:px-8 py-4 sm:py-5 rounded-2xl bg-white/5 border-2 border-white/10 text-white text-center text-lg sm:text-xl font-medium focus:border-[#9FD1ED] focus:bg-[#0F0F0F] outline-none transition-all placeholder:text-gray-500"
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCheck}
            style={{ backgroundColor: GULF_BLUE }}
            className="w-full py-4 rounded-2xl text-white font-black text-lg tracking-widest shadow-lg shadow-blue-500/20 transition-all"
          >
            {loading ? "MEMPROSES..." : "CEK HASIL SELEKSI"}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {resultStatus === "LOLOS" && matchedUser && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-[#050505]/95 backdrop-blur-xl z-[999] px-4 py-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{ backgroundColor: GULF_DARK_BG, borderColor: GULF_BLUE }}
              className="p-6 sm:p-8 md:p-12 rounded-[30px] sm:rounded-[40px] border-[3px] text-center max-w-[550px] w-full max-h-[95vh] overflow-y-auto overflow-x-hidden shadow-2xl shadow-blue-500/10 relative"
            >
               <div style={{ backgroundColor: GULF_BLUE }} className="absolute -top-24 -left-24 w-64 h-64 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

              <div className="mb-6 sm:mb-8 relative z-10">
                <h2 style={{ color: GULF_BLUE }} className="text-4xl sm:text-5xl md:text-6xl font-black italic tracking-tighter mb-2">
                  CONGRATS!
                </h2>
                <div style={{ backgroundColor: GULF_BLUE }} className="h-1.5 w-20 sm:w-24 mx-auto rounded-full"></div>
              </div>

              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 sm:mb-10 relative z-10">
                Selamat
                <span className="font-bold text-white text-xl sm:text-2xl md:text-3xl block my-3">{matchedUser.name}</span>
                Anda dinyatakan <span className="font-black italic text-xl sm:text-2xl" style={{ color: GULF_BLUE }}>LOLOS.</span>
              </p>

              <div style={{ backgroundColor: `${GULF_ORANGE}15`, borderColor: `${GULF_ORANGE}50` }} className="border-l-4 rounded-r-xl p-4 sm:p-5 mb-8 text-left relative z-10">
                <p style={{ color: GULF_ORANGE }} className="font-bold text-sm sm:text-base mb-1 sm:mb-2 flex items-center gap-2">
                  ⚠️ INSTRUKSI WAJIB:
                </p>
                <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                  Grup WhatsApp saat ini bersifat privat. Hubungi admin terlebih dahulu untuk verifikasi identitas sebelum bergabung ke grup resmi.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4 font-bold relative z-10">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href={WA_GROUP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  style={{ backgroundColor: GULF_BLUE }}
                  className="w-full py-4 rounded-2xl text-[#050505] flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  JOIN GRUP
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href={WA_ADMIN_LINK}
                  target="_blank"
                  rel="noreferrer"
                  style={{ backgroundColor: GULF_ORANGE }}
                  className="w-full py-4 rounded-2xl text-white flex items-center justify-center gap-2 transition-all shadow-md"
                >
                   CHAT ADMIN
                </motion.a>
              </div>

              <button
                onClick={closePopup}
                className="mt-6 sm:mt-10 text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold py-2 px-4 relative z-10"
              >
                [ Tutup Pengumuman ]
              </button>
            </motion.div>
          </motion.div>
        )}

        {resultStatus === "TIDAK_LOLOS" && matchedUser && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-[#050505]/95 backdrop-blur-xl z-[999] px-4 py-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{ backgroundColor: GULF_DARK_BG, borderColor: RED_ERROR }}
              className="p-6 sm:p-8 md:p-12 rounded-[30px] sm:rounded-[40px] border-[3px] text-center max-w-[500px] w-full max-h-[95vh] overflow-y-auto overflow-x-hidden shadow-2xl shadow-red-900/20 relative"
            >
               <div style={{ backgroundColor: RED_ERROR }} className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[120px] opacity-15 pointer-events-none"></div>
              <h2 style={{ color: RED_ERROR }} className="text-3xl sm:text-4xl md:text-5xl font-black italic mb-4 sm:mb-6 relative z-10">TETAP SEMANGAT!</h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 relative z-10">Halo, <span className="font-bold text-white">{matchedUser.name}</span>. Terima kasih atas partisipasimu.</p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8 text-left relative z-10">
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed text-center">Mohon maaf, saat ini kamu <b>belum berhasil lolos</b> sebagai Staff Ahli HMPSTI 2026. Jadikan ini pengalaman untuk terus berkembang!</p>
              </div>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={closePopup} style={{ backgroundColor: RED_ERROR }} className="px-8 sm:px-10 py-3 rounded-full font-bold text-white text-sm sm:text-lg transition-all uppercase tracking-wider relative z-10 shadow-lg">Tutup Papan</motion.button>
            </motion.div>
          </motion.div>
        )}

        {resultStatus === "NOT_FOUND" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-[#050505]/95 backdrop-blur-xl z-[999] px-4 py-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{ backgroundColor: GULF_DARK_BG, borderColor: RED_ERROR }}
              className="p-6 sm:p-8 md:p-12 rounded-[30px] sm:rounded-[40px] border-[3px] text-center max-w-[500px] w-full max-h-[95vh] overflow-y-auto overflow-x-hidden shadow-2xl shadow-red-900/20 relative"
            >
               <div style={{ backgroundColor: RED_ERROR }} className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
              <h2 style={{ color: RED_ERROR }} className="text-3xl sm:text-4xl md:text-5xl font-black italic mb-4 sm:mb-6 relative z-10">MOHON MAAF.</h2>
              <p className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-relaxed mb-6 sm:mb-8 relative z-10">"Maaf, nama kamu tidak terdaftar."</p>
              <p className="text-gray-400 text-sm sm:text-base mb-8 sm:mb-10 leading-relaxed relative z-10">Pastikan penulisan nama sudah benar sesuai data pendaftaran.</p>
              <motion.button whileHover={{ scale: 1.05, backgroundColor: `${RED_ERROR}20` }} whileTap={{ scale: 0.95 }} onClick={closePopup} style={{ borderColor: RED_ERROR, color: RED_ERROR }} className="px-8 sm:px-10 py-3 rounded-full border-2 font-bold text-sm sm:text-lg transition-all uppercase tracking-wider relative z-10">Coba Cari Lagi</motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}