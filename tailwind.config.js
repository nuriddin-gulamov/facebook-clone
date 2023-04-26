/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a74e4",
        primary200: "#145fbb",
        gray100: "#f0f2f5",
        gray200: "#f2f2f2",
        gray250: "#e4e5e8",
        gray275: "#d8d9da",
        gray300: "#d8dade",
        gray350: "#606266",
        gray400: "#65676b",
        green: "#3ebb25",
        green200: "#35a420",
        black100: "#050505",
        red: "#fb0000",
      },
      flex: {
        2: "2 2 0%",
        4: "4 4 0%",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
