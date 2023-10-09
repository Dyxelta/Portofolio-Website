/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgwhite': '#f5f5f5',
        'bgblack': '#2c2d32',
        'bggray': '#323338',
        'primary': '#f5ac01',
        'primary-dark': '#946801',
        'offwhite': '#f5f5f5',
        'offwhite-dark': '#a1a1a1'
      },
    },

    fontFamily: {
      'roboto': ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}

