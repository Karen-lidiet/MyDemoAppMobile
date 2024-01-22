const page = require('./page')


class LoginPage extends page {

    //Locators
    get inputUsername () {
        return $('~Username input field') //accesibility Id
    }

    get inputPassword () {
        return $('~Password input field') //accesibility Id
    }

    get btnLogin () {
        return $('~Login button') //accesibility Id
    }

    /**
     * Method to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.btnLogin.click()
    }

}

module.exports = new LoginPage()