/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Practise Commerce Test Suite',function()
{
    it('Practise test case',function()
    {
        cy.visit('https://react-shopping-cart-67954.firebaseapp.com/')
        cy.wait(12000)
        cy.get('div[class="shelf-item"]').each(($es,index,$list) =>
        {
            var protext = $es.find('p').text()
            if(protext.includes('Cat Tee Black T-Shirt'))
            {
                $es.find('div[class="shelf-item__buy-btn"]').click()
            }
        })
        cy.get('.buy-btn').click()
        var sum = 0;
        cy.get('div[class="shelf-item__price"] p').each(($es,index,$list)=>
        {
            const amount = $es.text()
            var res = amount.split(" ")
            var total = res[1].trim()
            cy.log(total)

        })
        
    })
})