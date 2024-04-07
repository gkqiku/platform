/// <reference types="Cypress" />
describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('input[name="email"]').type('user1')
    cy.get('input[name="current-password"]').type('1234').wait(100)
    cy.get('.send > .antiButton').click()
    // Select workspace
    cy.contains('DevWorkspace').click()
    cy.get('#app-recruit\\:string\\:RecruitApplication').should('be.visible').wait(1000).click()

    cy.get('.antiNav-subheader > .antiButton').click()
    cy.get(':nth-child(1) > .large-style > input').type('Aria{enter} Reynolds{enter} Backend{enter}NY')
    cy.get('.antiCard-pool > :nth-child(2)').click()
    cy.contains('Create').click()
    cy.get('[href="/workbench/ws1/recruit/talents"] > .antiNav-element').click()
    cy.contains("Reynolds Aria").should('exist')
    cy.contains("Fields Xander").should('exist')

  })
})
