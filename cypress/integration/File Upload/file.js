/// <reference types="cypress" />

describe('File Upload',function()
{
    it('To check if we can upload file',function()
    {
        cy.visit('https://the-internet.herokuapp.com/upload')
        const fileName = 'files/class diagram.png'
        cy.get('#file-upload').attachFile(fileName)
        cy.get('#file-submit').click()
        cy.get('h3').should('be.visible')
        
    })
})