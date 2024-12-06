const { defineConfig } = require("cypress");
const fs = require("fs");
module.exports = defineConfig({
  defaultCommandTimeout: 18000,
  requestTimeout: 20000,
  chromeWebSecurity: true,

  projectId: "9a1sqr",
  e2e: {
    setupNodeEvents(on, config) {
      config.experimentalOriginDependencies = true;
      experimentalStudio: true;
      on("before:browser:launch", (browser, launchOptions) => {
        console.log(launchOptions.args);
        if (browser.name === "chrome") {
          launchOptions.args.push("--incognito");
          launchOptions.args.push("--disable-application-cache");
        }
        return launchOptions;
      });
      // implement node event listeners here

      on("task", {
        readDirectory: (path) => {
          return fs.promises.readdir(path);
        },
      });
    },
  },
});

// plugins/index.js
