/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': "#1a74e4",
        'red': "#fb0000",
        'gray-100': "#f0f2f5",
        'gray-200': "#e4e5e8",
        'gray-300': "#d8dade",
        'gray-400': "#65676b",
        'dark-100': "#3A3B3C",
        'dark-200': "#242526",
        'dark-300': "#18191a",
        'dark-400': "#050505"
      },
      flex: {
        2: "2 2 0%",
        4: "4 4 0%"
      },
      container: { center: true }
    },
  },
  darkMode: 'class',
  plugins: [],
};
