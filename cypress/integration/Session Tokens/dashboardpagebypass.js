/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  //const neatCSV = require('neat-csv')
  import neatCSV from 'neat-csv';
  let productName
 describe('JWT TOKEN LOCAL STORAGE',function()
 {
    it('STORE LOGIN TOKEN',function()
    {
        cy.LoginApi().then(function()
        {
            cy.visit('https://rahulshettyacademy.com/client',
            {
                onBeforeLoad:function(window)
                {
                    window.localStorage.setItem('token',Cypress.env('token'))               
                 }   
            })
        })
        cy.get('.card-body b').eq(1).then(function(ele)
        {
            productName = ele.text()
        })
        cy.get(".btn.w-10.rounded").eq(1).click()
        cy.get('[routerlink*="/dashboard/cart"]').click()
        cy.contains('Checkout').click()
        cy.wait(2000)
        cy.get('input[placeholder="Select Country"]').type('ind')
        cy.get('button[type="button"]').each(($el,index,$list)=>
        {
           
            if($el.text().includes('Indonesia'))
            {
                $el.click()
            }
        })
        cy.get('.action__submit').click()
        cy.wait(2000)
        cy.get('.order-summary button').click()

        cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_ashutoshkhanal11.csv")
        .then(async(text) =>
        {
            const csv = await neatCSV(text)
            console.log(csv)
            const actualProductCSV = csv[0] ["Product Name"]
            expect(productName).to.equal(actualProductCSV)

        })
        
    })
 })
