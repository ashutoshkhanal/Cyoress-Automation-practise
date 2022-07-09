/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

 describe('BOM Intercept response',function()
 {
    it('Intercept Daybook report',function()
    {
        cy.visit('http://103.94.159.167/BOM/web/index.html#/login')
        cy.intercept(
            {
                method:'GET',
                url :'http://103.94.159.167/BOM/api/account/report/daily-transaction?date=2079-03-22'
            },
            {
                statusCode:200,
                body:[
                    {
                      "enteredBy": "ASHUTOSH",
                      "drAmount": 1900,
                      "voucherType": "JVR",
                      "approvedBy": "ASHUTOSH",
                      "transactionDate": "2079-03-22",
                      "branch": "H-O",
                      "referenceNo": "1314111",
                      "acCode": "1020201",
                      "voucherNo": "H-O-JVR7879-1058751",
                      "particulars": "Being  cheque cleared to YUVAN THAPA[YT12345]",
                      "crAmount": 0,
                      "narration": "Being  cheque cleared to YUVAN THAPA[YT12345]",
                      "clearanceDate": "2022-07-06",
                      "checkedBy": "ASHUTOSH",
                      "acName": "GLOBAL IME BANK (7501010000706)"
                    }
                  ]

            }).as('daybook')
        cy.get('input[name="username"]').type('PUJAN')
        cy.get('input[name="password"]').type('pujan{enter}')
        cy.wait(5000)
        cy.contains('Reporting').click({force:true})
        cy.contains('Day book report').click()
        cy.get('._1oYOS').click()
        cy.get('div[class="_1hh2I _3Rbbx"]').contains(22).click()
        cy.contains('Search').click()  
        cy.wait('@daybook')

    })

 })