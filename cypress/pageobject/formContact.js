const Contact = {

    locators :{
        ContactButton : "//a[.='Contact']",
        ContactEmail : "#recipient-email",
        ContactName : "#recipient-name",
        Message : "#message-text",
        ButtonSendMessage : "//button[.='Send message']"
    },
    clickContact(){
        cy.xpath(this.locators.ContactButton).click({force:true});
    },
    InputEmail(email){
        cy.get(this.locators.ContactEmail).type(email,{force:true});
    },
    InputName(name){
        cy.get(this.locators.ContactName).type(name,{force:true});
    },
    InputMessage(message){
        cy.get(this.locators.Message).type(message,{force:true});
    },
    ClickSendMessage(){
        cy.xpath(this.locators.ButtonSendMessage).click({force:true});
    }


}
export default Contact;