/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    theme: {
      screens: {
        sm: "380px",
        md: "420px",
        lg: "680px",
        // or maybe name them after devices for `tablet:flex-row`
        tablet: "1024px",
      },
    },
    extend: {},
  },
  plugins: [],
};
