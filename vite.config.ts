import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ghPages } from "vite-plugin-gh-pages";

// https://vite.dev/config/
export default defineConfig(() => {
  // Check if we're deploying to GitHub Pages
  const isGitHubPages = process.env.VITE_GITHUB_PAGES === "true";
  const isVercel = process.env.VERCEL_URL;

  // Set the base path conditionally
  const basePath = isGitHubPages || isVercel ? "/bochbeautyandskincare/" : "./";

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
    base: basePath, // Dynamically set base path
  };
});
