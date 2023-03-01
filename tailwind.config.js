/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../src/images/home4.jpg')",
      },
      colors: {
        'dk-blue': '#0f172a',
      },
      fontFamily: {
        'sans': ['"Open Sans"','sans-serif'],
        'header': ['Heebo', 'sans-serif']
      },
      keyframes: {
        'fade' :{
          '0%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0'
          },
          'to': {
            opacity: '0'
          }
        }
      },
      animation: {
        'fade': 'fade 1s ease-out'
      }
    }
  },
  plugins: [],
}
