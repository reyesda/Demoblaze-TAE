const Signup = require('../pageobjects/signup.page')
const Alert = require('../pageobjects/alert.page')

describe('R1 User sign up', async () => {
    describe('Successful sing up', async () => {

        it('R1TC1 Pop up sign upwindow', async () => {
            await Signup.open()
            await Signup.openSignupWindow()
            await expect(Signup.SignupTitle).toBeDisplayed()
            await Signup.buttonCloseWindow.click()
        })

        it.skip('R1TC2 Successful sing up', async () => {
            await Signup.open()
            await Signup.openSignupWindow()
            await expect(Signup.SignupTitle).toBeDisplayed()
    
            let usernameTest = '00000test' + 8

            await Signup.signup(usernameTest, usernameTest)
            
            const alertText = await Alert.getAlertMesage(); //get the alert text
            
            await expect(alertText).toEqual('Sign up successful.')
            
        })
    })

    describe('Unsuccessful sing up', async () => {
        it.skip('R1TC3 Sign up validation password', async () => {
            await Signup.open()
            await Signup.openSignupWindow()
            await expect(Signup.SignupTitle).toBeDisplayed()
    
            await Signup.signup('00000test6','1')
            
            const alertText = await Alert.getAlertMesage(); //get the alert text
            
            await expect(alertText).toEqual('Invalid password.')
        })
        
        it('R1TC4 Unsuccessful sing up', async () => {
            await Signup.open()
            await Signup.openSignupWindow()
            await expect(Signup.SignupTitle).toBeDisplayed()
    
            await Signup.signup('00000test0','00000test0')
            
            const alertText = await Alert.getAlertMesage(); //get the alert text
            
            await expect(alertText).toEqual('This user already exist.')
        })
    })
})


