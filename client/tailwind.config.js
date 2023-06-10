/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_color: "#111111",
        main_white: "#f5f5f5",
        text_color: "#AFAFAF",
        main_grey: "#808080",
        main_orange: "#D8471e",
        main_gold: "#F48d2c",
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
