import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Struktur from "./pages/Struktur";
import Department from "./pages/Departemen";
import KalenderPage from "./pages/KalenderPage";
import Merch from "./pages/Merch";
import NotFound from "./pages/NotFound";
import "./global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="struktur" element={<Struktur />} />
          <Route path="departemen" element={<Department />} />
          <Route path="kalender" element={<KalenderPage />} />
          <Route path="merch" element={<Merch />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
