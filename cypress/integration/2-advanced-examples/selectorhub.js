import 'cypress-iframe'
/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />

describe("Selector Hub Test Suite", function()
{   
    it("To type on hidden element",function()
    {
        cy.visit("https://selectorshub.com/xpath-practice-page/")
        cy.get('[placeholder="First Enter name"]').invoke('show').should('be.visible').type('Sample',{force: true})
        cy.get('[placeholder="Enter Last name"]').invoke('show').should('be.visible').type('Client',{force: true})
       
        cy.get('input[name="chkSelectRow[]"]').each(($el, index, $list) => {

            // $el is a wrapped jQuery element
            if (index == '3') 
            {
              cy.wrap($el).click()
            }

        })

        cy.get('button[class="dropbtn"]').invoke('show')
        cy.contains('Join Training').click({force:true})
        cy.frameLoaded('#pact')
        cy.iframe().find('#tea').type('DAta')
        

          
    })        
  
})