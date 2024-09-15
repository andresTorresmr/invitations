import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "[name]-[hash].js",
        },
      },
    },
  },
  security: {
    cors: {
      allowed_origins: ["*"],
      allowed_methods: ["*"],
      allowed_headers: [
        "X-CSRF-Token",
        "X-Requested-With",
        "Accept, Accept-Version",
        "Content-Length",
        "Content-MD5",
        "Content-Type",
        "Date",
        "X-Api-Version",
      ],
      // more relevant options
    },
  },
});
