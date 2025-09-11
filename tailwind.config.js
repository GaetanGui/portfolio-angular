/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

