/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

 describe('BOM Intercept request',function()
 {
    this.beforeAll('Fixture',function() {
        cy.fixture('example').then((data)=>
        {
            this.data = data


        })
        
    })
    it('Storing JWT token for login',function()
    {
        cy.BOMLoginApi().then(function()
        {
            cy.visit('http://103.94.159.167/BOM/web/index.html#/dashboard',
            {
                onBeforeLoad:function(window)
                {
                    window.localStorage.setItem('token',Cypress.env('token'))
                

                }
        })
    })
    })
})
