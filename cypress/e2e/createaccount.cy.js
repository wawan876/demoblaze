import createaccounttest from '../pageobject/createaccounttest';
import createdata from '../fixtures/createdata.json';


describe('POM IMPLEMENTATION', () => {
    beforeEach(() => {
        cy.visit('https://demoblaze.com/')
    });

    it('username valid & password valid', () => {
        
        createaccounttest.clickbtnlogin();
        createaccounttest.InputUsername(createdata[0].username);
        createaccounttest.InputPassword(createdata[0].password);
        //verifikasi login success
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Sign up successful');
        });
        createaccounttest.ClickSubmit();
        });

    it('username already & password valid', () => {
        
        createaccounttest.clickbtnlogin();
        createaccounttest.InputUsername(createdata[1].username);
        createaccounttest.InputPassword(createdata[1].password);
        //verifikasi login failed
        cy.on('window:alert', (text) => {
            expect(text).to.contains('This user already exist.');
        });
        createaccounttest.ClickSubmit();
        });

    it('username numberic & password abjad', () => {
        
        createaccounttest.clickbtnlogin();
        createaccounttest.InputUsername(createdata[2].username);
        createaccounttest.InputPassword(createdata[2].password);
        //verifikasi login failed
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Sign up successful.');
        });
        createaccounttest.ClickSubmit();
        });
    
    it('username numberic & password numberic', () => {

        createaccounttest.clickbtnlogin();
        createaccounttest.InputUsername(createdata[3].username);
        createaccounttest.InputPassword(createdata[3].password);
        //verifikasi login failed
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Sign up successful.');
        });
        createaccounttest.ClickSubmit();
    });

    it('without username & password valid', () => {
        
        createaccounttest.clickbtnlogin();
        createaccounttest.UsernameField();
        createaccounttest.InputPassword(createdata[4].password);
        //verifikasi login failed
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Please fill out Username and Password.');
        });
        createaccounttest.ClickSubmit();
        });

    it('without password & uername valid', () => {

        createaccounttest.clickbtnlogin();
        createaccounttest.InputUsername(createdata[5].username);
        createaccounttest.PasswordField();
        //verifikasi login failed
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Please fill out Username and Password.');
        });
        createaccounttest.ClickSubmit();
    });

    it('without username & password', () => {

        createaccounttest.clickbtnlogin();
        createaccounttest.UsernameField();
        createaccounttest.PasswordField();
        //verifikasi login failed
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Please fill out Username and Password.');
        });
        createaccounttest.ClickSubmit();
    });
    
});