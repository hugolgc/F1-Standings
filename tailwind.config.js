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
    minWidth: {
      'table': '82rem',
      'drivers': '55rem',
      'teams': '68.75rem',
      'races': '71.25rem',
    },
    extend: {
      width: {
        18: '4.5rem',
        21: '5.25rem',
        22: '5.5rem',
        26: '6.5rem',
        34: '8.25rem',
        42: '10.5rem',
        58: '14.5rem'
      },
      lineHeight: {
        'teams': '2.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

/**
 *  npx tailwindcss -i ./styles/dev.css -o ./styles/globals.css -m
 */