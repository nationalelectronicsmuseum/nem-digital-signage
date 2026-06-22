import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          // Swiper is only used inside section/slide views, so keep it in its
          // own chunk that loads with those lazy routes.
          if (id.includes("swiper")) return "swiper";
          // The React runtime is needed on first paint; isolating it lets the
          // browser cache it independently of app code between deploys.
          if (
            id.includes("react-router") ||
            id.includes("react-dom") ||
            id.includes("/react/") ||
            id.includes("/scheduler/")
          ) {
            return "react-vendor";
          }
        },
      },
    },
  },
});
