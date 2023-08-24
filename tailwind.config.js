/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2B2D30',
        primaryLight: '#3E444A',
        hover: '#2E436E',
      },
    },
  },
  plugins: [],
};
