import "cypress-iframe";
/// <reference types="cypress" />
/// <reference types = "Cypress-iframe"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe('Admin Page Functionality',function()
{
    this.beforeEach('Verify Login Page',function()
    {
        cy.visit('https://phptravels.net/api/admin')
        cy.contains('Email').type('admin@phptravels.com')
        cy.contains('Password').type('demoadmin')
        cy.get('.d-flex > .btn').click()
        cy.wait(5000)
        
    })

    it('Hotel Page Functionality',function()
    {
        cy.get('#drawerToggle').click()
        cy.get('a[aria-controls="hotelsmodule"]').click()
        cy.get('[data-bs-target="#Hotels"]').click()
        cy.get('[href="https://phptravels.net/api/admin/hotels"]').click()
        cy.get('.add_button > .btn').click({force:true})
        cy.get('input[name="hotelname"]').type("Raddisiion", {force:true})
        cy.get('select[name="hotelstars"]').select('3',{force: true})
        cy.get('div[id = "s2id_searching"] a').click({force:true})
        cy.get('div[class="select2-search"] input').type('Spa')
        cy.wait(4000)
        cy.get('ul[class="select2-results"] li div').each(($es,index,$list) =>
        {
            if($es.text().includes('Neptune, United States'))
            {
                $es.click()
            }


           

        })
        // cy.get('#FACILITIES-tab').click({force:true})  
        // cy.facility('SPA')
        // cy.facility('Restaurant')
        // cy.facility('Bar Lounge')

    
    })

})