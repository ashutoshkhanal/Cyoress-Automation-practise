/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('File Upload',function()
{
    it('To check if we can upload file',function()
    {
       cy.visit('https://chercher.tech/practice/dynamic-table')
       cy.get('tr td:nth-child(2)').each(($es,index,$list) =>
       {
           if($es.text().includes("selenium-webdriver.com"))
           {
                
                cy.get("td:nth-child(2)").eq(index)
                cy.get("input").eq(index).check() 
               
           }

       })

  
       
        
    })
})