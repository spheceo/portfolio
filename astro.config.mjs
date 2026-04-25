// @ts-check
import { defineConfig, envField, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

import react from "@astrojs/react";

export default defineConfig({
  adapter: vercel(),
  output: "server",
  env: {
    schema: {
      REDIS_URL: envField.string({ context: "server", access: "secret" }),
    },
  },
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
