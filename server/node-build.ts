import * as path from "path";
import * as express from "express";
import { createServer } from "./index";
import { createServer as createHttpServer } from "http";

// 1. Inisialisasi Express App
const app = createServer();
const port = process.env.PORT || 3000;

// 2. Setup folder dist/spa (Folder hasil build Frontend)
// Menggunakan import.meta.dirname karena Node versi 20+
const __dirname = import.meta.dirname;
// Pastikan folder ini sesuai settingan vite build kamu (biasanya 'dist')
const distPath = path.join(__dirname, "../dist"); 

// Serve static files (File frontend React/Vite)
app.use(express.static(distPath));

// 3. Handle semua request yang bukan API -> Arahkan ke index.html (React Router)
app.get("*", (req, res) => {
  // Jangan berikan index.html jika user mengakses API yang salah
  if (req.path.startsWith("/api")) {
    return res.status(404).json({ error: "API endpoint not found" });
  }

  // Kirim file index.html agar React yang menangani routing
  res.sendFile(path.join(distPath, "index.html"));
});

// 4. Buat HTTP Server dan jalankan
const server = createHttpServer(app);

server.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
  console.log(`🔧 API Check: http://localhost:${port}/api/health`);
});

// Graceful shutdown (Agar server mati dengan rapi saat di-stop)
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});