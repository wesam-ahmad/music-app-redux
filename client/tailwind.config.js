/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,tsx,jsx}",
    "./src/**/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
