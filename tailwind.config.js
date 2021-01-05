module.exports = {
  purge: {
    content: [
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: {
        standard: [/^bg-(green|orange|blue|yellow)-(400|500)$/],
      },
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        notoSerifTC: ['Noto Serif TC', 'system-ui'],
        quickSand: ['Quicksand', 'system-ui'],
        tangerine: ['Tangerine', 'system-ui']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
