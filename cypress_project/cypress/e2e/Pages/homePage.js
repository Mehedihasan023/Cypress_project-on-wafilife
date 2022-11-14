import locator from '../Pages/home_locators.json'

class select {
  selectProcess() {
    const method = require('../Utilities/commonMethods')

    cy.wait(4000)
    cy.xpath(locator.lakhok).click()
    method.titleVerify("English & Bangla Islamic Books by Authors | Wafilife")
    cy.wait(4000)
    cy.xpath(locator.popup).click()
    cy.wait(1000)
    cy.xpath(locator.nextPage).click()
    cy.wait(600)
    cy.xpath(locator.generalBooks).click()
    cy.wait(600)
    cy.scrollTo(0, 5000)
    cy.wait(600)
    cy.xpath(locator.viewAnyBookDetails).click()
    cy.xpath(locator.order).click()
    cy.wait(1000)
    cy.xpath(locator.orderShoponnoKorun).click()
    //cy.wait(1000)
  }
}
export default select