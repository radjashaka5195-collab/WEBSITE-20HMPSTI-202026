"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Terminal dihapus karena sudah diganti logo gambar
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Fungsi Utility
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Struktur", path: "/struktur" },
    { name: "Departemen", path: "/departemen" },
  ];

  return (
    <>
      <nav className={cn("fixed top-0 left-0 right-0 z-[100] transition-all duration-300", isScrolled ? "bg-black/80 backdrop-blur-md border-b border-[#1D77BF]/30 py-4" : "bg-transparent border-transparent py-6")}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* BAGIAN LOGO KIRI ATAS (UPDATED) */}
          <Link to="/" className="relative z-[101] cursor-pointer font-black text-xl tracking-tighter flex items-center gap-3 text-white group">
            {/* Logo Gambar */}
            <img 
              src="/assets/logos/logo-kabinet.png" 
              alt="Logo Kabinet Innovara" 
              className="h-10 w-auto object-contain drop-shadow-[0_0_10px_rgba(51,165,211,0.5)] transition-transform group-hover:scale-105" 
            />
            
            {/* Teks Nama Kabinet (Bisa dihapus kalau di gambarnya sudah ada tulisan) */}
            <span className="hidden sm:block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:to-[#33A5D3] transition-all">
              KABINET INNOVARA
            </span>
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className={cn("text-sm font-bold uppercase transition-colors tracking-wider relative group", location.pathname === link.path ? "text-[#33A5D3]" : "text-white/70 hover:text-[#33A5D3]")}>
                {link.name}
                {/* Garis bawah animasi saat hover/aktif */}
                <span className={cn("absolute -bottom-1 left-0 h-[2px] bg-[#33A5D3] transition-all duration-300", location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full")}></span>
              </Link>
            ))}
          </div>

          {/* TOMBOL MENU MOBILE */}
          <button className="relative z-[101] md:hidden text-white hover:text-[#33A5D3] transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[90] bg-[#050505]/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8">
             {navLinks.map((link) => (
                <Link key={link.name} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-black text-white hover:text-[#33A5D3] uppercase tracking-tight transition-transform hover:scale-110">
                  {link.name}
                </Link>
             ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};