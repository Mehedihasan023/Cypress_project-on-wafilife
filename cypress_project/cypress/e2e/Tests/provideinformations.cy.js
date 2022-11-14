import open_url from "../Base/openUrl"
import checkoutpage from "../Pages/checkoutpage"

describe('Provide Informations', () => {
  const url = new open_url()
  const checkout = new checkoutpage()

  it('Test', () => {
    checkout.provideInformations()
  })
})