/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        myColor: {
          1: '#495C83',
          2: '#7A86B6',
          3: '#A8A4CE',
          4: '#C8B6E2',
        }
      },
      fontFamily: {
        myFont: 'Square Peg',
      }
    },
  },
  plugins: [],
}
