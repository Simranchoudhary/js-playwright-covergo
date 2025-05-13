class ProductPage {
    constructor(page) {
      this.page = page;
      this.addToCartBtn = page.locator('a:has-text("Add to cart")');
    }
  
    async addToCart() {
      const dialogPromise = this.page.waitForEvent('dialog');
      await this.addToCartBtn.click();
      const dialog = await dialogPromise;
      await dialog.accept();
    }
  }
  
  module.exports = { ProductPage };
  