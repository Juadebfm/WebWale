/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grostesk: ["Grotesk", "sans-serif"],
      },
      colors: {
        bg_color: "#111111",
        main_white: "#f5f5f5",
        text_color: "#AFAFAF",
        main_grey: "#808080",
        main_orange: "#DD5321",
        main_gold: "#F1852A",
      },
      fontSize: {
        heading: "56px",
        subheading: "48px",
        subheading_small: "36px",
        button_text: "16px",
        body_text: "18px",
        body_text_small: "14px",
      },
    },
  },
  plugins: [],
};
