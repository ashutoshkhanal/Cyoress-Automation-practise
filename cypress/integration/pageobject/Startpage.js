class StartPage
{
    searchVeg()
    {
        return cy.get("input[type = 'search']")

    }

    goCart()
    {
       return cy.get('.cart-icon > img')
    }

    setCheckOut()
    {
        return cy.get('#root > div > header > div > div.cart > div.cart-preview.active > div.action-block > button')
    }
}

export default StartPage
