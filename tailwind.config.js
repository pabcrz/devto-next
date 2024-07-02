/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B49DF",
        secondary: "#EBECFC",
        tertiary: "#ffffff",
        bgPrimary: "#F5F5F5",
        bgSecondary: "#FFFFFF",
        textPrimary: "#090909",
        textSecondary: "#565656",
      },
    },
  },
  plugins: [],
};
