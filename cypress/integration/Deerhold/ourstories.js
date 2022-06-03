/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('HomePage Test Suite',function()
{
    it("HomePage Test Case",function()
    {
        cy.visit('https://deerhold.org/index')
        cy.wait(12000)
        cy.get('[href="aboutUs"]').click()
        
    
    })

    it("About Us Test Case",function()
    {
        cy.get("div[class = 'logoNav']").click()
        cy.go('back')
        cy.aboutus('Culture')
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

        cy.get("div[class = 'box-header box-margin']").then(function(about)
         {
             expect(about).to.contain('About Us')
         })
         // cy.get('div.about-text').should('have.text','About Us')


         cy.get('body > div.about-white-box > div > p').then(function(abouttext)
         {
             cy.log(abouttext.text())
         })

         cy.get('body > div.about-white-box > div > p').then(function(abouttext)
         {
             expect(abouttext).to.contain('Deerhold')
         })

         cy.get('body > div.about-new-white-box > div > div > div.col-2 > div').should('have.css','width','200px')
        
         cy.get('.about-box-image-left2').should('have.class','about-box-image-left2')

         cy.get('div[class="about-white-box"]').should('have.css','background-color', 'rgb(255, 255, 255)')
         cy.get('body > div.about-new-white-box').then(function(storytext)
         {
             cy.log(storytext.text())
         })

         cy.get('body > div.about-new-white-box').then(function(storytext)
         {
             expect(storytext).to.contain('always championed the merging of private sector goals with serving society. As a software development company based in Boston in the ')
         })

          cy.get('body > div.about-new-white-box').then(function(storytext)
         {
             expect(storytext).to.contain('2018, Deerhold Ltd.')
            
            
         })

         cy.get('body > div.about-new-white-box > div > div > div.col > div p').should('have.css','font-size', '18px')

         cy.get('body > div.about-new-white-box > div > div > div.col > div p').should('have.css','font-weight' ,'400')

         cy.get('body > div.about-new-white-box > div > div > div.col > div p').should('have.css','font-family','"Core sans G", "sans-serif"')

         cy.get('body > div.new-white-box > div > div > div > div.col-md-12.col-lg-7 > div.box-header-left.text-left.mb-2 > div').then(function(pioneer)
         {
             expect(pioneer).to.contain('Pioneering the new era in digital technology, one solution at a time')
         })

         cy.get("div[class = 'about-box-image-right1 container-full d-block d-lg-none']").should('have.css','background-position','50% 50%')

         cy.get('p[style="margin-top:0.5rem !important"]').should('have.css','font-size','18px')
         cy.get('p[style="margin-top:0.5rem !important"]').should('have.css','display', 'block')

         cy.get('.about-box-header-right > .about-box-heading').then(function(diversity)
         {
            expect(diversity).to.contain('Creating win-win solutions for all')
         })

         
         cy.get('div[class="about-box-image-left1 container-full d-block d-md-block d-lg-none"]').should('have.css','background-size','cover')

         cy.get('div[class="about-box-image-left1 container-full d-block d-md-block d-lg-none"]').should('have.css','background-position', '50% 50%')

         cy.get('.col-md-5 > .about-box-image-left1').should('have.css','background-size', 'cover')

         cy.get('.col-md-5 > .about-box-image-left1').should('have.css','background-position','50% 50%')

         cy.get('.new-white-box3 > .about-white-box').should('have.css','display','block')

        //  cy.get('body > div.new-white-box3 > div > div > div > div.col-md-12.col-lg-7 > div.box-header-left.text-left.mb-2 > div').
        //  should('have.text','Software development and a globally connected digital world')

        cy.get('body > div.new-white-box3 > div > div > div > div.col-md-12.col-lg-7 > div.about-box-image-right2.container-full.d-block.d-lg-none')
        .should('have.css','background-size' ,'cover')

        cy.get('body > div.new-white-box3 > div > div > div > div.col-md-12.col-lg-7 > div.about-box-image-right2.container-full.d-block.d-lg-none')
        .should('have.css','background-position' ,'50% 50%')

        cy.get('body > div.new-white-box3 > div > div > div > div.col-md-12.col-lg-7 > div.about-box-description2 > p').then(function(software)
        {
            expect(software).to.contain('By working together and forgin')
        })    
         
    })

    it('Footer Part',function()
    {
        cy.get('body > section.footer').
        should('have.css','background',  'rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box')

        cy.get("section[class = 'footer'] div h4[class = 'contact-margin']").should('have.text','Contact')

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