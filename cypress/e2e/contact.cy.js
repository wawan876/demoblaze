import login from "../pageobject/login";
import datalogin from '../fixtures/datalogin.json';
import datacontact from '../fixtures/dataContact.json';
import Contact from '../pageobject/formContact';

describe('CONTACT PAGE', () => {
    beforeEach(() => {
        login.visitLoginPage();
        
    });
    it('input teks contact', () => {
        // login.clickLogout();
        login.clicklogin();
        login.usernamelogin(datalogin[0].username);
        login.passwordlogin(datalogin[0].password);
        login.submitLoginForm();
        login.verifyloginsuccess();
        Contact.clickContact();
        Contact.InputEmail(datacontact.contactEmail);
        Contact.InputName(datacontact.contactName);
        Contact.InputMessage(datacontact.contactMessage);
        Contact.ClickSendMessage();
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Thanks for the message!!');
        });
        
    });
});