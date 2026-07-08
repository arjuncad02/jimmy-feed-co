import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D62828",
          50: "#FDECEC",
          100: "#FBD6D6",
          200: "#F3A3A3",
          300: "#EB7070",
          400: "#E24C4C",
          500: "#D62828",
          600: "#B21F1F",
          700: "#8C1818",
          800: "#661111",
          900: "#400A0A",
        },
        secondary: {
          DEFAULT: "#F77F00",
          50: "#FFF3E0",
          100: "#FFE0B3",
          200: "#FFC875",
          300: "#FCA93D",
          400: "#F98F15",
          500: "#F77F00",
          600: "#C96700",
          700: "#9B4F00",
          800: "#6D3700",
          900: "#3F1F00",
        },
        accent: {
          DEFAULT: "#FCBF49",
          50: "#FFFBF0",
          100: "#FEF1D2",
          200: "#FDE4A5",
          300: "#FDD778",
          400: "#FCCC5C",
          500: "#FCBF49",
          600: "#F5A607",
          700: "#BE8005",
          800: "#875B03",
          900: "#503602",
        },
        dark: "#1F1F1F",
        light: "#FFF8F0",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(31, 31, 31, 0.15)",
        "soft-lg": "0 25px 60px -15px rgba(31, 31, 31, 0.25)",
        glow: "0 0 40px rgba(247, 127, 0, 0.35)",
        glass: "0 8px 32px 0 rgba(31, 31, 31, 0.1)",
      },
      backgroundImage: {
        "warm-gradient": "linear-gradient(135deg, #D62828 0%, #F77F00 50%, #FCBF49 100%)",
        "warm-radial": "radial-gradient(circle at 30% 20%, #FCBF49 0%, #F77F00 45%, #D62828 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out infinite 2s",
        marquee: "marquee 30s linear infinite",
        "spin-slow": "spin 12s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "gradient-move": "gradient-move 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "gradient-move": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
