const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video:false,
  e2e: {
    //baseUrl: 'http://localhost:1234',
    baseUrl: 'https://automationpanda.com',
    specPattern:'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config){

    },
  },
});