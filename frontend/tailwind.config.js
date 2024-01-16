/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#191919",
      },
      textColor: {
        default: "#FFF",
      },
      width: {
        // "custom-container": "64px",
      },
    },
  },
  plugins: [],
};
