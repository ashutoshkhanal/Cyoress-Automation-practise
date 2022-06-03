
/// <reference types="Cypress" />
describe('My fifth test suite',function()
{
    it('My fifth test case',function()
        {
            cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
            cy.wait(4000)
            cy.get('#alertbtn').click()
            cy.get('#confirmbtn').click()
            cy.on('window:confirm',(str) =>
            {
                expect(str).to.equal('Hello , Are you sure you want to confirm?')
            })

            cy.get('#opentab').invoke('removeAttr','target').click()
            cy.wait(4000)
            cy.url().should('include','rahulshettyacademy')
          
            cy.go('back')


        })
})