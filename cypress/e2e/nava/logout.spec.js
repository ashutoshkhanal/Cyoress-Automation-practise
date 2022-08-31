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
    
    it('Should verify if user is logged into the system',function()
    {
        cy.get('.home-title').should('include.text','Welcome Test User')
            
    })

    it('Should verify if user is logged out of the system',function()
    {
        cy.get('div[id="userProfileImage"]').click()
        cy.get('#logoutBtn').click()
        cy.url().should('include','/accounts/sign_in')
        cy.get('div[class="message notice"]').should('include.text','Signed out successfully.')
            
    })
 
})