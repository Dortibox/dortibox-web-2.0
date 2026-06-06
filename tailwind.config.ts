import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // FWT Corporate — investor/partner sections
        navy: {
          DEFAULT: "#2A3663",
          light: "#3D4F8A",
          dark: "#1C2444",
        },
        gold: {
          DEFAULT: "#B59F78",
          light: "#CDB99A",
          dark: "#8F7A55",
        },
        sage: {
          DEFAULT: "#D8DBBD",
          light: "#ECEEDE",
          dark: "#B8BC98",
        },
        offwhite: {
          DEFAULT: "#FAF6E3",
          dark: "#F0EAC8",
        },

        // DortiBox Product — consumer sections
        forest: {
          DEFAULT: "#3A6B4A",
          light: "#EBF2EE",
          mid: "#5A8F6A",
          dark: "#2D5239",
          deeper: "#1E3828",
        },
        amber: {
          DEFAULT: "#E8A020",
          light: "#FDF3DC",
          dark: "#C8880A",
          hover: "#D4920E",
        },

        // Neutrals
        charcoal: "#1A1A2E",
        muted: "#6B7280",
        "muted-light": "#9CA3AF",
      },

      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-open-sans)", "sans-serif"],
      },

      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-sm": ["2rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },

      spacing: {
        "section": "6rem",
        "section-sm": "4rem",
      },

      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },

      boxShadow: {
        "card": "0 4px 24px rgba(42, 54, 99, 0.08)",
        "card-hover": "0 8px 40px rgba(42, 54, 99, 0.14)",
        "amber": "0 4px 20px rgba(232, 160, 32, 0.35)",
        "forest": "0 4px 20px rgba(58, 107, 74, 0.35)",
      },

      backgroundImage: {
        "forest-gradient": "linear-gradient(135deg, #2D5239 0%, #3A6B4A 50%, #5A8F6A 100%)",
        "navy-gradient": "linear-gradient(135deg, #1C2444 0%, #2A3663 100%)",
        "amber-gradient": "linear-gradient(135deg, #C8880A 0%, #E8A020 100%)",
        "hero-mesh": "radial-gradient(at 40% 20%, #3A6B4A 0px, transparent 50%), radial-gradient(at 80% 0%, #2D5239 0px, transparent 50%), radial-gradient(at 0% 50%, #1E3828 0px, transparent 50%)",
      },

      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        "slide-in-left": "slideInLeft 0.5s ease forwards",
        "count-up": "countUp 2s ease forwards",
      },

      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },

      typography: {
        DEFAULT: {
          css: {
            fontFamily: "var(--font-open-sans)",
            color: "#1A1A2E",
            "h1, h2, h3, h4": {
              fontFamily: "var(--font-poppins)",
              fontWeight: "700",
              color: "#2A3663",
            },
            a: {
              color: "#3A6B4A",
              "&:hover": { color: "#E8A020" },
            },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
