/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customBackground: '#0D2329',
        customPrimary: '#05664F',
        customSecondary: '#14EDB9',
        customText: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
