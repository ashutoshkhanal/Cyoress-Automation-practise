Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

/// <reference types="Cypress" />
describe("My eleventh test suite",function()
{
    it("My eleventh test case",function()
    {
       cy.visit('https://www.daraz.com.np/')
       cy.get('#q').type('head')
       cy.wait(4050)
       cy.get("div[class ='suggest-list--3Tm8'] ").find('a').contains("Headphones").click({force: true})
       cy.get('div[class = "c3e8SH"] div div[ class="c3KeDq"] div[class="c16H9d"]').contains('X-Age Conve Up Beat Sport Bluetooth').click()
       
        
    })
})