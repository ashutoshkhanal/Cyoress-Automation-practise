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
// Cypress.Commands.add('login', (email, password) => {  
       
//         cy.visit('http://103.94.159.179:98/login/') 
//         cy.get("#username").type(email)  

//         cy.get("#password").type(password)

//         cy.get('.chakra-button').click()
// })
Cypress.Commands.add('login', (email, password) => {  

       

    cy.visit('http://103.94.159.179:98/login/')

    cy.get("#username").type(email)  



    cy.get("#password").type(password)



    cy.get('.chakra-button').click()

})

Cypress.Commands.add('capabilities', (select) => { 
    cy.get('#navbarNav > ul > li:nth-child(2) > ul').invoke('show')
    cy.contains(select).click()
})

Cypress.Commands.add('connect', (select) => { 
    cy.get('#navbarNav > ul > li:nth-child(3) > div').invoke('show')
    cy.contains(select).click()
})

Cypress.Commands.add('insights', (select) => { 
    cy.get('#navbarNav > ul > li:nth-child(4) > div').invoke('show')
    cy.contains(select).click()
})

Cypress.Commands.add('aboutus', (element) => 
{
    cy.get('#navbarNav > ul > li:nth-child(1) > div').invoke('show')
    cy.contains(element).click()
})

Cypress.Commands.add('skills', (skillset) => {
    cy.get('select#Skills').select(skillset)  

})

 Cypress.Commands.add('products', (productName) => { 

    cy.get("div[class = 'card h-100']").each(($es,index,$list) =>
        {
            const productText = $es.find('h4 a').text()
            if(productText.includes(productName))
            {
                $es.find('div button').click()
            }

        })

 })
 
 Cypress.Commands.add('kart', (vegName) => { 

    cy.get("div[class = 'product'] ").each(($es,index,$list) =>
        {
            const name = $es.find('h4').text()
            if (name.includes(vegName))
            {
                $es.find('div button').click()
            }
        })

    })
    Cypress.Commands.add('veggie', (items) => { 
        cy.get("div[class = 'product'] ").each(($es,index,$list) =>
        {
            const vegText = $es.find('h4').text()
            if(vegText.includes(items))
            {
                $es.find('div button').click()
            }

        })

    })

     Cypress.Commands.add('reactcommerce', (products) => 
     {  
        cy.get("div[class = 'shelf-item']").each(($es,index,$list) =>
        {
            const productText = $es.find('p').text()
            if(productText.includes(products))
            {
                $es.find('div:nth-child(5)').click()
            } 

        })
    })
    Cypress.Commands.add('searchresult', (values) => 
    {  
        cy.get('input[type="text"]').type(values)
          cy.get('button[type="submit"]').click()
      
   })


    Cypress.Commands.add(
        'iframe',
        { prevSubject: 'element' },
        ($iframe) => {
            return new Cypress.Promise(resolve => {
                $iframe.on('load', () => {
                    resolve($iframe.contents().find('body'))
                })
            })
        })
    
//
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
Cypress.Commands.add('LoginApi', () => {
    cy.request('POST','https://rahulshettyacademy.com/api/ecom/auth/login',
    {
        "userEmail": "ashutoshkhanal11@gmail.com",
        "userPassword": "Manchester10#"
    }).then(function(response)
    {
        expect(response.status).to.eq(200)
        Cypress.env('token',response.body.token)
    })

})

Cypress.Commands.add('BOMLoginApi', () => {
    cy.request('POST','http://103.94.159.167/BOM/api/login',
    {
        "username": "ASHUTOSH",
        "password": "Manchester10#"
    }).then(function(response)
    {
        expect(response.status).to.eq(200)
        Cypress.env('token',response.body.token)
    })

})