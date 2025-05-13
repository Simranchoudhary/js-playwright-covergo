const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { ProductPage } = require('../pages/ProductPage');

test.describe('Alert Behavior - DemoBlaze', () => {
  let homePage, productPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    await homePage.open();
  });

  test('should show alert on adding product to cart', async ({ page }) => {
    await homePage.selectProduct('Nokia lumia 1520');
  
    page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('Product added');
      await dialog.accept();
    });
  
    await page.locator('a:has-text("Add to cart")').click(); // skip POM here or override method
  });
  
});
