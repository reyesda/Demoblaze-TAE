

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get mainButtonLogin () {
        return $('a#login2');
    }

    get LoginTitle () {
        return $('h5#logInModalLabel');
    }

    get inputUsername () {
        return $('input#loginusername');
    }

    get inputPassword () {
        return $('input#loginpassword');
    }

    get buttonSubmit () {
        return $('button[onclick="logIn()"]');
    }

    get buttonCloseWindow () {
        return $('#exampleModal button.close');
    }

    get usernamelogedtitle () {
        return $('#nameofuser');
    }


    async openLoginWindow () {
        await this.mainButtonLogin.click();
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.buttonSubmit.click();
    }

    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
