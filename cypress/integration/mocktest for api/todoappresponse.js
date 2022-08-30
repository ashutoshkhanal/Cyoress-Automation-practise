/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

 describe('BOM Intercept response',function()
 {
    it('Intercept Daybook report',function()
    {
        cy.visit('https://flamboyant-allen-00cf47.netlify.app/login')
        
        cy.get('input[type="email"]').type('ashutoshkhanal11@gmail.com')
        cy.get('input[type="password"]').type('Manchester10#')
        cy.get('app-button').click()
    })
})