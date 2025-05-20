/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx}",
  ],
  theme: {
    extend: {

      colors: {
        'blush': '#fbdfe9',
        'crimson': '#d22837',
        'evergreen': '#0a372d',
      },

      textUnderlineOffset: {
        '5': '5px',
      },

      fontFamily: {
        'gt-alpina-medium': ['GT-Alpina-Standard-Medium', ...defaultTheme.fontFamily.sans],
        'gt-alpina-bold': ['GT-Alpina-Standard-Bold', ...defaultTheme.fontFamily.sans],
      },

      fontSize: {
        'sm': '1.063rem',  // 17px
        'md': '1.1875rem', // 19px
        'lg': '1.313rem',  // 21px
        'xl': '1.625rem',  // 26px
        '2xl': '2rem',     // 32px
        '3xl': '2.5rem',   // 40px
      },

      zIndex: {
        '60': 60,
        '70': 70,
        '80': 80,
        '90': 90,
        '100': 100,
      },

    },
  },
  plugins: []
}