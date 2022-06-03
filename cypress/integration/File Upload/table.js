/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
describe('Iframe Functionality',function()
{
    it('Verify iframe Content',function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('table[name="courses"] tbody tr td:nth-child(2)').each(($es,index,$list) =>
        {
            
            if($es.text().includes('REST API'))
            {
                cy.get('table[name="courses"] tbody tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    expect(price.text()).to.equals('35')
                })
            }

        })

        var sum = 0

        cy.get('div[class="tableFixHead"] table tbody tr td:nth-child(4)').each(($es,$list,index)=>
        {
            const amount = $es.text()
            var totalamount = Number(amount)
            sum = sum + totalamount


        }).then(function()
        {
            cy.log(sum)

        })

        cy.get('div[class="totalAmount"]').then(function(money)
        {
            const moneytotal = money.text()
            var res = moneytotal.split(" ")
            var total = res[4].trim()
           expect(total).to.equals('296')
            
        })

        cy.get('input[id="hide-textbox"]').click()
        cy.get('input[placeholder="Hide/Show Example"]').should('not.be.visible')

        cy.get('input[id="show-textbox"]').click()
        cy.get('input[placeholder="Hide/Show Example"]').should('be.visible')

        cy.get('button[id="mousehover"]').invoke('show')
        cy.contains('Top').click({force:true})

        cy.get('#alertbtn').click()
        cy.on('window:alert',(txt) =>
        {
            expect(txt).to.equals('Hello , share this practice page and share your knowledge')
        })

        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(confirms)=>
        {
            expect(confirms).to.equals('Hello , Are you sure you want to confirm?')
        })

    


  
    })  
    
})