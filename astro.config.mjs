import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import path from "path";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap(),
    mdx(),
    svelte(),
    icon({
      include: {
        ph: ["*"],
        mdi: ["*"],
        bi: ["*"],
        "simple-icons": ["*"],
        "akar-icons": ["*"],
        "icon-park-outline": ["*"],
        cib: ["*"],
      },
    }),
  ],
  site: "https://arch-fan.com",
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
  server: {
    host: true,
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});
