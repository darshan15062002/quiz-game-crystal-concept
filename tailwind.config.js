/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          primary: "#011e70",

          secondary: "#8b59cc",

          accent: "#F2F2F2",

          neutral: "#24272E",

          info: "#5E8DD9",

          success: "#1CC487",

          warning: "#ff4d00",

          error: "#F94D53",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
