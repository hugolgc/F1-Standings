module.exports = {
  mode: 'jit',
  purge: [
    './**/*.js',
    './**/*.html'
  ],
  darkMode: false,
  theme: {
    colors: {
      gray: {
        900: '#171717',
        800: '#1c1c1c',
        700: '#292929',
        500: 'rgba(255, 255, 255, .5)',
        200: 'rgba(255, 255, 255, .2)'
      },
      white: '#ffffff',
      red: '#ee3820',
      green: '#48c774',
      transparent: 'rgba(0, 0, 0, 0)'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

/**
 *  npx tailwindcss -i ./styles/dev.css -o ./styles/globals.css -m
 */