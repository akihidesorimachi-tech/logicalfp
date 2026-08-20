/**
 * LOGICAL FP — Generic Vite configuration
 * This file has no platform-specific runtime dependencies.
 */

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? "/",
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
  },
});
