const createaccounttest = {

    clickbtnlogin(){
        cy.xpath("//a[.='Sign up']").click()
    },
    InputUsername(username){
        cy.xpath("//input[@id='sign-username']").wait(1000).clear().type(username)
    },
    InputPassword(password){
        cy.xpath("//input[@id='sign-password']").wait(1000).clear().type(password)
    },
    UsernameField(){
        return cy.xpath("//input[@id='sign-username']").clear()
    },
    PasswordField(){
        return cy.xpath("//input[@id='sign-password']").clear()
    },
    ClickSubmit(){
        cy.xpath("//button[.='Sign up']").click()
    }

}
export default createaccounttest;
