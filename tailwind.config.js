/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        notosansjp: ['Noto Sans JP', 'sans-serif'],
        ubuntumono: ['Ubuntu Mono', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'FAFBFD': '#FAFBFD',
        'A9A9A9': '#A9A9A9',
        '4F4F4F': '#4F4F4F',
        'E0E0E0': '#E0E0E0',
        'AEAEAE': '#AEAEAE'
      },
    },
  },
  plugins: [],
}

