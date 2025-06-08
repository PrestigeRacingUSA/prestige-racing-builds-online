import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],

  // 1️⃣  Files Tailwind should scan for class names
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  // 2️⃣  Utilities that MUST survive PurgeCSS
  safelist: [
    "text-primary",
    "bg-primary",
    "text-primary-foreground",
    "bg-primary/95",
    "text-secondary",
    "bg-secondary",
    "text-accent",
    "bg-accent",
    "hover:bg-accent-hover",
    "text-muted",
    "bg-muted",
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },

    extend: {
      /* ---------- Typography ---------- */
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

      /* ---------- Custom colour palette ---------- */
      colors: {
        background: "#FFFFFF",
        foreground: "#153E7A",

        primary: {
          DEFAULT: "#153E7A",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#333333",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#D92E30",
          hover: "#B72828",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F4F4F4",
          foreground: "#333333",
        },
      },

      /* ---------- Gradients & images ---------- */
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(21,62,122,0.8) 0%, rgba(217,46,48,0.6) 100%)",
        "section-gradient":
          "linear-gradient(180deg, rgba(244,244,244,0.9) 0%, rgba(255,255,255,0.95) 100%)",
      },

      /* ---------- Radii ---------- */
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      /* ---------- Animations ---------- */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
        "slide-in": "slide-in 0.6s ease-out",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};

export default config;
