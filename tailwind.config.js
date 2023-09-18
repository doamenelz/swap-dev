/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx,ts}", "./**/*.{html,js,tsx,jsx,ts}"],
  theme: {
    extend: {
      display: ["group-hover"],
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        exd: "120rem",
      },
    },
    colors: {
      white: "#fff",
      transparent: "#00000000",
      pageBg: "#fff", //ecf0f5 f9f9fa
      modal: "#00000080",
      primary: {
        25: "#FCFAFF",
        50: "#99E2B4",
        100: "#88D4AB",
        200: "#78C6A3",
        300: "#67B99A",
        400: "#56AB91",
        500: "#469D89",
        600: "#358F80",
        700: "#248277",
        800: "#14746F",
        900: "#036666",
        910: "#3F52E3",
        920: "#2876F9",
      },
      blue: {
        25: "#FEFBF6",
        50: "#eff6ff",
        100: "#e0f2fe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2c70dd",
        700: "#1d66d7",
        800: "#0f5cd2",
        900: "#0052cc",
        950: "#002266",
      },

      gray: {
        25: "#ffffff",
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#eaecf0",
        300: "#d0d5dd", //091e42 d0d5dd
        400: "#98a2b3",
        500: "#667085",
        600: "#475467",
        700: "#344054",
        800: "#1d2939",
        900: "#101828",
        910: "#fafafa",
        920: "#f4f5f7",
        backdrop: "#10182850",
      },
      warning: {
        25: "#FFFCF5",
        50: "#fffaeb",
        100: "#fef0c7",
        200: "#fedf89",
        300: "#fec84b",
        400: "#fdb022",
        500: "#f79009",
        600: "#dc6803",
        700: "#B54708",
      },
      success: {
        25: "#F6FEF9",
        50: "#ECFDF3",
        100: "#D1FADF",
        200: "#A6F4C5",
        300: "#6CE9A6",
        400: "#32D583",
        500: "#12B76A",
        600: "#039855",
        700: "#027A48",
        800: "#05603A",
      },
      error: {
        25: "#FFFBFA",
        50: "#FEF3F2",
        100: "#FEE4E2",
        200: "#FECDCA",
        300: "#FDA29B",
        400: "#F97066",
        500: "#F04438",
        600: "#D92D20",
        700: "#B42318",
        800: "#912018",
        900: "#7A271A",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};