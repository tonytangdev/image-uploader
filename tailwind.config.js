module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'infinite-horizontal-translate':
          'horizontal-translate 2s ease-in-out infinite',
      },
      keyframes: {
        'horizontal-translate': {
          '0%': {
            transform: 'translateX(-6.25rem)',
          },
          '100%': {
            transform: 'translateX(21rem)',
          },
        },
      },
    },
  },
  plugins: [],
}
