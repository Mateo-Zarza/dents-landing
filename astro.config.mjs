import { defineConfig } from "astro/config";

// Defaults target the GitHub Pages preview. For dents.com.ar build with
// SITE=https://www.dents.com.ar BASE=/
export default defineConfig({
  site: process.env.SITE ?? "https://mateo-zarza.github.io",
  base: process.env.BASE ?? "/dents-landing",
});
