/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          light: "#636363"
        },
        accent: "#14b0ee",
        "secondary-bg": "var(--secondary-bg)"
      }
    },
  },
  plugins: [],
}