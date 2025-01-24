import { defineConfig } from "vite";
import pugPlugin from "vite-plugin-pug"; // Vite plugin for Pug support
// import tailwindcss from "tailwindcss";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [pugPlugin(), tailwindcss()],
});
