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
      cy.contains('Employee').click()
      cy.get('.caption-height > .ac-header-full > .antiButton').click()
      cy.get(':nth-child(1) > .large-style > input').type('Gazmend{enter} Kqiku{enter} gkqiku@gmail.com')
      cy.contains('Create').click()
    
  
  
    })
  })