/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

 describe('Fake API',function()
 {
    it('Mock Http Response',function()
    {
        cy.visit('https://flamboyant-allen-00cf47.netlify.app/login')
        cy.intercept({
                method:'GET',
                url:'https://613715dc8700c50017ef57b0.mockapi.io/api/listnames'
            },
            {
                statusCode:200,
                body:[{
                    "list":"Personal",
                    "id":"1"
                }]
            }).as('listname')
    
        cy.get('#email').type('ashutoshkhanal11@gmail.com')
        cy.get('#password').type('Manchester10#')
        cy.get('.btn').click()    
        cy.wait('@listname').should(({request,response})=>
        {
            cy.get('.list-names-wrapper').should('have.length',response.body.length)

        })


    })
 })