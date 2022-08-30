describe('Navajo Application',function()
{
    var fixtureData;
    before(()=>
    {
        cy.fixture('card_details').then(function(data)
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

    it('should be able to add new card',function()
    {
        cy.contains('Profile').click()
        cy.get('.profile-nav-link').contains('Card Details').click()
        cy.contains('Add new').click()
        cy.wait(3000)
        cy.get('.__PrivateStripeElement  iframe').then(function($element)
        {
            const $body = $element.contents().find('body')
            let cardInfo = cy.wrap($body)
            cardInfo.find('span[class="InputContainer"] input').eq(0).type(fixtureData.cardNumber)
            cardInfo = cy.wrap($body)
            cardInfo.find('span[class="InputContainer"] input').eq(1).type(fixtureData.expiryDate)
            cardInfo = cy.wrap($body)
            cardInfo.find('span[class="InputContainer"] input').eq(2).type(fixtureData.verificationCode)
        })
        cy.get('#default_payment').check().should('be.checked')
        cy.get('#address_line1').type(fixtureData.Addressline1)
        cy.get('#address_line2').type(fixtureData.Addressline2)
        cy.get('#address_city').type(fixtureData.City)
        cy.get('#select-state').select(fixtureData.State)
        cy.get('#address_postal_code').type(fixtureData.PostalCode)
        //cy.get(div[class='col-auto button'] button[type='submit']).click()

    })

    it('should be able to select the radio button',function()
    {
        cy.contains('Profile').click()
        cy.get('.profile-nav-link').contains('Card Details').click()
        cy.get('.radio-btn').each(($elem,index)=>
        {
            if(index === 0)
            {
                cy.wrap($elem).click()
            }
        })
        cy.get('.card-primary').should('include.text','Primary')
    })

})