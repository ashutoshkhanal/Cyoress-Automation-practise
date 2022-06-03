import 'cypress-iframe'
/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('Culture and value test suite',function()
  {
      it('Navigation Bar Test Case',function()
      {
        cy.visit('https://deerhold.org/index')
        cy.wait(16000)
        cy.aboutus('Culture and Values')
        cy.get('section[class ="our-culture-and-values-banner"]').should('have.css','background-size' ,'cover')
        cy.get("section[class  ='our-culture-and-values-banner'] div p").should('have.css','animation-duration', '1s')
        cy.get("div[class = 'logoNav']").should('have.css','background-image','url("https://deerhold.org/images/deerhold-logo-white-small.png")')
        cy.get("div[class = 'logoNav']").click()
        cy.go('back')
        cy.aboutus('Our Story')
        cy.go('back')
        cy.aboutus('Diversity')
        cy.go('back')
        cy.capabilities('What We Do')
        cy.go('back')
        cy.capabilities('Our Approach')
        cy.go('back')
        cy.capabilities('Services')
        cy.go('back')
        cy.connect('Why Work')
        cy.go("back")
        cy.connect('Team Members')
        cy.go('back')
        cy.connect('Contact Us')
        cy.go('back')
        cy.insights('Case Studies')
        cy.go('back')

      })

      it('Banner Section Test Case',function()
      {
        cy.get('div[class="culture-values"]').then(function(data)
        {
          var text = data.text()
          expect(text).to.contain('Culture and Values')
        })
        cy.get('div[class="culture-values"]').should('have.css','background','rgb(235, 106, 37) none repeat scroll 0% 0% / auto padding-box border-box')
        cy.get('div[class="value-title"]').should('have.text', '\n            Company Values\n        ')
        cy.get('div[class="value-title"]').should('have.css','color','rgb(38, 41, 55)')
        cy.get('.value-description').should('have.text','\n            The company values at Deerhold are cultivated from the different roles we play\n        ')
        cy.get('.value-description').should('have.css','color','rgb(107, 107, 107)')
        cy.get('body > div.container.mycontainer.pb-mb-5 > div.company-values > ul > li:nth-child(1) > b').
        should('have.css','color','rgb(68, 146, 207)')
        cy.get('body > div.container.mycontainer.pb-mb-5 > div.company-values > ul > li:nth-child(2) > b').
        should('have.css','color','rgb(68, 146, 207)')
        cy.get('body > div.container.mycontainer.pb-mb-5 > div.company-values > ul > li:nth-child(3) > b').
        should('have.css','color','rgb(68, 146, 207)')
      })

      it("Second Test Case",function()
      {
        cy.get('body > div:nth-child(8)').should('have.css','background','rgb(38, 41, 55) none repeat scroll 0% 0% / auto padding-box border-box')
        cy.get(':nth-child(8) > .container > .box-header').contains('Client Satisfaction: Custom software development solutions for you')
        cy.get(':nth-child(8) > .container > .box-header').contains('The satisfaction of our clients drives us to be the best.')
        cy.get('body > div:nth-child(8) > div > div.box-header.mb-5 div:nth-child(1)').should('have.css','font-weight' ,'700')
        cy.get('.col-md-5 > .box-image-right1').should('have.css','background-position', '50% 50%')

      })

      it("Third Test Case",function()
      {
        cy.get(':nth-child(9) > .container > .row > .col-md-7 > .box-header-right').contains('Supporting Employee Growth')
        cy.get(':nth-child(9) > .container > .row > .col-md-7 > .box-header-right').contains('Investing in the talent that fuels us')
        cy.get(':nth-child(9) > .container > .row > .col-md-7 > .box-header-right > .box-heading-right').should('have.css','font-weight' ,'700')
      })

      it("Fourth Test Case",function()
      {
        cy.get(':nth-child(10) > .container').should('have.css','background','rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box')
        cy.get(':nth-child(10) > .container > .box-header').contains('Empowering Communities')
        cy.get(':nth-child(10) > .container > .box-header').contains('One individual at a time')
        cy.get(':nth-child(10) > .container > .box-header > .box-heading').should('have.css','font-weight' ,'700')
      })

      it("Fifth Test Case",function(){
        cy.get('body > :nth-child(11)').should('have.css','background-color', 'rgb(255, 255, 255)')
        cy.get(':nth-child(11) > .container > .row > .col-md-7 > .box-header-right').contains('Company Culture')
        cy.get(':nth-child(11) > .container > .row > .col-md-7 > .box-header-right').contains('From values to software development')
        cy.get('.col-md-5 > .box-image-left2').should('have.css','background-position', '50% 50%')
        cy.get(':nth-child(11) > .container > .row > .col-md-7 > .right-box-description').should('have.css','color','rgb(34, 34, 34)')

      })

      it('Fotter Section Test Case',function()
      {
          cy.get('.footer').should('have.css','background','rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box')
          cy.get('.contact-margin').should('have.text','Contact')
          cy.get('.col-md-3 > h4').should('have.text','Services')
          cy.get('div[class = "col-md-4 contact-info"]:nth-child(1)').then(function(place)
          {
              var places = place.text()
              cy.log(places)
          })
  
          cy.get('div[class = "col-md-4 contact-info"]:nth-child(1) li b').should('have.text','Tokyo')
  
          cy.get('div[class = "col-md-4 contact-info"]:nth-child(2) li b').should('have.text','Boston')
  
          cy.get('div[class = "col-md-4 contact-info"]:nth-child(3) li b').should('have.text','Kathmandu')
  
          cy.get('.col-md-3 > ul > :nth-child(1) > a').click()
          cy.go('back')
          
          cy.get('.col-md-3 > ul > :nth-child(2) > a').click()
          cy.go('back')
  
          cy.get('.col-md-3 > ul > :nth-child(3) > a').click()
          cy.go('back')
  
          cy.get('.col-md-3 > ul > :nth-child(4) > a').click()
          cy.go('back')

          
      })



        
  })