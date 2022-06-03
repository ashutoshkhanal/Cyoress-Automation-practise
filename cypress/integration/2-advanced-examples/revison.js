/// <reference types="Cypress" />

describe('TEST CASE PRACTISe',function()
{
    it("after long time",function()
    {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('a[href="/angularpractice/shop"]').click()
        cy.get('div[class="card h-100"]').each(($es,index,$list) =>
        {
            var text = $es.find('div h4 a').text()
            if(text.includes('iphone X'))
            {
                $es.find('div button').click()
            }

        })
    })
})