/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Willona", "cursive"],
        imp: ["Mandala", "sans-serif"],
      },
      colors: {
        blue: "#471C95",
        lilaclaro: "#B4A0D5",
        lila: "#B4A0D5",
      },
    },
  },
  plugins: [],
};
