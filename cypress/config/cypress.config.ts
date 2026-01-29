import path from 'path'

import { defineConfig } from 'cypress'

const projectRoot = path.resolve(__dirname, '..', '..')
const cypressRoot = path.join(projectRoot, 'cypress')

const absolutePaths = {
  specPattern: path.join(cypressRoot, 'e2e', '**/*.cy.{js,jsx,ts,tsx}'),
  supportFile: path.join(cypressRoot, 'support', 'e2e.ts'),
  fixturesFolder: path.join(cypressRoot, 'fixtures'),
  videosFolder: path.join(cypressRoot, 'videos'),
  screenshotsFolder: path.join(cypressRoot, 'screenshots'),
  downloadsFolder: path.join(cypressRoot, 'downloads'),
}

const relativePaths = {
  specPattern: '../e2e/**/*.cy.{js,jsx,ts,tsx}',
  supportFile: '../support/e2e.ts',
  fixturesFolder: '../fixtures',
  videosFolder: '../videos',
  screenshotsFolder: '../screenshots',
  downloadsFolder: '../downloads',
}

const asBoolean = (value: unknown) => {
  if (typeof value === 'boolean') return value
  if (typeof value === 'string') return ['true', '1', 'yes'].includes(value.toLowerCase())
  return false
}

export default defineConfig({
  e2e: {
    ...absolutePaths,
    baseUrl: 'https://example.cypress.io',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      const useRelativePaths =
        asBoolean(config.env?.useRelativePaths) ||
        asBoolean(config.env?.use_relative_paths) ||
        asBoolean(process.env.BSTACK_USE_RELATIVE_PATHS) ||
        asBoolean(process.env.USE_RELATIVE_PATHS) ||
        asBoolean(process.env.CYPRESS_USE_RELATIVE_PATHS) ||
        asBoolean(process.env.npm_config_use_relative_paths)

      Object.assign(config, useRelativePaths ? relativePaths : absolutePaths)

      return config
    },
  },
})
