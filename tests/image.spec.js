const { test, expect } = require('@playwright/test');
const { ImageValidator } = require('../pages/ImageValidator');
const { HomePage } = require('../pages/HomePage');

test.describe('Image Validation - DemoBlaze', () => {
  let homePage, imageValidator;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    imageValidator = new ImageValidator(page);
    await homePage.open();
  });

  test('should detect broken product images', async () => {
    const allGood = await imageValidator.areAllImagesValid();
    expect(allGood).toBeTruthy();
  });
});
