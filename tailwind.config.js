
module.exports = {
  mode: 'jit',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
        main: "#101010",
        maintext: "#fff",
      },
    },
    
    fontFamily: {
      main: "pingfangtc-regular, sans-serif",
      bold: "pingfangtc-semibold, sans-serif",
      light: "pingfangtc-light, sans-serif",
    },
  },
  plugins: [],
};
