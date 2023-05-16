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
        cloud1: "cloud1 50s linear infinite",
        cloud2: "cloud2 50s linear infinite",
        cloud3: "cloud3 50s linear infinite",
        cloud4: "cloud4 50s linear infinite",
        cloud5: "cloud5 50s linear infinite",
        chat1: "chat1 2450ms linear 3600ms 1 ",
        chat2: "chat2 1550ms linear 4500ms 1 ",
        chat3: "chat3 650ms linear 5400ms 1 ",
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
          "71%": {
            top: "15%",
            left: "110%",
            zIndex: "-1",
          },
          "72%": {
            top: "15%",
            left: "-26%",
            zIndex: "-1",
          },
          "73%": {
            top: "15%",
            left: "-26%",
            zIndex: "1",
          },
          "100%": {
            top: "15%",
            left: "15%",
            zIndex: "1",
          },
        },
        cloud2: {
          "0%": {
            top: "25%",
            left: "-28%",
            zIndex: "1",
          },
          "100%": {
            top: "25%",
            left: "107%",
            zIndex: "1",
          },
        },
        cloud3: {
          "0%": {
            top: "130px",
            left: "-15%",
            zIndex: "1",
          },
          "100%": {
            top: "130px",
            left: "120%",
            zIndex: "1",
          },
        },
        cloud4: {
          "0%": {
            top: "15%",
            left: "-35%",
            zIndex: "1",
          },
          "100%": {
            top: "15%",
            left: "100%",
            zIndex: "1",
          },
        },
        cloud5: {
          "0%": {
            top: "20%",
            left: "-50%",
            zIndex: "1",
          },
          "100%": {
            top: "20%",
            left: "100%",
            zIndex: "1",
          },
        },
        chat1: {
          "0%": {
            top: "-5px",
            opacity: "0",
            left: "30px",
          },
          "26.5%": {
            top: "-60px",
            opacity: "1",
          },
          "36.7%": {
            top: "-60px",
            opacity: "1",
          },
          "63.3%": {
            top: "-115px",
            opacity: "1",
          },
          "73.5%": {
            top: "-115px",
            opacity: "1",
          },
          "100%": {
            top: "-170px",
            opacity: "1",
          },
        },
        chat2: {
          "0%": {
            top: "-5px",
            opacity: "0",
            left: "30px",
          },
          "42%": {
            top: "-60px",
            opacity: "1",
          },
          "58%": {
            top: "-60px",
            opacity: "1",
          },
          "100%": {
            top: "-115px",
            opacity: "1",
          },
        },
        chat3: {
          "0%": {
            top: "-5px",
            opacity: "0",
            left: "30px",
          },

          "100%": {
            top: "-60px",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
