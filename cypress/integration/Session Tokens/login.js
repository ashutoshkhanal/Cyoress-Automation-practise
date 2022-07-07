/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

 describe('JWT TOKEN LOCAL STORAGE',function()
 {
    it('STORE LOGIN TOKEN',function()
    {
        cy.LoginApi().then(function()
        {
            cy.visit('https://rahulshettyacademy.com/client',
            {
                onBeforeLoad:function(window)
                {
                    window.localStorage.setItem('token',Cypress.env('token'))                }   
            })
        })
        
        
    })
 })