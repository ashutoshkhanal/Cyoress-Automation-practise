import 'cypress-iframe'
/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
describe('My eight test suite',function()
{
    it('My eight test case',function()
    {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.frameLoaded('#courses-iframe')
      cy.iframe().find('a[href *="mentorship"]').eq(0).click()



    })
});