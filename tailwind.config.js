/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkModeElementColor: "hsl(209, 23%, 22%)",
        darkModeBackgroundColor: "hsl(207, 26%, 17%)",
        lightModeTextColor: "hsl(200, 15%, 8%)",
        LightModeInputColor: "hsl(0, 0%, 52%)",
        lightModeBackgroundColor: "hsl(0, 0%, 98%)",
        LightmodeElement: "hsl(0, 0%, 100%)",
        DarkModeText: "hsl(0, 0%, 100%)",
      },
    },
    screens: {
      "xs": "450px",
    },
  },
  plugins: [],
  darkMode: "class",
};
