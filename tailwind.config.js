/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EEF5FF",
        secondary: "#9EB8D9",
        tertiary: "#7C93C3",
        accent: "#A25772",
        priorityHigh: '#ff0000',   // Red
        priorityMedium: '#ff9900', // Orange
        priorityLow: '#00cc00',    // Green
      },
    },
  },
  plugins: [],
};
