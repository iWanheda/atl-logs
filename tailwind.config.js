module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D3E53",
        secondary: "#254B62",
        "electric-blue": "#476D7C",
        moonstone: "#77ABB7",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
