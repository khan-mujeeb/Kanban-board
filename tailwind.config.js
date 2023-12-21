/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", 
  theme: {
    extend: {
      screens:{
        'xs': '475px',
        '3xl': '1920px',
      
      },
      colors: {
        'text_secondary': "#5D5E60",
        'darkNavBar': "#161B22",
        'darkBackground': "#010409",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}