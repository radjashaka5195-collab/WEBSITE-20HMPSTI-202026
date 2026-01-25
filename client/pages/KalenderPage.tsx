import { Navbar } from "../components/Navbar";

export default function KalenderPage() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col">
      <Navbar />
      
      {/* Container Iframe Full Screen */}
      <div className="flex-1 pt-20 w-full h-full relative">
        
        {/* Loading Spinner */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500"></div>
        </div>

        {/* Jendela Web Kalender */}
        <iframe 
          src="https://kalender.hmpstiub.web.id/" 
          className="relative z-10 w-full h-[calc(100vh-5rem)] border-none"
          title="Kalender HMPSTI"
          allowFullScreen
        />
      </div>
    </div>
  );
}