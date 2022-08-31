describe('Navajo Application',function()
{
    var fixtureData;
    var fullName;
    var clientAccount;
    before(()=>
    {
        cy.fixture('profile_details').then(function(data)
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

    it('should verify user information',function()
    {
        cy.contains('Profile').click()
        cy.get('div[class="profile-info"] p:first-child').then(function(name)
        {
            const clientName = name.text()
            fullName = clientName
            
        })

        cy.get('.profile-info-card :first-child .profile-info-value').then(function(details)
        {
            const clientDetails = details.text()
            expect(clientDetails).to.include(fullName)
        })

        cy.get('div[class="profile-info"] p:last-child').then(function(account)
        {
            const accountDetail = account.text()
            clientAccount = accountDetail
            
        })

        cy.get('.profile-info-card :nth-child(3) .profile-info-value').then(function(acdetails)
        {
            const clientACDetails = acdetails.text()
            expect(clientACDetails).to.include(clientAccount)
        })
    })

    it('should verify if profile navlink is clickable',function()
    {
        cy.contains('Profile').click()
        cy.get('.profile-nav-link').contains('My Profile').click()
        cy.get('.generic-title').should('include.text','Profile')
        cy.get('.profile-nav-link').contains('Card Details').click()
        cy.get('.generic-title').should('include.text','Card Details')
        cy.get('.profile-nav-link').contains('My Keys').click()
        cy.get('.generic-title').should('include.text','Past Keys')
    
    })

    it('should verify if the [Edit Profile] button is clickable',function()
    {
        cy.contains('Profile').click()
        cy.contains('Edit Profile').click()
        cy.get('#auto_charge').uncheck()
        cy.get('#address_line1').clear().type(fixtureData.Addressline1)
        cy.get('#address_line2').clear().type(fixtureData.Addressline2)
        cy.get('#select-state').select(fixtureData.State)
        cy.get('#address_postal_code').clear().type(fixtureData.PostalCode)
        //cy.get("div[class='col-auto button'] button").click()

    })

    it('should verify if the [Reset Pin] button is clickable',function()
    {
        cy.contains('Profile').click()
        cy.contains('Reset Pin').click()
        cy.get('.generic-title').should('include.text','Reset Pin')
        cy.get('#account_current_password').type(fixtureData.OldPin)
        cy.get('#account_password').type(fixtureData.NewPin)
        cy.get('#account_password_confirmation').type(fixtureData.ConfirmPin)
        //cy.contains('Change PIN ').click()
    })
 
})