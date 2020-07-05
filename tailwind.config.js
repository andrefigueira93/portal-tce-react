const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        'black-apoio': '#1a202c',
        'red-primary': '#cb2627',
        'red-secondary': '#fcf3f2',
        'yellow-primary': '#e9c82f',
        'yellow-secondary': '#fdfdea',
        'green-primary': '#24795e',
        'green-secoondary': '#f2faf7',
        'blue-primary': '#1f4888',
        'blue-secondary': '#ebf5ff',
        'blue-apoio': '#3E72E1',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  purge: {
    enabled: true,
    content: ['./src/**/*.tsx']
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/custom-forms'),
  ],
}
