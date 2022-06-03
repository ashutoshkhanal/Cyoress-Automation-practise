
/// <reference types="Cypress" />
describe('My sixth test suite',function()
{
    it('My six test case',function()
        {
            cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
            cy.wait(4000)
            cy.get("table[class = 'table-display'] tbody  tr td:nth-child(2)").each(($es,index,$list) =>
            {   
                var column = $es.text()
                if(column.includes('Python'))
                {
                    cy.get("table[class = 'table-display'] tbody  tr td:nth-child(2)").eq(index).next().then(function(price)
                    {
                        expect(price.text()).to.equal('25')
                    }
                    )  
                }

            })

            //Hover Example
            cy.wait(4000)
            cy.get('.mouse-hover-content').invoke('show')
            cy.contains('Top').click()
            cy.url().should('include','top')

        })
})