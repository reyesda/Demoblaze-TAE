const LoginPage = require('../pageobjects/login.page')
const Alert = require('../pageobjects/alert.page')

describe('R2 User Login ', () => {
    describe('Susccesful login', async () => {
        it('R2TC1 Pop up login window', async () => {
            await LoginPage.open()
            await LoginPage.openLoginWindow()
            await expect(LoginPage.LoginTitle).toBeDisplayed()
            await LoginPage.buttonCloseWindow.click()
        })
        
        it('R2TC2 Successful login  ', async () => {
            await LoginPage.open()
            await LoginPage.openLoginWindow()
            await expect(LoginPage.LoginTitle).toBeDisplayed()

            let username = '00000test5'

            await LoginPage.login(username,username)
            
            await expect(LoginPage.usernamelogedtitle).toHaveTextContaining(username)
        })
    })

    describe('Unsuccessful login', async () => {
        it('R2TC3 Unsuccessful login by empty username and password', async () => {
            await LoginPage.open()
            await LoginPage.openLoginWindow()
            await expect(LoginPage.LoginTitle).toBeDisplayed()
    
            await LoginPage.login('','')
            
            const alertText = await Alert.getAlertMesage(); //get the alert text
            
            expect(alertText).toEqual('Please fill out Username and Password.')
        })

        it('R2TC4 Unsuccessful login by empty password', async () => {
            await LoginPage.open()
            await LoginPage.openLoginWindow()
            await expect(LoginPage.LoginTitle).toBeDisplayed()
    
            let username = '00000test5'

            await LoginPage.login(username,'')
            
            const alertText = await Alert.getAlertMesage(); //get the alert text
            
            expect(alertText).toEqual('Please fill out Username and Password.')
        })

        it('R2TC5 Unsuccessful login by empty username', async () => {
            await LoginPage.open()
            await LoginPage.openLoginWindow()
            await expect(LoginPage.LoginTitle).toBeDisplayed()
    
            let username = '00000test5'

            await LoginPage.login('',username)
            
            const alertText = await Alert.getAlertMesage(); //get the alert text
            
            expect(alertText).toEqual('Please fill out Username and Password.')
        })

        it('R2TC6 Unsuccessful login by wrong password and correct username', async () => {
            await LoginPage.open()
            await LoginPage.openLoginWindow()
            await expect(LoginPage.LoginTitle).toBeDisplayed()
    
            let username = '00000test5'

            await LoginPage.login(username,'1')
            
            const alertText = await Alert.getAlertMesage(); //get the alert text
            
            expect(alertText).toEqual('Wrong password.')
        })

        it('R2TC7 Unsuccessful login by unexist username', async () => {
            await LoginPage.open()
            await LoginPage.openLoginWindow()
            await expect(LoginPage.LoginTitle).toBeDisplayed()
    
            let username = '00000test5'

            await LoginPage.login(username+username,username)
            
            const alertText = await Alert.getAlertMesage(); //get the alert text
            
            expect(alertText).toEqual('User does not exist.')
        })
    })
})
