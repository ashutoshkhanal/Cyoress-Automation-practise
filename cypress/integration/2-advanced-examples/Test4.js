/// <reference types="Cypress" />

describe('My 4th Test suite',function()
{
    it('My 4th Test case',function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.wait(4000)
        //cy.get("input[type = 'checkbox']").then(function(check)
        //{
        //    check[1].click()
        //})
        cy.get("input[type = 'checkbox']").check(['option2','option3'])

        cy.get('select').select('option1').should('have.value','option1')

        cy.get('#autocomplete').type('ind')

        cy.get("li[class = 'ui-menu-item'] ").each(($el,index,$list) =>
        {   
            if($el.find('div').text().includes('India'))
            {
                $el.click()
            }
            

        })
        






    })
})