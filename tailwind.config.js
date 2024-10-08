const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // custom colors
      colors: {
        black: '#121212',
        cyan: '#00CCCC',
      },
      // custom animations
      animation: {
        'autoscroll-x': 'autoscrollX 17s linear infinite',
        'collapse-down': 'collapseDown 1s linear forwards',
        'collapse-up' : 'collapseUp 0.5s linear forwards',
        'collapse-left': 'collapseLeft 1s linear forwards',
        'red-white': 'fadeRedWhite 0.5s linear forwards',
        'white-red': 'fadeWhiteRed 0.5s linear forwards',
        'fade-in': 'fadeIn 0.2s linear forwards',
      },
    },

    // Color overrides
    colors: {
      red: {
        300: '#EBB5B5',
        600: '#CC0000',
        950: '#720000',
      },
      white: '#FAFAFA',
      gray: {
        100: '#EEECEC',
        200: '#EEEEEE',
        300: '#C2C2C2',
        600: '#595858',
        800: '#1B242B',
        950: '#121212',
      },
      blue: {
        300: '#60A9FF',
        600: '#0F57AC',
        800: '#0000CC',
      },
    },


    screens: {
      'xs': '320px',
      ...defaultTheme.screens,
    },

  },
  plugins: [],
}
