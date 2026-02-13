// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  
  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Geist Mono",
      cssVariable: "--font-site",
    }]
  },

  integrations: [react()]
});
