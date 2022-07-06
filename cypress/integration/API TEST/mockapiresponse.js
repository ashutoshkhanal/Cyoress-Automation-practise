/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

 describe('Fake API',function()
 {
    it('Mock Http Response',function()
    {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept({
            method:'GET',
            url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
        {
            statusCode:200,
            body:[{
                "book_name":"RestAssured with Java",
                "isbn":"RSU",
                "aisle":"2301"}]
        
        }).as('bookretrieval')
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait('@bookretrieval').should(({request,response})=>
        {
            cy.get('tr').should('have.length',response.body.length+1)

        })
        cy.get('p').should('have.text','Oops only 1 Book available')
    })
 })