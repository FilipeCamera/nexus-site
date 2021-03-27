const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
    },
    colors: {
      blue: colors.blue,
      orange: colors.orange,
      white: colors.white,
      gray: colors.gray,
      black: colors.black,
      transparent: 'transparent',

    },
    zIndex: {
      'negative': '-1',
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '25': 25,
      '50': 50,
      '75': 75,
      '100': 100,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
