describe('Navajo Application',function()
{
    var fixtureData;
    var amt;
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

    
    it('Should verify if menu is clickable',function()
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
        
    })

    it('should verify the functionality of Last 5 month invoices',function()
    {
        cy.get('.link').click()
        cy.url().should('include','/invoice')
        cy.get('h2').should('include.text','Invoices')
        cy.get('table').should('be.visible')
        cy.go('back')
        cy.get('tr td a').eq(0).click()
        cy.go('back')
        cy.get('tr td a').eq(1).click()
    })

    it('should verify if the unpaid [Pay] button is clickable',function()
    {
        cy.get("form[action='outstanding_payment'] button[type='submit']").click()
        cy.url().should('include','/outstanding_payment')
        cy.get('input[id="payment_amount"]').should('include.value','80.00')
        cy.get('input[id="payment_amount"]').clear().type(fixtureData.PayingAmount)
        
    })

    
    it('should verify if the due payment [Pay] button is clickable',function()
    {
        cy.get(".home-card.home-bg-left form button").click()
        cy.get('.invoice-payment div[class="invoice-paid"]').should('include.text','PAID')
        cy.get('.invoice-amount-due p:last-child').should('include.text','$0.00') 
        cy.get("td[class='text-end']").then((paidamount)=>
        {
            const amount = paidamount.text()
            amt = amount
          
        })
        cy.get('.invoice-total-value').then(function(totalamt)
        {
            const total = totalamt.text()
            expect(total).to.equals(amt)
        })
               
    })


})