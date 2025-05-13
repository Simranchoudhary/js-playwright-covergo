class CategoryPage {
    constructor(page) {
      this.page = page;
      this.categoryLink = name => page.locator(`a:has-text("${name}")`);
      this.cardTitles = page.locator('.card-title');
    }
  
    async selectCategory(categoryName) {
      await this.categoryLink(categoryName).click();
    }
  
    async getVisibleCardTitles() {
      return await this.cardTitles.allTextContents();
    }
  }
  
  module.exports = { CategoryPage };
  