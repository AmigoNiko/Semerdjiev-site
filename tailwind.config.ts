import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#2E4A3D",
          light: "#3D6350",
          dark: "#1A2E25",
          950: "#0F1D17",
        },
        cream: {
          DEFAULT: "#F6F1E8",
          light: "#FBF9F5",
          dark: "#EDE5D8",
        },
        brown: {
          DEFAULT: "#865D3B",
          light: "#A07350",
          dark: "#6B4A2F",
        },
        terra: {
          DEFAULT: "#C65D3B",
          light: "#D87A5C",
          dark: "#A84D31",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
