/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
        orange: "#E07936",
        green: "#85A094",
        grey: "#8F8F8F",
        purple: "#6667AA",
        greyBage: "#B8A5A5",
        lightGrey: "#F1F0EC",
      },
      fontFamily: {
        archivoblack: ["var(--archivo-black)"],
        archivonarrow: ["var(--archivo-narrow)"],
        karla: ["var(--karla)"],
      },
    },
  },
  plugins: [],
};
