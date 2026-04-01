/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // add any other paths where you use Tailwind classes
  ],
  darkMode: 'class',   // enables class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [],
}