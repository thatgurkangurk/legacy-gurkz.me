import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        themeColor: "#5EBFA8",
        themeBlack: "#121212",
      },
      fontFamily: {
        grotesk: ["Space Grotesk Variable", "Space Grotesk Fallback"],
      },
    },
  },
  plugins: [],
};

export default config;
