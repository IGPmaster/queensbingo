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
        primary: '#f04b38',
        secondary: '#3598fb',
        primary_bg: '#202c36',
        secondary_bg: '#2B3844',
        tertiary_dark: '#212121',
    },
  },
  plugins: [],
  important: true,
}
}