/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./src/**/", "./index.html"],
  theme: {
    extend: {
      colors: {
        background: '#0B0911',
        primary: '#8257E5',
        secondary: '#3C3748',
        tertiary: 'transparent',
      },
      fontFamily: {
        sans: 'Roboto, Inter',
      }
    },
  },
  plugins: [],
};
