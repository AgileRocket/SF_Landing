/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      primary: "#41619E",
      secondary: "#5B78AF",
      accent: "#0264D3",
      hover: "#C9DCFF",
      focus: "#3772DD",
      "primary-dark": "#2F3136",
      "primary-medium": "#A9B8D3",
      "primary-light": "#5F6163",
      "text-dark": "#4F504D",
    },
    fontSize: {
      xs: ["14px"],
      sm: ["16px"],
      lg: ["18px"],
      xl: ["24px"],
      "2xl": ["36px"],
      "3xl": ["48px"],
      "4xl": ["56px"],
    },
    fontFamily: {
      poppins: "Poppins, sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
