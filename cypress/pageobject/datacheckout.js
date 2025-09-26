const datacheckout = {

    locators: {
        productLink: "//a[normalize-space()='Samsung galaxy s6']",
        addToCartButton: "#logInModal.modal.fade",
        cartLink: "//a[.='Cart']",
        placeOrderButton: "//button[.='Place Order']",
        orderSummaryHeader: "//h2[.='Order Summary']",
        nameInput: "//input[@id='name']",
        countryInput: "//input[@id='country']",
        cityInput: "//input[@id='city']",
        cardInput: "//input[@id='card']",
        monthInput: "//input[@id='month']",
        yearInput: "//input[@id='year']",
        purchaseButton: "//button[.='Purchase']"
    },

    checkoutProduct(productName) {
        cy.xpath(this.locators.productLink).click({force:true});
        cy.get(this.locators.addToCartButton).click({force:true});
    },

    proceedToCheckout() {
        cy.xpath(this.locators.cartLink).click({force:true});
        cy.xpath(this.locators.placeOrderButton).click({force:true});
    },
    verifyOrderSummary() {
        cy.xpath(this.locators.orderSummaryHeader).should('be.visible');
    },

    fillShippingDetails(name, country, city, card, month, year) {
        cy.xpath(this.locators.nameInput).type(name);
        cy.xpath(this.locators.countryInput).type(country);
        cy.xpath(this.locators.cityInput).type(city);
        cy.xpath(this.locators.cardInput).type(card);
        cy.xpath(this.locators.monthInput).type(month);
        cy.xpath(this.locators.yearInput).type(year);
    },

    confirmOrder() {
        cy.xpath(this.locators.purchaseButton).click({force:true});
    }
}
export default datacheckout;