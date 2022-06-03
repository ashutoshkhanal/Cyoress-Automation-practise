/// <reference types="Cypress" />


describe("My test suite",function()
{
    it("My test case",function()
    {
        cy.visit('http://automationpractice.com/index.php')
        
        cy.get("div[class = 'product-container']").find('h5 a').each(($es,index,$list) =>
        {
            if($es.text().includes('Printed Chiffon Dress'))
            {
                cy.get("div[class = 'product-container'] a:nth-child(1) span").eq(index).click({force: true})
            }

        })

        
    })
})
