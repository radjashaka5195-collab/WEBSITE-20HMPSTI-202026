import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Tambahkan 'Navigate' di sini untuk fungsi redirect
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";

// --- IMPORT HALAMAN ---
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Halaman ini kita sembunyikan dulu (Commented Out)
// import Struktur from "./pages/Struktur";
// import Departemen from "./pages/Departemen";

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
        {/* Pasang ScrollToTop di dalam BrowserRouter */}
        <ScrollToTop />
        
        <Routes>
          {/* Rute Utama (Home) - INI YANG AKTIF */}
          <Route path="/" element={<Home />} />
          
          {/* --- SECURITY GUARD (ANTI USIL) --- */}
          {/* Kalau ada yang coba akses /struktur atau /departemen, tendang balik ke Home */}
          <Route path="/struktur" element={<Navigate to="/" replace />} />
          <Route path="/departemen" element={<Navigate to="/" replace />} />
          
          {/* Rute Asli (Disimpan dulu, nanti kalau sudah siap tinggal buka comment-nya) */}
          {/* <Route path="/struktur" element={<Struktur />} /> */}
          {/* <Route path="/departemen" element={<Departemen />} /> */}
          
          {/* Rute 404 (Kalau link ngawur banget misal /asdfg) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;