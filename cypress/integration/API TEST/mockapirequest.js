/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

 describe('Fake API',function()
 {
    it('Mock Http Response',function()
    {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req) =>
        {
            req.url ="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"

            req.continue((res)=>
            {
                // expect(res.statusCode).to.equal(403)
            })
        }).as('changeurl')
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait('@changeurl')
        
    })
 })