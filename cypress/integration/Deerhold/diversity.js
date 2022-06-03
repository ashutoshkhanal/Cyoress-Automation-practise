/// <reference types="Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Diversity and Inclusion Test Suite',function()
{
    it('HomePage Test Case',function()
    {
        cy.visit('https://deerhold.org/index')
        cy.wait(16000)
        cy.aboutus('Diversity')
        cy.get("section[class  ='diversity-and-inclusion-banner']").should('have.css','background-size' ,'cover')
        cy.get("section[class  ='diversity-and-inclusion-banner'] div p").should('have.css','animation-duration', '1s')
        cy.get("div[class = 'logoNav']").should('have.css','background-image','url("https://deerhold.org/images/deerhold-logo-white-small.png")')
        cy.get("div[class = 'logoNav']").click()
        cy.go('back')
        cy.aboutus('Our Story')
        cy.go('back')
        cy.aboutus('Culture')
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

    it("Banner Section Test Case",function()
    {
       
        cy.get('div[class="slanted-black-box"]').should('have.css','background-color', 'rgb(51, 52, 53)')
        cy.get('div[class="slanted-black-box"] h4').should('have.text','Diversity and Inclusion: A cultural shift in software development\n    ')
        cy.get("div[class = 'details2'] p").should('have.css','display' ,'block')
        
    })

    it('Diversity Section Test Case',function()
    {
        cy.get("div[class = 'break-box'] h4").should('have.text','Diversity: A stimulus for innovation')
        cy.get("div[class = 'break-box']").should('have.css','background', 'rgb(230, 231, 232) none repeat scroll 0% 0% / auto padding-box border-box')
        cy.get(" div[class = 'full-light-circle']").should('have.have.css','background' ,'rgb(243, 243, 243) none repeat scroll 0% 0% / auto padding-box border-box')
        cy.get("div[class = 'left-semi-circle']").should('have.css','background','rgb(235, 106, 37) none repeat scroll 0% 0% / auto padding-box border-box')
        cy.get("div[class = 'full-circle']").should('have.css','background','rgb(68, 146, 207) none repeat scroll 0% 0% / contain padding-box border-box')
        cy.get(':nth-child(2) > .col-md-10 > .redbox').should('have.css','background','rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box')
        cy.get(':nth-child(2) > .col-md-10 > .redbox').should('have.css','float','right')
        cy.get(':nth-child(2) > .col-md-10 > .redbox > p').should('have.css','background','rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box')
       
    })

    it('Inclusion Section test case',function()
    {
        cy.get('h3').should('have.text','Inclusion: Turning vision into reality')
        cy.get('.new-black-box').should('have.css','background','rgb(38, 41, 55) none repeat scroll 0% 0% / auto padding-box border-box')
        cy.get('.new-black-box').should('have.css','float','left')
        cy.get('.new-black-box > p').should('have.css','color','rgb(255, 255, 255)')
        cy.get('.full-grey-circle').should('have.css','background','rgb(219, 219, 219) none repeat scroll 0% 0% / auto padding-box border-box')
        cy.get("div[class = 'right-semi-circle']").should('have.css','background','rgb(235, 119, 57) none repeat scroll 0% 0% / auto padding-box border-box')
        cy.get('.full-dark-grey-circle').should('have.css','background','rgb(68, 146, 207) none repeat scroll 0% 0% / contain padding-box border-box')

    })

    it('Representation',function()
    {
        cy.get('div[class="break-box ml-md-5"]').should('have.css','background', 'rgb(230, 231, 232) none repeat scroll 0% 0% / auto padding-box border-box')
        cy.get('div[class="break-box ml-md-5"] h5').should('have.text','Representation in software development: An ongoing journey')
        cy.get(':nth-child(6) > .col-md-10 > .redbox').should('have.css','background', 'rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box')
        cy.get(':nth-child(6) > .col-md-10 > .redbox').should('have.css','float','right')
        cy.get(':nth-child(6) > .col-md-10 > .redbox > p').should('have.css','color' ,'rgb(33, 37, 41)')
        cy.get('.new-full-circle').should('have.css','background','rgb(68, 146, 207) none repeat scroll 0% 0% / contain padding-box border-box')
        cy.get('.new-left-semi-circle').should('have.css','background','rgb(235, 106, 37) none repeat scroll 0% 0% / auto padding-box border-box')

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