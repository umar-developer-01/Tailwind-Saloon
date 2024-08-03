/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '1/20': '5%',
        '19/20': '95%',
        '1/10': '10%',
        '9/10': '90%',
        "1/4": "25",
        "3/4": "75%"
      },
      colors: {
        "primary": "#3238f2",
        "anuj": "#01ee91"
      },
      fontFamily: {
        "display": ["Poppins", "sans-serif"],
        "body": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}