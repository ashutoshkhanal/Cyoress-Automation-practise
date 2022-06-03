/// <reference types="Cypress" />
import StartPage from '../pageobject/Startpage'
import CheckOut from '../pageobject/CheckOut'


describe("My Test Suite",function()
{
    before(function()
    {
        cy.fixture('example').then(function(data)
        {
this.data = data 
        })
    })

    it("Test Case",function()
    {
        const vegetables = new StartPage
        const checkout = new CheckOut
        cy.visit(Cypress.env('url'))
        vegetables.searchVeg().type(this.data.search)
        this.data.veggie.forEach(function(element)
        {
            cy.veggie(element)
        })
        vegetables. goCart().click()
        vegetables.setCheckOut().click()
        var sum = 0
        cy.get('tr td:nth-child(5) p').each(($es,index,$list) =>
        {
            const sumText = $es.text()
            var value = Number(sumText)
            sum = sum + value             

        }).then(function(){
            cy.log(sum) 
        })

        cy.get('#root > div > div > div > div > span.totAmt').then(function(element)
        {
            const final = element.text()
            var result = parseInt(final,10)
            expect(sum).to.equal(result)
        })

        checkout.promoCode().type('rahulshettyacademy')
        checkout.clickApply().click()
        checkout.placeOrder().click()
        checkout.selectCountry().select(this.data.country)
        checkout.checkBox().check()
        checkout.finalButton().click()


         
        
    })
})