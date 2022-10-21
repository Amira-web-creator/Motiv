/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#ffffd6",
          100: "#ffffcc",
          200: "#fffdc2",
          300: "#f5f3b8",
          400: "#ebe9ae",
          500: "#e1dfa4",
          600: "#d7d59a",
          700: "#cdcb90",
          800: "#c3c186",
          900: "#b9b77c",
        },
        cash: {
          50: "#ffffec",
          100: "#ffffe2",
          200: "#fffed8",
          300: "#fff4ce",
          400: "#ffeac4",
          500: "#ffe0ba",
          600: "#f5d6b0",
          700: "#ebcca6",
          800: "#e1c29c",
          900: "#d7b892",
        },
      },
    },
    screens: {
      xl: { max: "1200px" },
      lg: { max: "991px" },
      md: { max: "767" },
      sm: { max: "550px" },
      xsm: { max: "375px" },
    },
  },
  plugins: [],
};
