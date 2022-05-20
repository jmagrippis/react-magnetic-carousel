const colors = require('tailwindcss/colors')

const withOpacityValue =
  (varName) =>
  ({opacityValue}) =>
    opacityValue === undefined
      ? `hsl(var(--${varName}))`
      : `hsla(var(--${varName}) / ${opacityValue})`

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: colors.cyan,
      secondary: colors.pink,
      copy: {
        base: withOpacityValue('copy-base-color'),
        muted: withOpacityValue('copy-muted-color'),
      },
      surface: {
        1: withOpacityValue('surface-1-color'),
      },
      gray: colors.stone,
      white: colors.white,
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    fontWeight: {
      normal: 400,
      semibold: 600,
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}
