describe('Navajo Application',function()
{
    var fixtureData;
    before(()=>
    {
        cy.fixture('login').then(function(data)
        {
            this.data = data;
            fixtureData = this.data;
        })
    })
    
    it('should verify the invalid login',function()
    {
        cy.visit(Cypress.env('navaurl'))
        cy.signin(fixtureData.InvalidAccount,fixtureData.InvalidPin)
        cy.get('.message').should('include.text','Invalid Account number or password.')
       
    })

    it('should verify if the link is clickable',function()
    {
        cy.visit(Cypress.env('navaurl'))
        cy.get('a[href="/signup"]').click()
        cy.url().should('include','/signup')
        cy.go('back')
        cy.get('a[href="/forgot_pin_number"]').click()
        cy.url().should('include','/forgot_pin_number')
        cy.go('back')
        cy.get('a[href="/forgot_account_number"]').click()
        cy.url().should('include','/forgot_account_number')
        cy.go('back')


    })

   
})