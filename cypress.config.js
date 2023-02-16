const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9a1sqr',
  e2e: {
    setupNodeEvents(on, config) {
      experimentalStudio: true
      // implement node event listeners here
    },
  },
});
