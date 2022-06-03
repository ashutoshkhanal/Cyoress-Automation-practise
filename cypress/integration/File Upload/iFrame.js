import "cypress-iframe";
/// <reference types="cypress" />
/// <reference types = "Cypress-iframe"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe('Iframe Functionality',function()
{
    it('Verify iframe Content',function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       cy.scrollTo(0,1500)
       cy.frameLoaded('#courses-iframe')
       cy.iframe().find('div.login-btn a[class="theme-btn register-btn"]').click()
       cy.wait(5000)
       cy.iframe().find('input#email').type('as@gmail.com')
       cy.iframe().find('input#password').type('12312asd')
      cy.iframe().find('a[href="/secure/9521/identity/sign_up"]').click()
    })
    
})