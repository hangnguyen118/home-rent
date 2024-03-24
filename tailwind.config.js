/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundSize: {
      '200': 200,
      '500': 500
    },
    colors: {
      primary: "#8000FF",
      primaryContainer: '#E6DDFF',
      onPrimary: "#28181A",
      secondary: "#0057FF",
      secondaryContainer: "#B3BBFF",
      error: "#FF2D33",
      surface: "#DED8E0",
      surfaceDim: "#FDF7FFDim",
      onSurface: "#1D1B20",
      outline: "#7A757F",
      white: '#F8F8F8',
      black: '#100F0F',
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#efeef6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
