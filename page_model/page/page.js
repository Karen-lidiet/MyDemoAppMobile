module.exports = class Page {

    //Locators

    get lblProducts () {
        return $('~container header') // accessibility id
    }
    
    get burgerMenu () {
        return $('//android.view.ViewGroup[@content-desc="open menu"]') //xpath
    }

    get loginOption () {
        return $('~menu item log in') // accessibility id
    }

    /**
     * method to select Menu
     */
    async clickOnMenu () {
        await this.burgerMenu.click()
    }

    /**
     * Method to select Login option
     */
    async navigateToLoginPage () {
        await this.loginOption.click()
    }
        
} 
