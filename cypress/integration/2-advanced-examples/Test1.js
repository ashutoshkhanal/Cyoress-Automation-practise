/// <reference types="Cypress" />

describe('My First Test Suite',function()
{
    it('My first Test Case',function()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('.product').each(($el, index, $list )=>
         {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews'))
            {
                $el.find('button').click()
            }

        })

        cy.get('.brand.greenLogo').then(function(logoelement)
        {
            cy.log(logoelement.text())

        })

        cy.get('.brand.greenLogo').should('have.text','GREENKART') 
       


    })
})