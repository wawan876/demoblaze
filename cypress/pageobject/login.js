const login = {

    visitLoginPage() {
        cy.visit('https://demoblaze.com/')
    },

    clicklogin(){
        cy.xpath("//a[.='Log in']").click()
    },

    usernamelogin(username) {
        cy.xpath("//input[@id='loginusername']").wait(1000).type(username)
    },

    passwordlogin(password) {
        cy.xpath("//input[@id='loginpassword']").wait(1000).type(password)
    },

    submitLoginForm() {
        cy.xpath("//button[.='Log in']").click()
    },

    verifyloginsuccess(){
        cy.url().should('include','/index.html')
    }
}

export default login;