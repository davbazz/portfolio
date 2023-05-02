/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        back: '#fff',
        main: '#374151',
        secondary: '#6366f1',
        third: '#e0e7ff',
      },
    },
  },
  plugins: [],
}
