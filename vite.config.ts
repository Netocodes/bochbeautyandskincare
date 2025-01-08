import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig((mode) => ({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Example: Split third-party libraries
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase limit if needed
  },
  server: {
    host: "0.0.0.0", // Allow access from any device on the network
    port: 5173,
  },
  plugins: [react()],
  base: String(mode) === "github" ? "/bochbeautyandskincare/" : "./",
}));
