const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    credentials: {
      userName: "bWFhc3NpZ25tZW50QHlvcG1haWwuY29t",
      password: "dGVtcDEyMw==",
    },
    baseUrl: "https://siddasia.mangoapps.com/",
    specPattern: "cypress/e2e/**.feature",
    defaultCommandTimeout:12000,
    excludeSpecPattern: ["**/stepDefinations/*", "*.js", "*.md"],
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
  },
});
