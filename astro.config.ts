import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

import solidJs from "@astrojs/solid-js";
import { socials } from './src/config';

// https://astro.build/config
export default defineConfig({
  site: "https://gurkz.me",
  integrations: [tailwind(), sitemap(), solidJs()],
  output: "server",
  adapter: vercel(),
  redirects: socials
});