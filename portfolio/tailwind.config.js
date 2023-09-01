/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  // darkMode: media, // or 'media' or 'class'
  darkMode: 'media',

  theme: {
    extend: {},
  },
  variants: {
    extend: {
        // green: colors.emerald,
        // yellow: colors.amber,
        // purple: colors.violet,
    },
  },
  plugins: [],
}
