/// <reference types="Cypress" />
import HomePage from '../pageobject/HomePage'

describe("My First Framework",function() 
{
    before(function()
    {
        cy.fixture('example').then(function(data)
        {
this.data = data
        })

    })

    it('Test Case',function()
    {
        const homepage = new HomePage 
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
         homepage.getName().type(this.data.name)
         homepage.getGender().select(this.data.gender)
         homepage.getName().should('have.value',this.data.name)
         homepage.getName().should('have.attr','minlength','2')
         homepage.getEnterperneur().should('be.disabled')
         homepage.getShopTab().click()
         //customized css
         cy.products('iphone X')
         //multiple paramater with same method using foreach array
         this.data.products.forEach(function(element)
         {
             cy.products(element)
         })

         cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
        
         var sum = 0;
         cy.get("tr td:nth-child(4) strong").each(($es,index,$list) =>
        {
            const prize = $es.text()
            var res = prize.split(" ")
            res = res[1].trim()
            sum = Number(sum) + Number(res)

        }).then(function() {
            cy.log(sum)
            
        })

        cy.get('h3 strong').then(function(element) {
            
            const amount = element.text()
            var res = amount.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.equal(sum)
        })

    })

})