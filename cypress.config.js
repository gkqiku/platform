const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: { 
    baseUrl: 'http://localhost:8080/',
    experimentalRunAllSpecs: true,
    specPattern: ["/Applications/Projects/MyProjects/platform/tests/cypress/e2e/**/*", "tests/cypress/e2e/*"],
    supportFile: "/Applications/Projects/MyProjects/platform/tests/cypress/support/e2e.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});