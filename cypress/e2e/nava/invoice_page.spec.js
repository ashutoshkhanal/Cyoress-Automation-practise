describe('Navajo Application',function()
{
    var fixtureData;
    var amt;
    var cardNumber1 = 'xxxx-xxxx-xxxx-4444';
    var cardNumber2 = 'xxxx-xxxx-xxxx-4242';
    var invoiceamt;

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
    
    it('Should verify invoice page UI functionality',function()
    {
        
        cy.contains('Invoices').click()   
        cy.get('.table.align-middle').should('include.text','Title')
        cy.get('.table.align-middle').should('include.text','Date of Issue')
        cy.get('.table.align-middle').should('include.text','Amount')
        cy.get('.table.align-middle').should('include.text','Action')

    })
      
    it('Should verify if the action button [View] is clickable',function()
    {
        cy.contains('Invoices').click()
        cy.invoicemenu(0)
        cy.get('.invoice-payment div[class="invoice-paid"]').should('include.text','PAID')
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

    it('Should verify if the action button [Pay] is clickable',function()
    {
        cy.contains('Invoices').click()
        cy.invoicemenu(1)
        cy.get("a[class='btn btn-primary']").click()
        cy.get('input[id="payment_amount"]').clear().type(fixtureData.PayingAmount)
    })

    // it('Should verify if the amount is equal in the total amount and invoice table ',function()
    // {
    //     cy.contains('Invoices').click()   
    //     cy.get('.invoice-amount-status  .invoice-amount').eq(0).then(function(inAmt)
    //     {
    //         const amountinvoice = inAmt.text()
    //         invoiceamt = amountinvoice
    //     })
        
    //     cy.invoicemenu(0)
    //     cy.get('.invoice-total-value').then(function(totalamt)
    //     {
    //         const total = totalamt.text()
    //         expect(total).to.equals(invoiceamt)
    //     }) 

    // })

    it('Should verify if we change the card number for payment',function()
    {
        cy.contains('Invoices').click()
        cy.invoicemenu(1)
        cy.get("a[class='btn btn-primary']").click()
        cy.get("button[data-bs-target$='#changeCard']").click()
        cy.wait(3000)
        cy.get('form[class="button_to"] button.radio-btn').each(($elem, index) => 
        {
            if (index === 0) {
              cy.wrap($elem).click();
            }
        })
        cy.get('.payment-card-info').should('include.text',cardNumber1)
    })


   
})