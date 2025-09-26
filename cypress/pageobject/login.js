const login = {

    locators: {
        loginPage: 'https://demoblaze.com/',
        loginButton: "//a[.='Log in']",
        usernameInput: "//input[@id='loginusername']",
        passwordInput: "//input[@id='loginpassword']",
        submitButton: "//button[.='Log in']",
        LogoutButton: "#logout2"
    },

    visitLoginPage() {
        cy.visit(this.locators.loginPage)
    },

    clicklogin(){
        cy.xpath(this.locators.loginButton).click({force:true})
    },

    usernamelogin(username) {
        cy.xpath(this.locators.usernameInput).wait(1000).type(username)
    },

    passwordlogin(password) {
        cy.xpath(this.locators.passwordInput).wait(1000).type(password)
    },

    submitLoginForm() {
        cy.xpath(this.locators.submitButton).click()
    },

    verifyloginsuccess(){
        cy.get('#logout2');
    },
    clickLogout(){
        cy.get(this.locators.LogoutButton).click({force:true})
    }
}

export default login;