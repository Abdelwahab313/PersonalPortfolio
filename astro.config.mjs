import {defineConfig} from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://abdelwahab.dev",
  integrations: [sitemap()],
  markdown: {
    smartypants: false,
    shikiConfig: {
      themes: {light: "github-light", dark: "github-dark-dimmed"},
      defaultColor: false,
      wrap: false
    }
  }
});
