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
      cy.get('.ap-box > :nth-child(2) > .overflow-label').click()
      cy.get('.selection > .row').click()
      cy.contains('Next').click()
      cy.contains('Create').click()
      cy.get('.is-empty').type('I just created a new dircet chat with you.{enter}')
  
  
    })
  })