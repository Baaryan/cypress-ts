import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io',
    specPattern: '../e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: '../support/e2e.ts',
    fixturesFolder: '../fixtures',
    videosFolder: '../videos',
    screenshotsFolder: '../screenshots',
    downloadsFolder: '../downloads',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
