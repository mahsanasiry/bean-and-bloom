import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pine: {
          50: "#eef5f1",
          100: "#d7e8df",
          200: "#b0d1c0",
          300: "#82b39b",
          400: "#4f8f73",
          500: "#2f7358",
          600: "#245b46",
          700: "#1f4a3a",
          800: "#1a3c30",
          900: "#17332a",
          950: "#0c1c16",
        },
        saffron: {
          300: "#f7d46a",
          400: "#f2b705",
          500: "#d99a00",
        },
        paper: "#fbfcfa",
      },
    },
  },
  plugins: [],
};

export default config;
