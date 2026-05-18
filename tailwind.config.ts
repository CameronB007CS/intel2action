import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight:  "#050c17",
        navy:      "#0a1628",
        charcoal:  "#0f1f38",
        panel:     "#14243d",
        border: {
          DEFAULT: "#1e3a5f",
          bright:  "#2a5080",
        },
        amber: {
          DEFAULT: "#f59e0b",
          dim:     "#b37208",
          bright:  "#fbbf24",
        },
        cyan: {
          DEFAULT: "#06b6d4",
          dim:     "#0891b2",
        },
        slate: {
          DEFAULT: "#94a3b8",
          dim:     "#64748b",
        },
        ivory: {
          DEFAULT: "#f1f5f9",
          dim:     "#cbd5e1",
        },
      },
      fontFamily: {
        tactical: ["Rajdhani", "sans-serif"],
        mono:     ["Space Mono", "monospace"],
        body:     ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(#1e3a5f 1px, transparent 1px), linear-gradient(90deg, #1e3a5f 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-60": "60px 60px",
      },
      clipPath: {
        tactical:     "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
        "tactical-sm":"polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
