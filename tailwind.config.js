/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    screens: {
       
      xs: { min: '0px', max: '390px' },
      sm: { min: '768px', max: '5200px' },
    },
    fontFamily: {
      cairo: ['Cairo', 'sans-serif'],
    },
  },
  plugins: [],
}}