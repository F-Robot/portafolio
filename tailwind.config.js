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
      fontFamily: {
        body: '"Fira Code"',
      },
    },
  },
  plugins: [],
}
