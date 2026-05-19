import { AspirasiFab } from "@/components/common/AspirasiFab";
import Footer from "@/components/layouts/Footer";
import { Navbar } from "@/components/layouts/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const AppLayout = () => {
  const queryClient = new QueryClient();
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Navbar />

        <Outlet />

        <AspirasiFab />
        <Footer />
      </TooltipProvider>
      <ScrollToTop />
    </QueryClientProvider>
  );
};

export default AppLayout;
