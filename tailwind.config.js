/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        darkBlack: "#111111",
        lightBlack: "#191919",
        white: "#ffffff",
        gray: "#a3a3a3",
        red: "#FC466B",
        blue1: "#3F5EFB",
        blue2: "#515ada",
        pink1: "#efd5ff",
        pink2: "#E0C3FC",
        blue3: "#8EC5FC",
        blue4: "#8BC6EC",
        pink3: "#9599E2",
        yellow1: "#FBAB7E",
        yellow2: "#F7CE68",
      },
      fontFamily: {
        roboto: ["Roboto Slab", "serif"],
        pt: ["PT Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
