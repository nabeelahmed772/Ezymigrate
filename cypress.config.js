
const { defineConfig } = require("cypress");


module.exports = defineConfig({
  
  defaultCommandTimeout :18000,
  requestTimeout:20000,
  chromeWebSecurity: true,


  CYPRESS_RESIZE_OBSERVER_LOOPS: 10,
  
    
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





