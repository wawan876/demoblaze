const datacheckout = {
    checkoutProduct(productName) {
        cy.xpath("//a[.='Samsung galaxy s6']").click();
        cy.xpath("//a[.='Add to cart']").click();
    },

    proceedToCheckout() {
        cy.xpath("//a[.='Cart']").click();
        cy.xpath("//button[.='Place Order']").click();
    },
    verifyOrderSummary() {
        cy.xpath("//h2[.='Order Summary']").should('be.visible');
    },

    fillShippingDetails(name, country, city, card, month, year) {
        cy.xpath("//input[@id='name']").type(name);
        cy.xpath("//input[@id='country']").type(country);
        cy.xpath("//input[@id='city']").type(city);
        cy.xpath("//input[@id='card']").type(card);
        cy.xpath("//input[@id='month']").type(month);
        cy.xpath("//input[@id='year']").type(year);
    },

    confirmOrder() {
        cy.xpath("//button[.='Purchase']").click();
    }
}
export default datacheckout;