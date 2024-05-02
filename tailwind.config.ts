import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        primary: "#8A1252",
        secondary: "#84054D",
        oldRose: "#BE7E79",
        ecru: "#D5B36B",
        almond: "#EBD7BE",
      },
    },
  },
};
export default config