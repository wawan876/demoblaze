const createaccounttest = {

    locators: {
        btnlogin: "#signin2",
        username: "//input[@id='sign-username']",
        password: "//input[@id='sign-password']",
        submit: "//button[.='Sign up']"
    },
    clickbtnlogin(){
        cy.get(this.locators.btnlogin).click({force:true})
    },
    InputUsername(username){
        cy.xpath(this.locators.username).wait(1000).clear().type(username)
    },
    InputPassword(password){
        cy.xpath(this.locators.password).wait(1000).clear().type(password)
    },
    UsernameField(){
        return cy.xpath(this.locators.username).clear()
    },
    PasswordField(){
        return cy.xpath(this.locators.password).clear()
    },
    ClickSubmit(){
        cy.xpath(this.locators.submit).click()
    }

}
export default createaccounttest;
