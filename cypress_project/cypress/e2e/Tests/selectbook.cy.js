import open_url from "../Base/openUrl"
import homePage from "../Pages/homePage"

describe('Select Book', () => {
  const url = new open_url()
  const home = new homePage()

  it('Test', () => {
    home.selectProcess()
  })
})