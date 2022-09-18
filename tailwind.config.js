/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], 
  theme: {
    extend: {
      colors: {
        'c-light': '#ffffff',
        'c-m': '#f28288',
        'c-1': '#777777',
        'c-2': '#999999',
        'c-3': '#cdcdcd',
        't-m': '#444444',
        'b-1': '#ebebeb',
        'dark': '#000000'
      },
      transitionTimingFunction: {
        'ease': 'cubic-bezier(.17,.67,.83,.67)'
      },
      fontSize: {
        '13': '13px'
      },
      borderColor: {
        'c-1': '#ebebeb',
        'c-2': '#e1e1e1'
      },
      fontFamily: {
        'alex-brush': 'Alex Brush, cursive'
      }
    },
  },
  plugins: [],
}
