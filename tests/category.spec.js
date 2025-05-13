const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { CategoryPage } = require('../pages/CategoryPage');

test.describe('Category Filter - DemoBlaze', () => {
  let homePage, categoryPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    categoryPage = new CategoryPage(page);
    await homePage.open();
  });

  test('should filter products by category', async () => {
    await categoryPage.selectCategory('Laptops');

    
    await expect(categoryPage.cardTitles.first()).toBeVisible();
  });
});
