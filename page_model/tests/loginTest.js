
const LoginPage = require('../page/login.page')
const CREDENTIALS = require('../data/credentials')

describe('User login with valid credentials successfully', () => {
    
    beforeEach('Open Menu', async () => {
        await LoginPage.clickOnMenu()
    })

    it('should login with valid credentials', async () => {
        await LoginPage.navigateToLoginPage()
        await LoginPage.login(CREDENTIALS.VALID_USER.USERENAME, CREDENTIALS.VALID_USER.PASSWORD)
        await expect(LoginPage.lblProducts).toBeDisplayed()
    })
})
