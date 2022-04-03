module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: { colorOrange: "#8E09FF" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
