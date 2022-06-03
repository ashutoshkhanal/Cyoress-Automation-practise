/// <reference types="cypress" />
describe('Login Module Functionality',function()
{
    this.beforeEach('Verify by Login and password',function()
    {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
     
    })

    it('Add to Cart',function()
    {
        cy.get("div[class = 'inventory_item']").each(($el, index, $list) =>{

            const ProText = $el.find("div[class='inventory_item_name']").text()
            if(ProText.includes('Sauce Labs Backpack'))
            {
                $el.find('div button').click()
            }
            
        })
        cy.get('.shopping_cart_link').click()
        cy.get('.cart_quantity').should('have.length.at.most',1)
        cy.get('.inventory_item_desc').should('have.text','carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('.cart_list').should('have.value','')
    })

    it("Next Item in the cart",function()
    {
        cy.get("div[class = 'inventory_item']").each(($el, index, $list) =>{

            const ProText = $el.find("div[class='inventory_item_name']").text()
            if(ProText.includes('Test.allTheThings() T-Shirt (Red)'))
            {
                $el.find('div button').click()
            }
            
        })
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="continue"]').click()
        cy.get('.error-message-container').should('not.be.empty')
        cy.get('.error-message-container').should('have.text','Error: First Name is required')
    
    })
    
    it("Login Form Validate",function()
    {
        cy.get("div[class = 'inventory_item']").each(($el, index, $list) =>{

            const ProText = $el.find("div[class='inventory_item_name']").text()
            if(ProText.includes('Test.allTheThings() T-Shirt (Red)'))
            {
                $el.find('div button').click()
            }
            
        })
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Test1')
        cy.get('[data-test="lastName"]').type('test12')
        cy.get('[data-test="postalCode"]').type('KU-123')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.get('#checkout_complete_container').should('not.be.empty')
        cy.get('[data-test="back-to-products"]').click()
    
    })

    it('Logout Functionality',function()
    {
        cy.get("#react-burger-menu-btn").click()
        cy.get('#logout_sidebar_link').click()
        cy.get(".login_wrapper").should('be.visible')
        cy.get('#user-name').should('have.value','')
        cy.get('[data-test="password"]').should('have.value','')
        cy.get('[data-test="login-button"]').click()
        cy.get('.error-message-container').should('be.visible')
        cy.get('.error-message-container').then(function($texts)
        {
            const data = $texts.text()
            expect(data).to.equals('Epic sadface: Username is required')
        })

    })




})