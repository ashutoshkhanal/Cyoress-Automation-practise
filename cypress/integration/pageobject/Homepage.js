class HomePage
{
    getName()
    {
        return  cy.get("input[name = 'name']:nth-child(2)")
    }

    getGender()
    {
        return cy.get('#exampleFormControlSelect1')
    }

    getEnterperneur()
    {
        return cy.get('#inlineRadio3')
    }

    getShopTab()
    {
        return cy.get('a[href="/angularpractice/shop"]')
    }
    

}

export default HomePage