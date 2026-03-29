// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

import react from "@astrojs/react";

export default defineConfig({
  adapter: vercel(),
  output: "server",
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [{
    provider: fontProviders.google(),
    name: "Geist Mono",
    cssVariable: "--font-site",
  }],
  integrations: [react()]
});
