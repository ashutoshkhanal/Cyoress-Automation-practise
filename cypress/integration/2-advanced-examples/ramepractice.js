/// <reference types="Cypress" />

describe("MY PRACRISE",function()
{
    before(function()
        {   
            cy.fixture('example').then(function(data)
            {
                this.data = data
            })

        })
        
    it("MY TEST CASE",function()
    {
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
       this.data.products.forEach(function(element)
       {
        cy.products(element)

       })
        
    })
})