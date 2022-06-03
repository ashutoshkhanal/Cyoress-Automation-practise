/// <reference types="Cypress" />

describe("Register test suites",function()
{
    before(function()
    {
        cy.fixture('register').then(function(data)
        {
        this.data = data
        })
    })


    it("To see if it accepts the fixture data",function()
    {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('input[placeholder="First Name"]').type(this.data.firstname)
        cy.get('input[placeholder="Last Name"]').type(this.data.lastname)
        cy.get('textarea[ng-model="Adress"]').type(this.data.address)
        cy.get("input[type = 'email']").type(this.data.email)
        cy.get('input[type="tel"]').type(this.data.phone)
        cy.get('input[type="radio"]').check(this.data.gender)
        this.data.hobbies.forEach(function(element)
        {
            cy.get('input[type="checkbox"]').check(element)
        })

        cy.skills('Adobe InDesign')
        
    })
})