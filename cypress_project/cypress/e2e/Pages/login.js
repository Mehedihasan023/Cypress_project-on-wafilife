import locator from '../Pages/login_locators.json'

class login {

  loginProcess() {
    const method = require('../Utilities/commonMethods')
    method.titleVerify("Buy Islamic Books - Online Book Shop in Bangladesh | Wafilife")
    cy.wait(500)
    cy.xpath(locator.popup).click()
    cy.wait(500)
    cy.xpath(locator.account).click()
    method.titleVerify("আমার অ্যাকাউন্ট - Wafilife")
    cy.wait(1000)
    method.dataSend(locator.email, "mehedi19989@gmail.com")
    method.dataSend(locator.password, "wafilife")
    cy.xpath(locator.login).click()
    cy.wait(2000)
  }
}
export default login