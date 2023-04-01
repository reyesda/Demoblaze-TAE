

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Signup extends Page {
    /**
     * define selectors using getter methods
     */
    get mainButtonSignup () {
        return $('a#signin2');
    }

    get SignupTitle () {
        return $('h5#signInModalLabel');
    }

    get inputUsername () {
        return $('input#sign-username');
    }

    get inputPassword () {
        return $('input#sign-password');
    }

    get buttonSubmit () {
        return $('button[onclick="register()"]');
    }

    get buttonCloseWindow () {
        return $('#signInModal button.close');
    }


    async openSignupWindow () {
        await this.mainButtonSignup.click();
    }

    async signup (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.buttonSubmit.click();
    }

    open () {
        return super.open();
    }
}

module.exports = new Signup();
