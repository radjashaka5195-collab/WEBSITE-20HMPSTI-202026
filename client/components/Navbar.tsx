"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Terminal, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Fungsi Utility (cn) ditaruh di sini agar bisa dipakai semua halaman
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
          <Link to="/" className="relative z-[101] cursor-pointer font-black text-xl tracking-tighter flex items-center gap-2 text-white">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white bg-gradient-to-br from-[#1D77BF] to-[#33A5D3] shadow-[0_0_15px_rgba(51,165,211,0.5)]"><Terminal size={18} /></div>
            <span>KABINET INNOVARA</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className={cn("text-sm font-bold uppercase transition-colors tracking-wider", location.pathname === link.path ? "text-[#33A5D3]" : "text-white/70 hover:text-[#33A5D3]")}>
                {link.name}
              </Link>
            ))}
          </div>
          <button className="relative z-[101] md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[90] bg-[#050505] flex flex-col justify-center items-center gap-8">
             {navLinks.map((link) => (
                <Link key={link.name} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-black text-white hover:text-[#33A5D3] uppercase">{link.name}</Link>
             ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};