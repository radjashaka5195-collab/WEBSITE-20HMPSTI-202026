"use client";

import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-24 bg-black text-center border-t border-white/5 relative overflow-hidden z-40">
      {/* Background Gradient Halus */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#33A5D3]/5 pointer-events-none"></div>
      
      {/* Judul Besar Animasi */}
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-[12vw] sm:text-[6rem] font-black text-white uppercase tracking-tighter mb-8 leading-none opacity-100"
      >
          <span className="text-[#33A5D3]">INNO</span><span className="text-[#FF7F24]">VARA</span>
      </motion.h2>

      {/* Copyright Text */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-500 font-mono text-xs sm:text-sm tracking-widest uppercase relative z-10">
          <span>© HMPSTI UB 2026</span>
          <span className="hidden sm:block w-1 h-1 bg-[#33A5D3] rounded-full"></span>
          <span>Kabinet Innovara</span>
          <span className="hidden sm:block w-1 h-1 bg-[#FF7F24] rounded-full"></span>
          <span>Satu Hati, Satu Gerak, TI Jaya!</span>
      </div>
    </footer>
  );
};