/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html',],
  theme: {
      screens: {
        'sm': '375px',
        'smxl':'576px',
        'md': '768px',
        'lg': '976px',
        'xl': '1440px'
      },
    extend: {
      colors:{
        softRed: 'hsl(7, 99%, 70%)',
        Yellow: 'hsl(51, 100%, 49%)',
        darkBlue: 'hsl(198, 62%, 26%)',
        darkCyan: 'hsl(168, 51%, 65%)',
        veryDarkBlue: 'hsl(212, 27%, 19%)',
        veryDarkGrayishBlue: 'hsl(213, 9%, 39%)',
        grayishBlue: 'hsl(210, 4%, 67%)',
        White: 'hsl(0, 0%, 100%)',
        veryDarkDesaturatedBlue:'hsl(212, 27%, 19%)',
      },
      backgroundImage:{
        'headerImage': "url('./images/desktop/image-header.jpg)"
      }
    },
  },
  plugins: [],
}
