const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '22ca38',
  e2e: {
    baseUrl:'https://blazedemo.com', 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
