import login from "../pageobject/login";
import datalogin from "../fixtures/datalogin.json";


describe('POM IMPLEMENTATION', () => {
    beforeEach(() => {
        login.visitLoginPage();
    });

    it('username register & password register', () => {
        login.clicklogin();
        login.usernamelogin(datalogin[0].username);
        login.passwordlogin(datalogin[0].password);
        login.submitLoginForm();
        login.verifyloginsuccess();
    });

    it('username not register & password register', () => {
        login.clicklogin();
        login.usernamelogin(datalogin[1].username);
        login.passwordlogin(datalogin[1].password);
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Wrong password.');
        });
        login.submitLoginForm();
    });

    it('username register & password not register', () => {
        login.clicklogin();
        login.usernamelogin(datalogin[2].username);
        login.passwordlogin(datalogin[2].password);
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Wrong password.');
        });
        login.submitLoginForm();
    });

    it('without username & password register', () => {
        login.clicklogin();
        login.passwordlogin(datalogin[3].password);
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Please fill out Username and Password.');
        });
        login.submitLoginForm();
    });

    it('username register & without password', () => {
        login.clicklogin();
        login.usernamelogin(datalogin[4].username);
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Please fill out Username and Password.');
        });
        login.submitLoginForm();
    });

    it('without username & without password', () => {
        login.clicklogin();
        login.submitLoginForm();
    });
});
