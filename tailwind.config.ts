import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        // --- WARNA TEMA GULF LIVERY (Mobil Balap) ---
        primary: "#87CEEB",     // Biru Muda (Sky Blue)
        secondary: "#FF7F24",   // Oranye Balap
        dark: "#0F1014",        // Hitam Garasi (Sangat Gelap)
        surface: "#1E1E24",     // Abu Gelap (Untuk Kotak/Card)

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;