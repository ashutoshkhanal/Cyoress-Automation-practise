const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'mochawesome',
  env: {
    url: 'https://rahulshettyacademy.com/seleniumPractise/',
    web: 'https://react-shopping-cart-67954.firebaseapp.com/',
    navaurl:
      'http://navajostaging-env.eba-aarsvpve.us-east-1.elasticbeanstalk.com',
  },
  projectId: 'j1ayeq',
  chromeWebSecurity: false,
  
  e2e: {

    experimentalSessionAndOrigin: true,
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  
  },
  
})
