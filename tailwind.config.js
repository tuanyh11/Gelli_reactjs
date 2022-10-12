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
        'c-1': '#ebebeb',
        'c-2': '#999999',
        'c-3': '#cdcdcd',
        'c-4': '#a4a4a4',
        'dark': '#000000',
        gray: {
          '1':'#cccccc',
          '2': '#4f4f4f',
          '3':'#8e8d8d',
          '4': '#848484',
          '5': '#7f7f7f',
          'dark': '#777777',
          'bold': '#d7d7d7',
          'light': '#F4F4F4',
          'darkest': '#444444',
          100: "#f2f2f2",
          200: "#e5e5e5",
          300: "#d8d8d8",
          400: "#cbcbcb",
          500: "#ebebeb",
          600: "#989898",
          700: "#727272",
          800: "#4c4c4c",
          900: "#262626"
        },
        black: {
          '1':'#232323',
        },
      },
      transitionTimingFunction: {
        'ease': 'cubic-bezier(.17,.67,.83,.67)'
      },
      fontSize: {
        '13': '13px',
        '15': '15px'
      },
      borderColor: {
        'c-1': '#ebebeb',
        'c-2': '#e1e1e1'
      },
      fontFamily: {
        'dragon': 'Dragon is Coming, sans-serif',
        'alex-brush': 'Alex Brush, cursive',
        'greatVibes': 'Great Vibes, cursive',
        'dry-brush': "Dry Brush, sans-seri",
        'lato': 'Lato, sans-serif'
      },
      borderWidth:{
        '1': '1px',
      },
      lineHeight: {
        '1': '1',
      }, 
      margin:{
        '1.5': '15px'
      }
    }
  },
  plugins: [],
}
