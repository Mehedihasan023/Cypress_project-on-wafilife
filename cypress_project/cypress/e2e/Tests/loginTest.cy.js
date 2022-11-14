import open_url from "../Base/openUrl"
import loginPage from "../Pages/login"

describe('login ', () => {
  const url = new open_url()
  const login = new loginPage()

  it('Test', () => {
    url.openUrl()
    login.loginProcess()
  })
})