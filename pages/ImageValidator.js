class ImageValidator {
    constructor(page) {
      this.page = page;
      this.productImages = page.locator('img.img-fluid');
    }
  
    async areAllImagesValid() {
      const count = await this.productImages.count();
      for (let i = 0; i < count; i++) {
        const isValid = await this.productImages.nth(i).evaluate(img => img.naturalWidth > 0);
        if (!isValid) return false;
      }
      return true;
    }
  }
  
  module.exports = { ImageValidator };
  