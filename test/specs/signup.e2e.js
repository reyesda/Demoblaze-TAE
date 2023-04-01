const Signup = require('../pageobjects/signup.page')
const Alert = require('../pageobjects/alert.page')

describe('R1 User sign up', async () => {
    describe('Successful sing up', async () => {
        
        afterEach('close signup pop up window', async () => {
            await Signup.buttonCloseWindow.click()
        })

        it('R1TC1 Pop up sign upwindow', async () => {
            await Signup.open()
            await Signup.openSignupWindow()
            await expect(Signup.SignupTitle).toBeDisplayed()
            await Signup.buttonCloseWindow.click()
        })

        it('R1TC2 Successful sing up', async () => {
            await Signup.open()
            await Signup.openSignupWindow()

            await Signup.signup('00000test0','00000test0')
            
            const alertText = await Alert.getAlertMesage();

            expect(alertText).toEqual('Sign up successful.')
            
        })
    })

    describe('Unsuccessful sing up', async () => {
        it('Successful sing up', async () => {
            await Signup.open()
            await Signup.openSignupWindow()
            await expect(Signup.SignupTitle).toBeDisplayed()
    
            await Signup.signup('k','k')
            
            const alertText = await Alert.getAlertMesage(); //get the alert text
            
            console.log('finished alert',alertText)
            
        })
    })
})


