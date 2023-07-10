/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'm-light': ['Montserrat-Light', 'sans-serif'],
        'm-reg': ['Montserrat-Regular', 'sans-serif'],
        'm-bold': ['Montserrat-Bold', 'sans-serif'],
      },
      colors: {
        'custom-grey': '#666'
      },
      backgroundColor: {
        'light': '#F5F5F5',
        'dark': '#2B2B2B'
      }
    },
  },
  plugins: [],
  
}