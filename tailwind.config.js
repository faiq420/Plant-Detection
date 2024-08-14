/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideOutRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        slideOutRight: "slideOutRight 0.5s ease-in-out forwards",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        DMSans: "var(--font-DMSans)",
        CreteRound: "var(--font-CreteRound)",
        OpenSans: "var(--font-OpenSans)",
        GoogleSans: "var(--font-GoogleSans)",
        roboto: "var(--font-roboto)",
        inter: "var(--font-inter)",
        raleway: "var(--font-raleway)",
      },
      backgroundColor: {
        modalTransparentBg: "#00000080",
        "theme-green-light": "#D2E6B5",
        "theme-green-dark": "#8CB25B",
        "theme-purple-lightest": "#EAD1F1",
        "theme-purple-light": "#D8AAE7",
        "theme-purple-medium": "#B56FE3",
        "theme-purple-dark": "#691F94",
        "div-bg": "#5a981e",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "green-dark": "#01411c",
        "theme-green-light": "#D2E6B5",
        "theme-green-dark": "#8CB25B",
        "theme-purple-light": "#D8AAE7",
        "theme-purple-medium": "#B56FE3",
        "theme-purple-dark": "#691F94",
        "text-theme-gray": "#394e6a",
        "text-theme-blue": "#183D54",
      },
    },
  },
  plugins: [
    require("daisyui"),
    // require("flowbite/plugin")({
    //   charts: true,
    // }),
  ],
  daisyui: {
    themes: ["winter"],
  },
};
