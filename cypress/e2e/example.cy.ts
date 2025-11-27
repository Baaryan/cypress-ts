describe('Example Cypress Test', () => {
  beforeEach(() => {
    // Visit the base URL before each test
    cy.visit('/')
  })

  it('should display the page title', () => {
    cy.title().should('not.be.empty')
  })

  it('should have a heading', () => {
    cy.get('h1').should('be.visible')
  })

  it('should be able to interact with elements', () => {
    // Example: Click on a link if it exists
    cy.get('body').then(($body) => {
      if ($body.find('a').length > 0) {
        cy.get('a').first().should('be.visible')
      }
    })
  })
})

