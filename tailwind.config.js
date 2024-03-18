/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c031c7",
        secondary: "#ff00ff",
        tertiary: {
          dark: "#2a0134",
          light: "#f2c641"
        }
      },
      fontFamily: {
        inter: ['var(--font-inter)', ...fontFamily.sans],
        jetBrains: ['var(--font-jetbrains)', ...fontFamily.mono]
      }
    },
  },
  plugins: [],
};
