/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2c2c2c",
          light: "#636363"
        },
        accent: "#14b0ee",
      }
    },
  },
  plugins: [],
}