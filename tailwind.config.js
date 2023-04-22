/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors:{
        'primary':'#303030',
        'secondary':'#424242',
        'tertiary':'#fca311'
      }
    },
  },
  plugins: [],
}

