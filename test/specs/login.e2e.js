const LoginPage = require('../pageobjects/login.page')
const Alert = require('../pageobjects/alert.page')

describe('R1 User sign up', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.openLoginWindow()
        await expect(LoginPage.LoginTitle).toBeDisplayed()

        await LoginPage.login(' ','k')
        
        const alertText = await Alert.getAlertMesage(); //get the alert text
        
        console.log('finished alert',alertText)
        
    })
})


