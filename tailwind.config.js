/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], 
  theme: {
    extend: {
      colors: {
        'c-light': '#ffffff',
        'primary': '#f28288',
        'c-2': '#999999',
        'c-3': '#cdcdcd',
        'b-1': '#ebebeb',
        'dark': '#000000',
        gray: {
          'dark': '#777777',
          'light': '#F4F4F4',
          'darkest': '#444444'
        }
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
      },
    },
  },
  plugins: [],
}
