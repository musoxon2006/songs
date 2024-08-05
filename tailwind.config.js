/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        '1' :'1fr 3fr',
        '2':'1fr'
      }
    },
  },
  plugins: [],
}

