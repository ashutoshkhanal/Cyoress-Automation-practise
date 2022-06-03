/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe("Deerhold Website Suite",function()
{
    it("Navigation Section Test Case",function()
    {
        cy.visit('https://demo.deerhold.org/services')
        cy.get("#navbarNav > ul > li:nth-child(2) > div").invoke('show')
        cy.contains('Web Platform').click()
    
    
    })

    it("Navigation Section Second part",function()
    {
    
        cy.get("#navbarNav > ul > li:nth-child(2) > div").invoke('show')
        cy.contains('IoT').click()
        cy.get('h2 > strong').should('have.text',"Our IoT development and consulting services\n                ")
        cy.go('back')
        cy.get("#navbarNav > ul > li:nth-child(2) > div").invoke('show')
        cy.contains('Cloud').click()
        cy.go('back')
        cy.get("#navbarNav > ul > li:nth-child(3) > div").invoke('show')
        cy.contains('Contact Us').click()
        cy.go('back')
    })


})