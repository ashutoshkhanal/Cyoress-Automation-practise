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

    this.beforeEach('should login to the system', function()
    {   
        
        cy.session('login',function()
        {
            cy.visit(Cypress.env('navaurl'))
            cy.signin(fixtureData.AccountNumber,fixtureData.PinNumber)
        })
        cy.visit(Cypress.env('navaurl'))

    })
    
    it('Should verify if navigation bar is clickable',function()
    {
       
        cy.contains('Home').click()
        cy.get('.home-title').should('include.text','Welcome Test User')
        cy.get('.home-card').should('be.visible')
        cy.contains('Invoices').click()
        cy.get('.table.align-middle').should('be.visible')
        cy.url().should('include','/invoice')
        cy.go('back')
        cy.contains('Profile').click()
        cy.url().should('include','/profile')
        cy.go('back')
        
        
    })

    
   
})