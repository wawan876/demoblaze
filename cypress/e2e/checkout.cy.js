import datacheckout from "../pageobject/datacheckout";
import datalogin from "../fixtures/datalogin.json";
import login from "../pageobject/login";

describe('Checkout Process', () => {
    beforeEach(() => {
        
            login.visitLoginPage();
    });


    it('should complete the checkout process successfully', () => {
        login.clicklogin();
        login.usernamelogin(datalogin[0].username);
        login.passwordlogin(datalogin[0].password);
        login.submitLoginForm();
        login.verifyloginsuccess();
        datacheckout.checkoutProduct();
        datacheckout.proceedToCheckout();
        datacheckout.fillShippingDetails('wawan', 'USA', 'New York', '4111111111111111', '12', '2025');
        datacheckout.confirmOrder();
         cy.on('window:alert', (text) => {
            expect(text).to.contains('Thank you for your purchase!');
        });
    });
});
