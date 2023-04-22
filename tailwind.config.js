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
        'tertiary':'#5c5c5c',
        'buttons':'#10b981'
      }
    },
  },
  plugins: [],
}

