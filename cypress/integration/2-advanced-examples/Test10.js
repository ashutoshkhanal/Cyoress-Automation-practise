Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

/// <reference types="Cypress" />
describe("My tenth test suite",function()
{
    it("My tenth test case",function()
    {
        cy.visit('https://www.phptravels.net/home')
        cy.get('a[data-name="flights"]').click()
        cy.get('#s2id_location_from').click()
        cy.get('[id *="select2-drop"] div input').type('aus')
        cy.wait(4000)
        cy.get('ul[class="select2-results"] li').find('div').contains("Austin").click()
        cy.get('#s2id_location_to').click()
        cy.get("div[id = 'select2-drop'] div input").type('ind')
        cy.wait(4000)
        cy.get('ul[class="select2-results"] li').find('div').contains("Cabinda").click()

        
    })
})