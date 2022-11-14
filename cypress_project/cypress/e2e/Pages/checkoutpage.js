import locator from '../Pages/checkout_locators.json'
class informations {

  provideInformations() {
    const method = require('../Utilities/commonMethods')
    method.titleVerify("Checkout - Wafilife")
    method.skipAnyTest(locator.popup)
    cy.wait(1000)
    method.skipAnyTest(locator.popup)
    cy.xpath(locator.checkbox).click()
    method.dataSend(locator.password, "#$%^7890Mehedi")
    cy.wait(2000)
    method.skipAnyTest(locator.popup)
    cy.wait(500)
    cy.xpath(locator.name).click()
    method.dataSend(locator.name, "Mehedi")
    cy.wait(1000)
    method.dataSend(locator.phoneNumber, "01868354285")
    method.dataSend(locator.email, "mehedi19989@gmail.com")
    cy.wait(500)
    cy.xpath(locator.state).click()
    cy.xpath(locator.Dhaka).click()
    cy.xpath(locator.area).select("584")
    method.dataSend(locator.billingAddress, "House 3,Road 12,block c")
    method.dataSend(locator.orderComments, "no extra information")
    cy.xpath(locator.total).contains("429")
  }
}
export default informations