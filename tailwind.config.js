/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
      },
      width: "100%",
      screens: {
        DEFAULT: "100%",
      },
    },
    colors: {
      transparent: "transparent",
      offWhite: "#F2F5F7",
      neutral: {
        50: "#f6f5f5",
        100: "#e7e6e6",
        200: "#d2cfd0",
        300: "#b3adae",
        400: "#8c8485",
        500: "#71696a",
        600: "#605a5b",
        700: "#524c4d",
        800: "#474343",
        900: "#3b3838", //default for set
        950: "#272526",
      },
      primary: {
        DEFAULT: "#0E2F2D",
        hover: "#1F504B",
        text: "#f2f5f7",
      },
      secondary: {
        DEFAULT: "#2B8C88",
        hover: "#49B8B2",
        text: "#F2F5F7",
      },
    },
    fontFamily: {
      headings: ["Exo", "sans-serif"],
      copy: ["Numans", "sans-serif"],
      links: ["Carme", "sans-serif"],
    },
    fontSize: {
      xs: ["0.75rem", "1rem"],
      sm: ["0.875rem", "1.25rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.75rem"],
      xl: ["1.25rem", "1.75rem"],
      "2xl": ["1.5rem", "2rem"],
      "3xl": ["1.875rem", "2.25rem"],
      "4xl": ["2.25rem", "2.5rem"],
      "5xl": ["3rem", "1"],
      "6xl": ["3.75rem", "1"],
      "7xl": ["4.5rem", "1"],
      "8xl": ["6rem", "1"],
      "9xl": ["8rem", "1"],
    },
    extend: {
      backgroundImage: {
        about:
          "linear-gradient(to right, rgb(215, 213, 205, 0.5) 0%, rgb(244, 244, 242,0.5) 100%), url('./backgrounds/codebg.jpg')",
        skills:
          "linear-gradient(to right, rgb(215, 213, 205, 0.5) 0%, rgb(244, 244, 242,0.5) 100%), url('./backgrounds/skillsbg.jpg')",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme, addVariant }) {
      addVariant("not-last", "&:not(:last-child)");
      addBase({
        h1: {
          fontFamily: theme("fontFamily.headings"),
          fontSize: theme("fontSize.8xl"),
          lineHeight: "120%",
          fontWeight: "700",
          margin: "2rem 0 1rem 0",
          color: theme("colors.offWhite"),
        },
        h2: {
          fontFamily: theme("fontFamily.headings"),
          fontSize: theme("fontSize.6xl"),
          lineHeight: "120%",
          fontWeight: "700",
          margin: "2rem 0 1rem 0",
          color: theme("colors.secondary.DEFAULT"),
        },
        h3: {
          fontFamily: theme("fontFamily.headings"),
          fontSize: theme("fontSize.3xl"),
          lineHeight: "120%",
          fontWeight: "500",
          margin: "2rem 0 1rem 0",
          color: theme("colors.secondary.DEFAULT"),
        },
        h4: {
          fontFamily: theme("fontFamily.copy"),
          fontSize: theme("fontSize.2xl"),
          lineHeight: "120%",
          fontWeight: "700",
          margin: "2rem 0 1rem 0",
          color: theme("colors.secondary.DEFAULT"),
        },
        h5: {
          fontFamily: theme("fontFamily.copy"),
          fontSize: theme("fontSize.lg"),
          lineHeight: "120%",
          fontWeight: "700",
          margin: "2rem 0 1rem 0",
          color: theme("colors.secondary.DEFAULT"),
        },
        h6: {
          fontFamily: theme("fontFamily.copy"),
          fontSize: theme("fontSize.base"),
          lineHeight: "120%",
          fontWeight: "300",
          margin: "2rem 0 1rem 0",
          color: theme("colors.secondary.DEFAULT"),
        },
        p: {
          fontSize: theme("fontSize.base"),
          fontFamily: theme("fontFamily.copy"),
          lineHeight: "150%",
          margin: "1rem 0",
        },
        a: {
          fontFamily: theme("fontFamily.links"),
          lineHeight: "120%",
          margin: "1rem 0",
        },
      });
    }),
  ],
};
