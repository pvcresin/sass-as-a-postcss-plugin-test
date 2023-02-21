import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcssSass from "@csstools/postcss-sass";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [postcssSass],
    },
  },
});
