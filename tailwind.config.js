/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#262626',
        darkgray: '#595959',
        orange: '#F29F05',
        lightorange: '#F2BB05',
        gray: '#BFBFBF'
      }
    }
  },
  plugins: []
}
