/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#589600',
        secondary: '#F99A42',
        primary_bg: '#380F3F',
        secondary_bg: '#1E0523',
        tertiary_dark: '#100013',
    },
  },
  plugins: [],
  important: true,
}
}