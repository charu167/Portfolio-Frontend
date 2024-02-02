/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-1": "#FAFAFA",
        "custom-2": "#FFFEFE",
      },
    },
  },
  plugins: [],
};
