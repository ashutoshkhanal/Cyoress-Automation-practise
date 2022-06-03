/// <reference types="Cypress" />

describe("My 12 test suit", function()
{   
    it("My 12 test case",function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("input[type = 'checkbox']").check('option1')

        cy.get('#dropdown-class-example').select('option1')
        cy.get('#opentab').invoke('removeAttr','target').click()

        cy.url().should('include','rahulshettyacademy')

        cy.go('back')

        cy.get('select#dropdown-class-example').select('option2')

        cy.get('#name').type('Aryan')
        cy.get('#alertbtn').click()

        cy.get('input#autocomplete').type('ind')
        cy.wait(3000)
        cy.get("li[class = 'ui-menu-item'] ").each(($es,index,$list) =>
        {
            if($es.find('div').text().includes("India"))
            {
                $es.click()
            }

        }) 
        cy.get("table[name = 'courses'] tbody tr td:nth-child(2)").each(($es,index,$list) =>
        {   
            if($es.text().includes('Python'))
            {
                cy.get("table[name = 'courses'] tbody tr td:nth-child(2)").eq(index).next().then(function(price)
                {
                    expect(price.text()).to.equal('25')
                })
            }


        })  
        
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')


        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')

        

    })
    
})