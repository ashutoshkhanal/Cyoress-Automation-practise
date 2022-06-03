/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe('My fifth test suite',function()
{
    it('My fifth test case',function()
        {
            cy.visit("http://demo.automationtesting.in/Register.html")
            cy.get("input[placeholder = 'First Name']").type('Neevan')
            cy.get("input[placeholder = 'Last Name']").type("Khanal")
            cy.get("textarea[ng-model = 'Adress']").type("Baneshwor,Kathmandu")
            cy.get("input[ng-model = 'EmailAdress']").type("neevan@gmail.com")
            cy.get("input[ng-model = 'Phone']").type('985432102')
            cy.get("input[type = 'radio']").check(["Male"])
            cy.get("input[type = 'checkbox']").check(["Cricket","Movies"])
            cy.get('#Skills').select('Adobe InDesign')
            cy.get("#countries").select("Afghanistan")
            cy.get("span[role = 'combobox']").click()
            cy.get('input[type = "search"]').type("ne")
            cy.get("span[class = 'select2-results'] ul").find('li').contains("Netherlands").click()
            cy.get('#yearbox').select('1999')
            cy.get("select[placeholder = 'Month']").select('July')
            cy.get('#daybox').select('21')
                     

        })
})