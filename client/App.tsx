import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// --- IMPORT HALAMAN ---
// Pastikan file-file ini sudah ada di folder /pages ya!
import Home from "./pages/Home";
import Struktur from "./pages/Struktur";
import Departemen from "./pages/Departemen";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// --- COMPONENT UTILITY: SCROLL TO TOP ---
// Fungsinya: Biar setiap ganti halaman, scroll otomatis balik ke paling atas
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
        {/* Pasang ScrollToTop di dalam BrowserRouter */}
        <ScrollToTop />
        
        <Routes>
          {/* Rute Utama */}
          <Route path="/" element={<Home />} />
          
          {/* Rute Halaman Lain */}
          <Route path="/struktur" element={<Struktur />} />
          <Route path="/departemen" element={<Departemen />} />
          
          {/* Rute 404 (Kalau link ngawur) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;