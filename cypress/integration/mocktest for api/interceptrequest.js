/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

 describe('BOM Intercept request',function()
 {
    it('Intercept Daybook report',function()
    {
        cy.visit('http://103.94.159.167/BOM/web/index.html#/login')
        cy.intercept('GET','http://103.94.159.167/BOM/api/customer/customer-registration?pageNumber=0&fy=7879&branch=2&datalimit=1000&dateFrom=&dateTo=',
        (req) =>
        {
            req.url = 'http://103.94.159.167/BOM/api/customer/customer-registration?pageNumber=0&fy=7879&branch=1&datalimit=1000&dateFrom=&dateTo='
            req.continue((res) =>
            {
                expect(res.statusCode).to.equal(200)

            })
        }).as('clientinfo')
        cy.get('input[name="username"]').type('PUJAN')
        cy.get('input[name="password"]').type('pujan{enter}')
        cy.contains('Client Module').click({force:true})
        cy.contains('Client Info').click()
        cy.get(':nth-child(3) > .form-group > .form-control').select('2')
        cy.contains('Search').click()
        cy.wait('@clientinfo')

    })
})