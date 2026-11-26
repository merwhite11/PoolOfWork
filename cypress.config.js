import { defineConfig } from "cypress";
import { readFileSync, existsSync } from "node:fs";

export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || "http://localhost:5173",
    setupNodeEvents(on, config) {
      const envPath = "./cypress/cypress.env.json";
      if (existsSync(envPath)) {
        const envConfig = JSON.parse(readFileSync(envPath, "utf8"));
        config.env = { ...config.env, ...envConfig };
      }
      return config;
    },
  },
});

