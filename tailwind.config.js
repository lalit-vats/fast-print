/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        customBounce: {
          "0%, 100%": { transform: "translateY(0)", animationTimingFunction: "ease-in-out" },
          "50%": { transform: "translateY(-20px)" }, // Change bounce height
        },
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
      },
      animation: {
        customBounce: "customBounce 3.5s infinite", // Adjust duration
        shine: 'shine 5s linear infinite',
      },
    },
  },
  plugins: [],
};