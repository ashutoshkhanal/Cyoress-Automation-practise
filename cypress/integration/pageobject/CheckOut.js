class CheckOut
{
    promoCode()
    {
        return cy.get("input[class = 'promoCode']")
    }

    clickApply()
    {
        return cy.get('button.promoBtn')
    }

    placeOrder()
    {
        return cy.get('#root > div > div > div > div > button')
    }

    selectCountry()
    {
        return cy.get('#root > div > div > div > div > div > select')
    }

    checkBox()
    {
        return cy.get('input.chkAgree')
    }

    finalButton()
    {
        return cy.get('[id="root"] div div div div button')
    }
}

export default CheckOut
