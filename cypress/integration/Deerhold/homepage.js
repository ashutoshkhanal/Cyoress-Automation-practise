/// <reference types="Cypress" />

describe('HomePage Test Suite',function()
{
    it("HomePage Test Case",function()
    {
        cy.visit('https://demo.deerhold.org/')
        cy.get('a div.logoNav').click()
        cy.get('a div.logoNav').then(function(logo)
        {
            expect(logo).to.be.visible
        })
        cy.get(':nth-child(1) > #navbarDropdown').should('be.visible')
        cy.get(':nth-child(1) > #navbarDropdown').click()
        cy.go('back')
    
    })
})