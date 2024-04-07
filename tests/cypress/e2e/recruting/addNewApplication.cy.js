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
    cy.contains('Application').click()
    cy.get(':nth-child(1) > .ac-header-full > .antiButton').click()
    cy.get('#vacancy\\.talant\\.selector > .w-full > .antiContactCard').click()
    cy.get('.header > .flex-between > .svelte-1p0m9na').type("Aria{enter}")
    cy.contains('Create').click()

    cy.get(':nth-child(1) > .ac-header-full > .antiButton').click()
    cy.get('#vacancy\\.talant\\.selector > .w-full > .antiContactCard').click()
    cy.get('.header > .flex-between > .svelte-1p0m9na').type('Aria{enter}')
    cy.get('#space\\.selector > .antiContactCard').click()
    cy.get('.header > .flex-between > .svelte-1p0m9na').type('Backend{enter}')

    cy.contains('Create').click()
  })
})
