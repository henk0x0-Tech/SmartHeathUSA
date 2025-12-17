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
          light: '#e0f2fe', // sky-100
          DEFAULT: '#0ea5e9', // sky-500
          dark: '#0284c7', // sky-600
          teal: '#14b8a6', // teal-500
          tealDark: '#0d9488', // teal-600
          bg: '#f8fafc', // slate-50
        }
      },
      container: {
        center: true,
        padding: '1rem',
      }
    },
  },
  plugins: [],
}
