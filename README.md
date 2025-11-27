# Cypress TypeScript Sample Project

A sample Cypress end-to-end testing project configured with TypeScript.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

## Running Tests

### Open Cypress Test Runner (Interactive Mode)
```bash
npm run cypress:open
```

### Run Tests Headless
```bash
npm run cypress:run
```

### Run Tests in Headed Mode
```bash
npm run cypress:run:headed
```

## Project Structure

```
.
├── cypress/
│   ├── e2e/              # Test files
│   │   ├── example.cy.ts
│   │   └── kitchen-sink.cy.ts
│   ├── fixtures/         # Test data
│   │   └── example.json
│   └── support/          # Support files
│       ├── commands.ts   # Custom commands
│       └── e2e.ts        # Global configuration
├── cypress.config.ts      # Cypress configuration
├── tsconfig.json         # TypeScript configuration
└── package.json
```

## Configuration

- **Cypress Config**: `cypress.config.ts` - Configure base URL, viewport, and other Cypress settings
- **TypeScript Config**: `tsconfig.json` - TypeScript compiler options
- **Base URL**: Currently set to `https://example.cypress.io` (can be changed in `cypress.config.ts`)

## Writing Tests

Tests are written in TypeScript (`.ts` files) in the `cypress/e2e/` directory. Example:

```typescript
describe('My Test Suite', () => {
  it('should do something', () => {
    cy.visit('/')
    cy.get('h1').should('be.visible')
  })
})
```

## Custom Commands

Custom commands can be added in `cypress/support/commands.ts`. An example `dataCy` command is already included.

## Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

