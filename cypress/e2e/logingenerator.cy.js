import login from "../pageobject/login";
import datalogin from "../fixtures/datalogin.json";
import { Faker } from "@faker-js/faker";

describe('POM IMPLEMENTATION', () => {
    beforeEach(() => {
        login.visitLoginPage();
    });
})
    

it('Should succes login with username data valid "standard_user"', () => {
        elements.fillField(login.usernamelogin, logindata.VALID_LOGIN.username);
        elements.fillField(login.passwordField, logindata.VALID_LOGIN.password);
        elements.click(login.loginButton);
        asserts.shouldContainText(login.title, "Products");
    });

