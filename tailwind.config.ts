import type { Config } from "tailwindcss";

/**
 * Tailwind configuration for Prestige Racing USA.
 * – Restores ShadCN colour tokens (`border`, `ring`, …).
 * – Adds app-specific brand colours (`primary`, `accent`, …).
 * – Safelists JIT-purged utilities like `border-border`.
 */
const config: Config = {
  darkMode: ["class"],

  /* ---------------------------------------------------------------------- */
  /*  Files Tailwind should scan                                             */
  /* ---------------------------------------------------------------------- */
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  /* ---------------------------------------------------------------------- */
  /*  Always-keep utilities ShadCN applies in CSS (not visible to the JIT)  */
  /* ---------------------------------------------------------------------- */
  safelist: [
    // ShadCN core
    "border-border",
    "bg-background",
    "text-foreground",
    "ring-ring",
    "ring-offset-background",
    // Brand-specific
    "text-primary",
    "bg-primary",
    "text-accent",
    "bg-accent",
    "hover:bg-accent-hover",
    "text-muted",
    "bg-muted",
  ],

  /* ---------------------------------------------------------------------- */
  /*  Theme                                                                  */
  /* ---------------------------------------------------------------------- */
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

      /* ---------- Core design-system tokens ---------- */
      colors: {
        /* ShadCN fundamentals (stay in HSL so CSS variables keep working) */
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background, 0 0% 100%))",
        foreground: "hsl(var(--foreground, 219 64% 27%))",

        /* App-specific brand palette */
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

        /* Optional tokens used by future ShadCN components */
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },

      /* ---------- Visual effects ---------- */
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(21,62,122,0.8) 0%, rgba(217,46,48,0.6) 100%)",
        "section-gradient":
          "linear-gradient(180deg, rgba(244,244,244,0.9) 0%, rgba(255,255,255,0.95) 100%)",
      },

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

  /* ---------------------------------------------------------------------- */
  /*  Plugins                                                                */
  /* ---------------------------------------------------------------------- */
  plugins: [
    require("tailwindcss-animate"), // ShadCN motion helpers
  ],
};

export default config;