class ModalPage {
    constructor(page) {
      this.page = page;
      this.placeOrderBtn = page.locator('button:has-text("Place Order")');
      this.closeModalBtn = page.locator('button.close');
      this.orderModal = page.locator('#orderModal');
      this.closeModalBtn = this.orderModal.locator('button.close');
    }
  
    async openAndClosePlaceOrderModal() {
      await this.placeOrderBtn.click();
      await this.closeModalBtn.click();
    }
  
    async isOrderModalVisible() {
      return await this.orderModal.isVisible();
    }
  }
  
  module.exports = { ModalPage };
  