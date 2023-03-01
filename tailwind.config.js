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
    }
  },
  plugins: [],
}
