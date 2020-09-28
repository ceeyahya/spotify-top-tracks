const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Spartan', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        spotify: {
          lgreen: '#1ed760',
          green: '#1db954',
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};
