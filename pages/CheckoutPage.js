class CheckoutPage {
    constructor(page) {
      this.page = page;
      this.placeOrderBtn = page.locator('button:has-text("Place Order")');
      this.nameInput = page.locator('#name');
      this.countryInput = page.locator('#country');
      this.cityInput = page.locator('#city');
      this.cardInput = page.locator('#card');
      this.monthInput = page.locator('#month');
      this.yearInput = page.locator('#year');
      this.purchaseBtn = page.locator('button:has-text("Purchase")');
      this.confirmationPopup = page.locator('.sweet-alert');
    }
  
    async clickPlaceOrder() {
      await this.placeOrderBtn.click();
    }
  
    async fillOrderForm({ name, country, city, card, month, year }) {
      await this.nameInput.fill(name);
      await this.countryInput.fill(country);
      await this.cityInput.fill(city);
      await this.cardInput.fill(card);
      await this.monthInput.fill(month);
      await this.yearInput.fill(year);
    }
  
    async submitOrder() {
      await this.purchaseBtn.click();
    }
  
    async isConfirmationVisible() {
      return await this.confirmationPopup.isVisible();
    }
  }
  
  module.exports = { CheckoutPage };
  