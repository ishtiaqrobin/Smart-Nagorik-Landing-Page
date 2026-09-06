/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfdf7',
          100: '#d1faee',
          200: '#a7f3df',
          300: '#6ee7cc',
          400: '#34d3b5',
          500: '#00b795', // Primary Smart Nagorik green
          600: '#00a384',
          700: '#04826b',
          800: '#086757',
          900: '#0c5549',
        },
        primary: {
          DEFAULT: '#00b795',
          hover: '#009e80',
          light: '#e6f8f4',
        }
      },
      fontFamily: {
        bangla: ['SolaimanLipi', 'sans-serif'],
      },
      boxShadow: {
        'badge': '0 4px 20px -2px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};
