
/// <reference types="Cypress" />

describe('My seventh test suite',function()
{
    
    it('My seventh test case',function()
    {
        cy.visit('http://codenboxautomationlab.com/practice/')
        cy.get('tr td:nth-child(2)').each(($es,index,$list) =>
        {   
            if($es.text().includes('SoapUI'))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(prize)
                {
                    expect(prize.text()).to.equal('30')
                })
            }


        })

        cy.get("input[type ='radio']").check(['radio1'])
        cy.get('#dropdown-class-example').select('option2')
       cy.get('.mouse-hover-content').invoke('show')
       cy.contains('Top').click()
       cy.url().should('include','top')
       cy.get('#alertbtn').click()

       cy.on('window:alert',(str) =>
       {
            expect(str).to.equal('Hello , share this practice page who love to learn automation')
       })

       cy.get('#autocomplete').type('aus')
       cy.get("ul[id = 'ui-id-1'] li").find('div').each(($es,index,$list) =>
       {    
           if($es.text()=='Austria')
           {
               $es.click()
           }

       })

       cy.get('#displayed-text').should('be.visible')
       cy.get('#hide-textbox').click()
       cy.get('#displayed-text').should('not.be.visible')

      


    })
});