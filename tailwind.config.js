/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#0f172a',
        },
        gray: {
          600: '#363636',
          700: '#333333',
          800: '#242424',
          900: '#111111',
        },
      },
    },
  },
  plugins: [],
}