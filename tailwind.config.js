/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        KumbhSans: ["Kumbh Sans", 'sans-serif']
      },
      colors: {
        Orange: 'var(--Orange)',
        PaleOrange: 'var(--PaleOrange)',
        VeryDarkBlue: 'var(--VeryDarkBlue)',
        DarkGrayishBlue: 'var(--DarkGrayishBlue)',
        GrayishBlue: 'var(--GrayishBlue)',
        LightGrayishBlue: 'var(--LightGrayishBlue)',
        White: 'var(--White)',
        Black: 'var(--Black)'
      },
      screens: {
        'sm': {'max':'375px'},
        'md': {'max':'860px'}
      }
    },
  },
  plugins: [],
}

