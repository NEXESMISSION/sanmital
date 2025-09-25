/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': {
          primary: '#b91c1c',
          secondary: '#7f1d1d',
        }
      },
    },
  },
  plugins: [],
}
