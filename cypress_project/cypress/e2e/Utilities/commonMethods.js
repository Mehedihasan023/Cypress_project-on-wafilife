export function skipAnyTest(testLocator) {

  if (cy.xpath(testLocator).should('be.enabled')) {
    return cy.xpath(testLocator).click({ force: true })
  } else {
    return this.skip();
  }
}

export function titleVerify(expectedTitle) {
  return cy.title().should('eq', expectedTitle)
}

export function dataSend(xpath, value) {
  return cy.xpath(xpath).type(value);
}