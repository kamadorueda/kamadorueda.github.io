/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cbgdefault: colors.white,
        cbg: colors.slate["50"],

        coutline: colors.slate["300"],

        ctext: colors.slate["600"],
        ctextdark: colors.slate["900"],

        cfocus: colors.blue["500"],
      },
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
