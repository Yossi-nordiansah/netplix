/** @type {import('tailwindcss').Config} */
export default {
  content: [   "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '100%': '120%',
      '16': '4rem',
    },
    backgroundPosition: {
      bottom: 'bottom',
      'bottom-4': 'center bottom 1rem',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
      'top-4': 'center top -10rem',
    },
    extend: {
      fontFamily: {
        netflix: ['netflix-sans'],
        netflixmd:['netflix-sans-md'],
        netflixrg:['netflix-sans-reg'],
      },
    },
  },
  plugins: [],
}

