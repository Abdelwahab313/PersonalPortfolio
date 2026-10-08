import {defineConfig} from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://abdelwahab.dev",
  integrations: [react()],
  vite: {
    ssr: {
      external: ["react", "react-dom"]
    }
  }
});
