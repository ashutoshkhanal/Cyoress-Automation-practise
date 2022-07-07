/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

 describe('Fake API',function()
 {
    it('Mock Http Response',function()
    {
        cy.visit('https://flamboyant-allen-00cf47.netlify.app/login')
        cy.intercept('GET','https://613715dc8700c50017ef57b0.mockapi.io/api/listnames',(req) =>
        {
            req.url = 'https://613715dc8700c50017ef57b0.mockapi.io/api/tasks'
            req.continue((res) =>
            {
                expect(res.statusCode).to.equal(200)

            })

        }).as('listname')
    
        cy.get('#email').type('ashutoshkhanal11@gmail.com')
        cy.get('#password').type('Manchester10#')
        cy.get('.btn').click()   
        cy.wait(5000) 
        cy.wait('@listname')


    })
 })