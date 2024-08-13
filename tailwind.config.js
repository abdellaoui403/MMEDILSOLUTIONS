module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#D13B41",
        dimWhite: "rgba(53, 57, 56, 0.7)",
        dimBlue: "rgba(209, 59, 65, 0.1)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};