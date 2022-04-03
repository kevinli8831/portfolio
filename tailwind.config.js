module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: { colorOrange: "#FD6A02" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
