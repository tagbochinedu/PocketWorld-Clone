/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: { hero: "" },
      boxShadow: {
        joblist: "-5px -5px 0px #fff",
      },
      colors: {
        primary: "#0A1033",
        secondary: "#FF0DEE",
        primaryText: "#FEFEFE",
        secondaryText: "#7E8194",
      },
      fontFamily: {
        gt: "GT America",
        gtb: "GT AmericaB",
        gtr: "GT AmericaR",
      },
      animation: {
        cloud1: "cloud1 30s linear infinite",
      },
      keyframes: {
        cloud1: {
          "0%": {
            top: "15%",
            left: "15%",
            zIndex: "1",
          },
          "70%": {
            top: "15%",
            left: "110%",
            zIndex: "1",
          },
          "70%": {
            top: "15%",
            left: "110%",
            zIndex: "-1",
          },
          "72%": {
            top: "15%",
            left: "-26%",
            zIndex: "-1",
          },
          "100%": {
            top: "15%",
            left: "15%",
            zIndex: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
