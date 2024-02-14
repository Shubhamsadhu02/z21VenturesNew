/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      container: {
        center: true,
      },
      colors: {
        white1: "#EFEFF1", 
        pink1: "#FBE9E4", 
        orange1: "#DE5126",
      },
    },
  },
  plugins: [],
};
