import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from "@tailwindcss/vite";
import env from "@manonymous-chat/config-env";

export default defineConfig({
  define: {
    "APP_NAME": JSON.stringify(env.APP_NAME),
    "APP_ENV": JSON.stringify(env.APP_ENV),
  },
  plugins: [
    preact(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
      },
      manifest: {
        name: env.APP_NAME,
        short_name: env.APP_NAME,
        description: "My Awesome App description",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
