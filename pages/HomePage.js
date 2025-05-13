class HomePage {
    constructor(page) {
      this.page = page;
      this.productLink = name => page.locator(`a:has-text("${name}")`);
      this.cartLink = page.locator('#cartur');
    }
  
    async open() {
      await this.page.goto('https://www.demoblaze.com/');
    }
  
    async selectProduct(productName) {
      await this.productLink(productName).click();
    }
  
    async goToCart() {
      await this.cartLink.click();
    }
  }
  
  module.exports = { HomePage };
  