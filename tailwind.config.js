/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ["Poppins", "sans - serif"],
    },
    colors: {
      Red: "hsl(0, 100%, 74%)",
      Green: "hsl(154, 59%, 51%)",
      Blue: "hsl(248, 32%, 49%)",
      darkBlue: "hsl(249, 10%, 26%)",
      grayishBlue: "hsl(246, 25%, 77%)",
      Gray: "#eeeeee",
    },
    backgroundImage: {
      "bg-pattern-desktop": "url('/src/assets/images/bg-intro-desktop.png')",
      "bg-pattern-mobile": "url('/src/assets/images/bg-intro-mobile.png')",
    },
  },
  plugins: [],
};

