import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
        rubik: ["var(--font-rubik)", ...defaultTheme.fontFamily.sans],
        roboto: ["var(--font-roboto)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "green-accent": "#00AD98",
      },
      backgroundImage: {
        hero: "url('/assets/images/background.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
