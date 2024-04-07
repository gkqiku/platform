/// <reference types="Cypress" />
describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('input[name="email"]').type('user1')
    cy.get('input[name="current-password"]').type('1234').wait(100)
    cy.get('.send > .antiButton').click();
    // Select workspace
    cy.contains('DevWorkspace').click()

    cy.get('#app-contact\\:string\\:Contacts').should('be.visible').wait(1000).click();
    cy.contains('Company').click()
    // + Company
    cy.get('.caption-height > .ac-header-full > .antiButton').click()

    cy.get('.large-style > input').type('Name of Company')
    cy.get('.is-empty').type('Descrpiton')

    cy.get('#presentation\\:string\\:AddSocialLinks').should('be.visible').wait(1000).click();
    cy.get('.ap-box > :nth-child(9)').click()
    cy.get('.search').type('Cypress{enter}')
    cy.contains('Create').click()
    


  })
})