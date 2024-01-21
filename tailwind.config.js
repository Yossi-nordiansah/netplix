/** @type {import('tailwindcss').Config} */
export default {
  content: [   "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
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

