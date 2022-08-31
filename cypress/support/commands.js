// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('signin', (accountnumber, password) => {

        cy.get('#account_account_number').type(accountnumber)
        cy.get('#account_password').type(password)
        cy.get('button[type="submit"]').click()

})

Cypress.Commands.add('invoicemenu', (tableaction) => {

    cy.contains('Invoices').click()    
    cy.get('tr td form button').eq(tableaction).click()

})

