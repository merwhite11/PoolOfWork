const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || "http://localhost:8080",
    setupNodeEvents(on, config) {
      const envConfig = require("./cypress/cypress.env.json");
      config.env = { ...config.env, ...envConfig };
      return config;
    },
  },
});
