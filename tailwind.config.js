/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    screens: {
      'xs': '420px',
      // => @media (min-width: 420px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      // '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container:{
      center: true,
      padding: "0 8px"
    },
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
      "primary-lighter": "#cad1e2",
      "primary-lightest": "#EEF2FB",
      "text-dark": "#4F504D"
    },
    fontSize: {
      xs: ["14px"],
      sm: ["16px"],
      lg: ["18px"],
      xl: ["24px"],
      "2xs": ["12px"],
      "2xl": ["30px"],
      "3xl": ["36px"],
      "4xl": ["48px"],
      "5xl": ["56px"],
    },
    fontFamily: {
      poppins: "Poppins, sans-serif",
    },
    extend: {
      colors: {
        // flowbite-svelte
        "primary-fb": {
          50: "#FFF5F2",
          100: "#FFF1EE",
          200: "#FFE4DE",
          300: "#FFD5CC",
          400: "#FFBCAD",
          500: "#FE795D",
          600: "#EF562F",
          700: "#EB4F27",
          800: "#CC4522",
          900: "#A5371B",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
