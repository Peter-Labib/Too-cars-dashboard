const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      serif: ['"Fjalla One"', 'sans-serif'],
    },
    extend: {
      boxShadow:{
        '3xl-extend':'0px 15px 50px rgba(160, 163, 189, 0.3)'
      },
      colors: {
        main: '#0086E1',
        secondary: colors.sky,
      },
      textColor: {
        main: '#0086E1',
        secondary:colors.sky
      },
      gridTemplateColumns: {
        'auto--extend': 'repeat(auto-fit, minmax(0, 1fr))',
      },
      keyframes: {
        buzz: {
          '50%': {
            transform: 'translateX(1px) rotate(1deg)',
          },
          '100%': {
            transform: 'translateX(-1px) rotate(-1deg)',
          },
        },
      },
      animation: {
        buzz: 'buzz .1s linear 7',
      },
    },
  },
  variants: {
    extend: {
      dropShadow: ['group-hover'],
    },
  },
  plugins: [],
}
