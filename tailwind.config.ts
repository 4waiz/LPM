import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0b1b2b",
          800: "#11263d",
          700: "#1a3654"
        },
        charcoal: "#1f2937",
        sand: "#f5f1ea",
        stone: "#e6dfd3",
        emerald: "#0f766e",
        gold: "#b88c4a"
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(17, 24, 39, 0.25)",
        lift: "0 14px 35px -18px rgba(15, 23, 42, 0.35)"
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(1200px circle at 20% 20%, rgba(15, 118, 110, 0.12), transparent 60%), radial-gradient(900px circle at 90% 10%, rgba(184, 140, 74, 0.14), transparent 55%)",
        "section-wash": "linear-gradient(180deg, rgba(245, 241, 234, 0.9), rgba(255,255,255,0.9))"
      }
    }
  },
  plugins: []
} satisfies Config;
