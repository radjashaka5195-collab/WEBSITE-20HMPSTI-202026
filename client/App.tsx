// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Import Components
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { AspirasiFab } from "./components/AspirasiFab"; 

// Import Pages
import Home from "./pages/Home"; // Home di-import, tapi dipake DI DALAM ROUTES aja
import NotFound from "./pages/NotFound";
import Announcement from "./pages/Announcement";
import Struktur from "./pages/Struktur";
import Departemen from "./pages/Departemen";
import KalenderPage from "./pages/KalenderPage";
import Merch from "./pages/Merch"; 

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        
        {/* Navbar Global */}
        <Navbar /> 
        
        {/* Area Gonta-Ganti Halaman */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home cuma boleh ada DISINI */}
          <Route path="/pengumuman" element={<Announcement />} />
          <Route path="/struktur" element={<Struktur />} />
          <Route path="/departemen" element={<Departemen />} />
          <Route path="/kalender" element={<KalenderPage />} /> 
          <Route path="/merch" element={<Merch />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer Global */}
        <Footer /> 

        <AspirasiFab />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;