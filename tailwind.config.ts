import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1c2536",
        white: "#ffffff",
        textDark: "#a2a6aa",
        textDarkBlue: "#0e1d44",
        active: "#d6fbe6",
        inactive: "#faeef0",
        activeDark: "#2aac95",
      },
    },
  },
  plugins: [],
};
export default config;
