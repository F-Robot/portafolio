/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#607b96',
        'primary-hover': '#92a6b9',
        accent: '#fea55f',
        'accent-hover': '#ffd4b3',
        'accent-secondary': '#4d5bce',
        'accent-tertiary': '#43d9ad',
        border: '#1e2d3d',
        background: '#021728',
      },
      backgroundImage: {
        shapes:
          'url("/shape-gradient-variant.svg"), url("/shape-gradient.svg")',
      },
      backgroundPosition: {
        'shapes-horizontal': 'center, right',
        'shapes-vertical': 'center, bottom',
      },
      backgroundSize: {
        'shapes-horizontal': '45%, 45%',
        'shapes-vertical': '450px, 450px',
      },
      fontFamily: {
        body: '"Fira Code"',
      },
    },
  },
  plugins: [],
}
