/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: [...defaultTheme.fontFamily.mono],
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
      },
    },
    screens: {
      sm: "40rem",
      md: "48rem",
      lg: "64rem",
      xl: "80rem",
      "2xl": "96rem",
    },
  },
  plugins: [],
};
