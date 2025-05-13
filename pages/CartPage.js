class CartPage {
    constructor(page) {
      this.page = page;
      this.cartRows = page.locator('tr.success');
      this.deleteLink = page.locator('a:text("Delete")');
    }
  
    async countCartItems() {
      return await this.cartRows.count();
    }
  
    async deleteFirstItem() {
      await this.deleteLink.first().click();
    }
  }
  
  module.exports = { CartPage };
  