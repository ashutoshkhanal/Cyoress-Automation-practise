/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe("Ecommerce Test Suite",function()
  {
      it("Add to cart",function()
      {
          cy.visit(Cypress.env('web'))
          cy.reactcommerce('Cat Tee')
      })
  })