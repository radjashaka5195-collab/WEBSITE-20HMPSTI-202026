// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";

// Import Components (always loaded - they're on every page)
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { AspirasiFab } from "./components/AspirasiFab"; 

// Lazy-load Pages (code splitting - only load when needed)
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Announcement = lazy(() => import("./pages/Announcement"));
const Struktur = lazy(() => import("./pages/Struktur"));
const Departemen = lazy(() => import("./pages/Departemen"));
const KalenderPage = lazy(() => import("./pages/KalenderPage"));
const Merch = lazy(() => import("./pages/Merch"));

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// Loading fallback yang ringan
const PageLoader = () => (
  <div className="min-h-screen bg-[#050505] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-2 border-sky-500/30 border-t-sky-500 rounded-full animate-spin"></div>
    </div>
  </div>
);

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
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home cuma boleh ada DISINI */}
            <Route path="/struktur" element={<Struktur />} />
            <Route path="/departemen" element={<Departemen />} />
            <Route path="/kalender" element={<KalenderPage />} /> 
            <Route path="/merch" element={<Merch />} /> 
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        {/* Footer Global */}
        <Footer /> 

        <AspirasiFab />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;