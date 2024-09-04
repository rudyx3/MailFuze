/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        bgWhite: "#FBFCFF",
        DeepPurple: "#642CA9",
        TextBlack: "#020202",
        AccentPurpleBord: "#9395D3",
        BlueCol: "#449DD1",
      },
    },
  },
  plugins: [require("rippleui"), require("tailwind-scrollbar")],
};
