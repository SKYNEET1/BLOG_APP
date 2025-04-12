/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        "banner-bg" : 'url("./src/assets/banner-bg.jpg")',
      }
    },
  },
  plugins: [],
}