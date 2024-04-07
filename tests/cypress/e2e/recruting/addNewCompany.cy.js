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
    cy.contains('Companies').click()
    cy.get(':nth-child(1) > .ac-header-full > .antiButton').click()
    cy.get('.large-style > input').type('ByteBloom Technologies')
    cy.get('.is-empty').type(
      'Description: ByteBloom Technologies is a tech company that specializes in creating custom software solutions for businesses. We focus on delivering high-quality and innovative products that cater to our clients'
    )
    cy.contains('Create').click()

    
  })
})
