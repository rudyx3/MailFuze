/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ['Poppins', 'sans-serif']
      },
      colors:{
        backgroundPrimary: "#070F2B",
        textColor: "#f1f1f1",
        primary: "#535C91",
        secondary: "#1B1A55"
      }
    },
  },
  plugins: [require("rippleui")],
};
