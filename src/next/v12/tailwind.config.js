/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('./tailwindcss/index.js')
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
}