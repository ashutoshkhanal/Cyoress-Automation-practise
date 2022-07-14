/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
   //const neatCSV = require('neat-csv')
   import neatCSV from 'neat-csv';

describe("CSV File Suite",function()
{
    it("Navigation Section Test Case",function()
    {
        cy.readFile(Cypress.config('fileServerFolder')+"/cypress/fixtures/practise.csv").then(
            async(text)=>
            {
                const csv = await neatCSV(text)
                csv[0].username
            }
        )

    })
})