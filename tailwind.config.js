/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./products.html",
    "./signup.html",
    "./blog.html",
    "./about.html",
    "./404.html",
    "./src/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2a9d8f',
        secondary: '#e9c46a',
        accent: '#f4a261',
        darkbg: '#0f172a'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 25px rgba(0,0,0,0.1)',
      }
    },
  },
  plugins: [],
}




