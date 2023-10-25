/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        white: '#F5FFFF',
        blue: '#074EEB',
        gray: '#D1D1D6',

      },
      textGray: '#8E8E93',
      inputGray: '#E5E5EA',
      black:'#000000',

    },
    fontFamily: {
      sans: ['Plus Jarkate Sans', 'sans-serif'],
    },
    plugins: [],
  },
};
