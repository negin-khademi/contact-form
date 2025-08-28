/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        greens: {
          200: "hsl(148, 38%, 91%)",
          600: "hsl(169, 82%, 27%)",
          800: "hsl(171, 83%, 14%)",
        },
        reds: {
          DEFAULT: "hsl(0, 66%, 54%)",
        },
        neutrals: {
          white: "hsl(0, 0%, 100%)",
          500: "hsl(186, 15%, 59%)",
          900: "hsl(187, 24%, 22%)",
        },
      },
    },
  },
  plugins: [],
};
