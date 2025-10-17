/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        float: "float 10s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%" : {transform: "translateY(-15%)"},
          "50%" : { transform: "none"},
        },
      },
    },
  },
  plugins: [],
}