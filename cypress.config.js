const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout :10000,
  projectId: '9a1sqr',
  e2e: {
    setupNodeEvents(on, config) {
      experimentalStudio: true
      on("before:browser:launch", (browser, launchOptions) => {
        console.log(launchOptions.args);
        if (browser.name === "chrome") {
          launchOptions.args.push("--incognito");
        }
        return launchOptions;
      });
      // implement node event listeners here
    },
  },
  
});



