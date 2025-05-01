import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "diagonal-split": "linear-gradient(135deg, var(--marketing-bg) 50%, var(--coding-bg) 50%)",
      },
      colors: {
        marketing: {
          background: "#0f0a14", // Background scuro con tonalità viola per marketing
          primary: "#ffb347",    // Arancio caldo per marketing
          accent: "#ffb347",     // Arancio caldo per accent
          font: "#f5f5f5",       // Testo chiaro
        },
        coding: {
          background: "#0a1414", // Background scuro con tonalità verde per coding
          primary: "#7ee787",    // Verde neon per coding
          accent: "#7ee787",     // Verde neon per accent 
          font: "#e0e0e0",       // Testo chiaro
        }
      },
      // Animazione Marquee
      animation: {
        marquee: 'marquee 15s linear infinite',
        marquee2: 'marquee2 15s linear infinite',
        'bounce-subtle': 'bounce-subtle 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '1',
            boxShadow: '0 0 20px rgba(var(--tw-shadow-color), 0.7)'
          },
          '50%': { 
            opacity: '0.7',
            boxShadow: '0 0 30px rgba(var(--tw-shadow-color), 0.9)'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config; 