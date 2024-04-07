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
    cy.get('[href="/workbench/ws1/recruit/vacancies"] > .antiNav-element').click()
    cy.get('.ac-header-full > .primary').click()
    cy.get('.large-style > input').type('QA Enginner')
    cy.get('.datetime-button').click()
    cy.get(':nth-child(5) > span').click().wait(100)
    cy.get('.flex-no-shrink > .antiButton').click()

    cy.get('.ac-header-full > .primary').click()
    cy.get('.large-style > input').type('Backend')
    cy.get('.datetime-button').click()
    cy.get(':nth-child(5) > span').click().wait(100)
    cy.get('.flex-no-shrink > .antiButton').click()

    cy.get('.ac-header-full > .primary').click()
    cy.get('.large-style > input').type('Frontend')
    cy.get('.datetime-button').click()
    cy.get(':nth-child(5) > span').click().wait(100)
    cy.get('.flex-no-shrink > .antiButton').click()
    
    



  })
})
