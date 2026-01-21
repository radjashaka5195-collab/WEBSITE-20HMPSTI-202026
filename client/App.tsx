import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";

// --- IMPORT HALAMAN ---
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Announcement from "./pages/Announcement"; // Import Halaman Pengumuman

// Halaman ini sudah aktif import-nya
import Struktur from "./pages/Struktur";
import Departemen from "./pages/Departemen";

const queryClient = new QueryClient();

// --- COMPONENT UTILITY: SCROLL TO TOP ---
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// --- MAIN APP ---
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        
        <Routes>
          {/* Rute Utama (Home) */}
          <Route path="/" element={<Home />} />
          
          {/* Rute Pengumuman */}
          <Route path="/pengumuman" element={<Announcement />} />
          
          {/* --- SECURITY GUARD (SUDAH DIMATIKAN) --- */}
          {/* Baris di bawah ini sengaja di-comment biar tidak menendang user ke Home lagi */}
          {/* <Route path="/struktur" element={<Navigate to="/" replace />} /> */}
          {/* <Route path="/departemen" element={<Navigate to="/" replace />} /> */}
          
          {/* --- RUTE ASLI (SUDAH DIAKTIFKAN KEMBALI) --- */}
          <Route path="/struktur" element={<Struktur />} />
          <Route path="/departemen" element={<Departemen />} />
          
          {/* Rute 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;