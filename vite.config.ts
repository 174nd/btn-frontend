import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite({ target: "react", autoCodeSplitting: true }), tailwindcss(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    port: Number(process.env.VITE_PORT) || 3000,
    //   strictPort: true,
  },
  server: {
    port: Number(process.env.VITE_PORT) || 3000,
    // strictPort: true,
    host: true,
    // origin: "http://0.0.0.0:8080",
  },
});
