/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.tsx',
    './src/components/**/*.tsx',],
  theme: {
    extend: { fontFamily: {
      customOne: ['HedvigSerif', 'sans-serif'],
      customTwo: ['HedvigSans', 'sans-serif'],
    },
    colors: {
      'custom-beige': '#f2ebe4',
    },
    backgroundColor: theme => theme('colors'),},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

