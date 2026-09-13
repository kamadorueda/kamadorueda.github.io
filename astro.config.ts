import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import AstroPWA from "@vite-pwa/astro";

export default defineConfig({
  site: "https://kamadorueda.com",
  integrations: [
    react(),
    AstroPWA({
      registerType: "autoUpdate",
      // @vite-pwa/astro's peerDependencies top out at Astro 5 and its
      // automatic <head> injection is a no-op on this site's Astro 6 static,
      // multi-page build — it still emits sw.js/manifest.webmanifest/
      // registerSW.js correctly, so we link/register them by hand in
      // src/components/Page/Html/index.astro instead.
      injectRegister: null,
      // vite-plugin-pwa defaults navigateFallback to "index.html", which is
      // an SPA behavior: it silently serves the homepage for any navigation
      // that isn't an exact precache match, masking real 404s. This site is
      // a static multi-page app where every route has its own precached
      // page, so disable the fallback and let unmatched navigations hit the
      // network/Worker as usual.
      workbox: {
        navigateFallback: undefined,
      },
      manifest: {
        name: "Kevin Amado",
        short_name: "Kevin Amado",
        description:
          "Software projects and open source contributions across multiple languages.",
        start_url: "/",
        scope: "/",
        display: "standalone",
        // Kept in sync with --color-ctextdark / --color-cbgdefault in src/index.css.
        theme_color: "#0f172a",
        background_color: "#ffffff",
        icons: [
          {
            src: "/icons/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/icons/icon-maskable-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
  output: "static",
});
