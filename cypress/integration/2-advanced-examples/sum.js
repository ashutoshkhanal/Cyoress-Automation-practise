/// <reference types="Cypress" />

describe("My Test Suite",function()
{
   
    it("Test Case",function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        var sum = 0 
        cy.get("table[class = 'table-display'] tbody  tr td:nth-child(3)").each(($es,index,$list) =>
        {
            var sumProduct = $es.text()
            sum = Number(sum) + Number(sumProduct)
           
        }).then(function()
        {
            cy.log(sum)

        })

               
        
    })
})