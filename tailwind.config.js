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
      boxShadow: {
        normal: '0px 2px 3px 0px rgba(51, 51, 51, 0.20)'
      },
      screens: {
        verySmall: '400px',
      },
      colors: {
        'FAFBFD': '#FAFBFD',
        'A9A9A9': '#A9A9A9',
        '4F4F4F': '#4F4F4F',
        'E0E0E0': '#E0E0E0',
        'AEAEAE': '#AEAEAE',
        'EAF0FF': '#EAF0FF',
        '3D5AFE': '#3D5AFE',
        '2962FF': '#2962FF',
        '3F3F3F': '#3F3F3F',
        '455A64': '#455A64',
        'D32F2F': '#D32F2F',
        '0039CB': '#0039CB',
        '1C313A': '#1C313A',
        '9A0007': '#9A0007',
        '000': '#000',
        '9E9E9E': '#9E9E9E',
        '0039CB': '#0039CB',
        '828282': '#828282',
        '333': '#333',
        'F2F2F2': '#F2F2F2',
      },
    },
  },
  plugins: [],
}

