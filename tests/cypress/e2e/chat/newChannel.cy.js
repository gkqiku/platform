/// <reference types="Cypress" />
describe('template spec', () => {
    it('passes', () => {
      cy.visit('/')
      cy.get('input[name="email"]').type('user1')
      cy.get('input[name="current-password"]').type('1234').wait(100)
      cy.get('.send > .antiButton').click();
      // Select workspace
      cy.contains('DevWorkspace').click()
  
      cy.get('#app-chunter\\:string\\:ApplicationLabelChunter').should('be.visible').wait(1000).click();
      cy.get('.header.svelte-yy4gfv > .antiButton').click()
      cy.get('.ap-box > :nth-child(1) > .overflow-label').click()
      cy.get('.font-regular-14').type('New Channal #1{enter}This is a just a channal')
      cy.contains('Create').click()

    cy.get('.header.svelte-yy4gfv > .antiButton').click()
      cy.get('.ap-box > :nth-child(1) > .overflow-label').click()
      cy.get('.font-regular-14').type('New Channal #1{enter}This is private Channal')
      cy.get('.hulyModal-content__settingsSet-line > .font-medium-14').click()
      cy.contains('Private').click()
      cy.contains('Create').click()

  
    })
  })