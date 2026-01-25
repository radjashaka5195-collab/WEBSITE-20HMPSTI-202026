import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// --- IMPORT COMPONENT ---
import { AspirasiFab } from "./components/AspirasiFab"; 

// --- IMPORT HALAMAN ---
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Announcement from "./pages/Announcement";
import Struktur from "./pages/Struktur";
import Departemen from "./pages/Departemen";
import KalenderPage from "./pages/KalenderPage"; // <-- NAMA BARU

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
          
          {/* Rute Struktur */}
          <Route path="/struktur" element={<Struktur />} />
          
          {/* Rute Departemen */}
          <Route path="/departemen" element={<Departemen />} />

          {/* Rute Kalender (IFRAME) */}
          <Route path="/kalender" element={<KalenderPage />} /> 
          
          {/* Rute 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* --- TOMBOL ASPIRASI (FAB) --- */}
        <AspirasiFab />

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;