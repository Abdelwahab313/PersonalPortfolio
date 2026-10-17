import {defineConfig} from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://abdelwahab.dev",
  integrations: [sitemap()],
  markdown: {
    smartypants: false
  }
});
