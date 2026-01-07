import express, { type Express } from "express";

// Kita hapus 'async' dan pastikan return type-nya 'Express'
export function createServer(): Express {
  const app = express();

  // Middleware dasar
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // --- API ROUTES ---
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Server is running smoothly" });
  });

  // Return aplikasi Express saja (bukan server http yang sedang jalan)
  return app;
}