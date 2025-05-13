const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { ProductPage } = require('../pages/ProductPage');
const { ModalPage } = require('../pages/ModalPage');

test.describe('Modal Behavior - DemoBlaze', () => {
  let homePage, productPage, modalPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    modalPage = new ModalPage(page);
    await homePage.open();
  });

  test('should open and close place order modal', async () => {
    await homePage.selectProduct('Samsung galaxy s6');
    await productPage.addToCart();
    await homePage.goToCart();


    await expect(modalPage.orderModal).not.toBeVisible();

    
    await modalPage.openAndClosePlaceOrderModal();

   
    await expect(modalPage.orderModal).not.toBeVisible();
  });
});
