/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
    colors: {
      white: "#FFF",
      primary: "#EB2F3D",
      secondary: "#1E1E1E",
      tertiary: "#121011"
    }
  },
  plugins: [],
};
