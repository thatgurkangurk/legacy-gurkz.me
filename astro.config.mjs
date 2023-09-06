import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://gurkz.me",
  integrations: [tailwind(), sitemap(), solidJs()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});