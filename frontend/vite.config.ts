import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { ghPages } from "vite-plugin-gh-pages";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables based on the mode (development/production)
  const env = loadEnv(mode, process.cwd(), '');

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
    
    // Dynamically set the base path using the environment variable VITE_BASE_PATH
    base: env.VITE_BASE_PATH || '/',  // Use VITE_BASE_PATH for production, fallback to '/' for development
  };
});
