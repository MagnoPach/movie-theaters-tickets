module.exports = {
  prefix: '',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.{html, scss, ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      Nunito: ['Nunito', 'sans-serif'],
      Norms: ['TT Norms Pro', 'sans-serif'],
      Roboto: ['Roboto', 'sans-serif'],
    },
    boxShadow: {
      'movieCard': '0px 2px 6px rgba(0, 0, 0, 0.16)',
    },
    screens: {
      'threeColumns': '517px',
      'fourColumns': '689px',
      'fiveColumns': '912px',
      'sixColumns': '1094px',
      'sevenColumns': '1250px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
