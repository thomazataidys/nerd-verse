import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        nerd: {
          bg: "#07090e",
          surface: "#0e131f",
          card: "#131929",
          border: "#1f293d",
          accent: "#00ff66",
          cyan: "#00f0ff",
          purple: "#9d4edd",
          fuchsia: "#ff007f",
          amber: "#ffd166",
          orange: "#ff5400",
          surfaceDark: "#0d1117",
          panelDark: "#151b26",
        },
      },
      fontFamily: {
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      boxShadow: {
        "neon-green": "0 0 25px -5px rgba(0, 255, 102, 0.45)",
        "neon-cyan": "0 0 25px -5px rgba(0, 240, 255, 0.45)",
        "neon-purple": "0 0 25px -5px rgba(157, 78, 221, 0.45)",
        "neon-orange": "0 0 25px -5px rgba(255, 84, 0, 0.45)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scanline": "scanline 8s linear infinite",
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
