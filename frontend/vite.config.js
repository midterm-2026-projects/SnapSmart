import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",

    // Vitest will only run tests inside src
    include: [
      "src/**/*.test.{js,jsx}",
      "src/**/*.spec.{js,jsx}"
    ],

    // Ignore Playwright tests
    exclude: [
      "tests/**",
      "node_modules/**",
      "dist/**"
    ],
  },
});