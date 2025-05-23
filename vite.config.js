// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";
import { homedir } from "os";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"), // Your main entry point (e.g., home page)
        about: resolve(__dirname, "about.html"), // Additional HTML pages
        contact: resolve(__dirname, "contact.html"),
        product: resolve(__dirname, "product.html"),
        addToCart: resolve(__dirname, "addToCart.html"),
        // Add more entry points for other HTML files as needed
      },
    },
  },
});