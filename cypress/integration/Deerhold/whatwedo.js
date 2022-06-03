/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('What we do Test Suite',function()
  {
    it('Navigation Bar Test Case',function()
    {
      cy.visit('https://deerhold.org/index')
      cy.wait(16000)
      cy.capabilities('What We Do')
      cy.get("div[class = 'logoNav']").should('have.css','background-image','url("https://deerhold.org/images/deerhold-logo-white-small.png")')
      cy.get("div[class = 'logoNav']").click()
      cy.go('back')
      cy.aboutus('Our Story')
      cy.go('back')
      cy.aboutus('Diversity')
      cy.go('back')
      cy.aboutus('Culture')
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

    it('First Banner',function()
    {
        cy.get('div[class="header-new"]').should('have.css','background','rgba(0, 0, 0, 0) linear-gradient(270.11deg, rgb(255, 94, 98) 2.97%, rgb(255, 153, 102) 94.55%) repeat scroll 0% 0% / auto padding-box border-box')
        cy.get('.work-heading').contains('WHAT WE DO')
        cy.get('.work-paragraph').contains('Custom software development with')
        cy.get('.images').should('have.css','background-position', '100% 50%')
        cy.get('.setting-image').should('have.css','background-image','url("https://deerhold.org/images/setting-image.png")')
        
    })
    it('Capabilities Test Case',function()
    {
        cy.get('.software-grey-box').contains('Our Software Development Capabilities')
        cy.get('.software-grey-box').should('have.css','background-color' ,'rgb(250, 250, 250)')
        cy.get('.web > :nth-child(1) > .button-toggle').should('have.css','display','block')
        cy.get('.web > :nth-child(1) > .button-toggle')
        .should('have.css','background', 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box')
        cy.get('.web > :nth-child(1) > .button-toggle > p').should('have.text',"Machine Learning")
        cy.get('.web > :nth-child(1) > .button-toggle').click()
        cy.get('.web > :nth-child(1) > .button-toggle').click()
        cy.get(':nth-child(2) > .button-toggle2').should('have.css','display','block')
        cy.get(':nth-child(2) > .button-toggle2')
        .should('have.css','background','rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box')
        cy.get(':nth-child(2) > .button-toggle2 > p').should('have.text','Cloud Computing')
        cy.get(':nth-child(2) > .button-toggle2').click()
        cy.get(':nth-child(2) > .button-toggle2').click()
        cy.get(':nth-child(3) > .button-toggle3').should('have.css','display','block')
        cy.get(':nth-child(3) > .button-toggle3')
        .should('have.css','background','rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box')
        cy.get(':nth-child(3) > .button-toggle3 > p').should('have.text','Front-End Software Development')
        cy.get(':nth-child(3) > .button-toggle3').click()
        cy.get(':nth-child(3) > .button-toggle3').click()
        cy.get(':nth-child(4) > .button-toggle4').should('have.css','display','block')
        cy.get(':nth-child(4) > .button-toggle4')
        .should('have.css','background','rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box')
        cy.get(':nth-child(4) > .button-toggle4 > p').should('have.text','Website Application Development')
        cy.get(':nth-child(4) > .button-toggle4').click()
        cy.get(':nth-child(4) > .button-toggle4').click()
        cy.get(':nth-child(5) > .button-toggle5').should('have.css','display','block')
        cy.get(':nth-child(5) > .button-toggle5')
        .should('have.css','background','rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box')
        cy.get(':nth-child(5) > .button-toggle5 > p').should('have.text','\n                Mobile Application Development\n            ')
        cy.get(':nth-child(5) > .button-toggle5').click()
        cy.get(':nth-child(5) > .button-toggle5').click()

    })

    it("How We Work Test Case",function()
    {
        cy.get('.column-right').should('have.css','float','left')
        cy.get('.column-left > h4').contains('HOW WE WORK')
        cy.get('.column-left > h4').should('have.css','text-align' ,'left')
        cy.get('.column-left > h4').should('have.css','color' ,'rgb(0, 0, 0)')
        cy.get('body > section.last-box > div.float-box > div').should('have.css','display','flex')
        cy.get('.float-box > .row > :nth-child(1)').should('have.css','display','block')
        cy.get('.content1 > h4').should('have.text','Offshore Software Development Services')
        cy.get('.image1')
        .should('have.css','background','rgba(0, 0, 0, 0) url("https://deerhold.org/images/image1.png") no-repeat scroll 0% 0% / auto padding-box border-box')
        cy.get('.vertical-line').should('have.css','border', '0.8px solid rgb(215, 215, 215)')
        cy.get('.float-box > .row > :nth-child(3)').should('have.css','display','block')
        cy.get('.image2')
        .should('have.css','background','rgba(0, 0, 0, 0) url("https://deerhold.org/images/image2.png") no-repeat scroll 0% 0% / auto padding-box border-box')
        cy.get('body > section.last-box > div.float-box > div > div:nth-child(3) > div.content2 > h4').should('have.text','On-site Software Development Services')
        cy.get('.title').should('have.css','color','rgb(234, 99, 27)')
        cy.get('.title').should('have.css','font-style', 'normal')
        cy.get('.title').should('have.text','\n        Holistic Solutions Tailored for Your Business\n    ')
        cy.get('div[class="details"]').should('have.css','display','block')

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