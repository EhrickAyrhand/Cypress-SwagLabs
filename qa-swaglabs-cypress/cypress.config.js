const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      // Se quiser adicionar plugins ou hooks depois
    },
  },
  viewportWidth: 1280,
  viewportHeight: 720
});
