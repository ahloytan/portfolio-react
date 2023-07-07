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
    },
    colors: {
      'custom-grey': '#666'
    }
  },
  plugins: [],
  
}