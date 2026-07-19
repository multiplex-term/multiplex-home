// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Fully static output: both pages prerender to plain HTML, so the site
// deploys unchanged to Cloudflare (assets-only Worker) or Vercel.
export default defineConfig({
	site: "https://multiplexterm.dev",
	integrations: [sitemap()],
});
