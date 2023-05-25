/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#2D9CDB',
        darkblue: '#100E1D'
      },
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'] // modifies default font for project
      }
    }
  },
  plugins: []
}
