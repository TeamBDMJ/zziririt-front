/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "light",
      "emerald",
      "dark",
      "cupcake",
      {
        mytheme: {
          "primary": "#7800ff",
          "secondary": "#007600",
          "accent": "#0071ff",
          "neutral": "#2e281e",
          "base-100": "#fafffc",
          "info": "#00a3ff",
          "success": "#00c096",
          "warning": "#e77a00",
          "error": "#de002e",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}