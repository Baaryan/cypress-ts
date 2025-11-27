/// <reference types="cypress" />

describe('Kitchen Sink Examples', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  it('should navigate to the homepage', () => {
    cy.url().should('include', 'example.cypress.io')
  })

  it('should find and click on elements', () => {
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })

  it('should query elements', () => {
    cy.get('#query-btn').should('contain', 'Button')
    cy.get('.query-btn').should('contain', 'Button')
    cy.get('[data-test-id="test-example"]').should('contain', 'test')
  })

  it('should handle assertions', () => {
    cy.get('.query-list')
      .contains('bananas')
      .should('have.class', 'third')
    
    cy.get('.query-list')
      .contains('bananas')
      .should('have.css', 'text-decoration', 'line-through')
  })

  it('should work with aliases', () => {
    cy.get('.query-form').find('input:first').as('firstInput')
    cy.get('@firstInput').should('be.visible')
  })
})

