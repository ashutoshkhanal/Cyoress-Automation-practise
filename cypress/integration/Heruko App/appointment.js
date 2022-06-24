/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('Verify the appointment process in the hotuko application',function()
  {
    it("Verifying the login functionality",function()
    {
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
        cy.get('a[id="btn-make-appointment"]').click()
        cy.url().should('include','login')
        cy.scrollTo('center')     
        cy.get('#login').should('be.visible')
        cy.get('.alert').should('be.visible')
        cy.get('input[id="txt-username"]').type('John Doe')
        cy.scrollTo('center') 
        cy.get('#txt-password').type('ThisIsNotAPassword')
        cy.scrollTo('center') 
        cy.get('#txt-password').should('have.value','ThisIsNotAPassword')
        cy.get('button[id="btn-login"]').click()
    })

    it('Verify if we can make appointment',function()
    {
      cy.url().should('include','appointment')
      cy.get('#appointment h2').should('have.text','Make Appointment')
      cy.get('select[id = "combo_facility"]').select('Tokyo CURA Healthcare Center')
      cy.scrollTo('center') 
      cy.get('#chk_hospotal_readmission').check().should('be.checked')
      cy.get('input[type="radio"]').check(['Medicaid'])
      cy.get('input[id="txt_visit_date"]').type('12/08/1999{esc}')
      cy.get('textarea[id="txt_comment"]').type('I am suffering from common cold, so i want to book my appointment for this reason.')
      cy.scrollTo('center') 
      cy.get('button[id="btn-book-appointment"]').click()
    })

    it('Verify the Appointment Confirmation',function()
    {
        cy.url().should('include','summary')
        cy.get('#summary').should('be.visible')
        cy.get('#summary').contains('Facility')
        cy.get('#comment').contains('I am suffering from common cold, so i want to book my appointment for this reason.')
        cy.scrollTo('bottom')
        cy.get('footer').should('be.visible')
        cy.get('#to-top').click()
        cy.get('.text-vertical-center').should('be.visible')

    })





  })