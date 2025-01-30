import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ghPages } from "vite-plugin-gh-pages";

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    build: {
      outDir: "dist",
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"], // Example: Split vendor libraries
          },
        },
      },
      chunkSizeWarningLimit: 1000,
    },
    server: {
      host: "0.0.0.0", // Allow access from any device on the network
      port: 5173,
    },
    plugins: [react(), ghPages()],
    // base: process.env.GITHUB_PAGES ? "/bochbeautyandskincare/" : "./", // Dynamically set base path
    // define: {
    //   "process.env": {
    //     GITHUB_PAGES: process.env.GITHUB_PAGES,
    //   },
    // },
    base: "./",
  };
});
