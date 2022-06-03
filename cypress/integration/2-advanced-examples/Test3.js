/// <reference types="Cypress" />

describe("My 3rd test suit", function()
{  
    before(function()
    {
        cy.fixture('example').then(function(data)
        {
this.data = data
        })
    }) 

    it("My 3 test case",function()
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/attendance/viewMyAttendanceRecord')
        cy.get('input#txtUsername').type(this.data.username)
        cy.get('input#txtPassword').type(this.data.password)
        cy.get('input#btnLogin').click()
        cy.get('#menu_admin_viewSystemUsers').invoke('show')
        cy.contains('Users').click({force: true})
        cy.get('select#searchSystemUser_userType').select(this.data.role)
        cy.get('#searchSystemUser_status').select('Enabled')
        

    })

    
})