const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');
const { LoginPage } = require('../pages/LoginPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const testData = require('../utils/testData');

test.describe('Checkout Flow - DemoBlaze (POM)', () => {
  let homePage, productPage, cartPage, loginPage, checkoutPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
    loginPage = new LoginPage(page);
    checkoutPage = new CheckoutPage(page);
    await homePage.open();
  });

  test('should place order with valid details', async () => {
    await loginPage.navigate();
    await loginPage.login('simran.choudhary@gmail.com', '123');

    await homePage.open();
    await homePage.selectProduct('Samsung galaxy s6');
    await productPage.addToCart();
    await homePage.goToCart();

    await checkoutPage.clickPlaceOrder();
    await checkoutPage.fillOrderForm(testData.orderDetails);
    await checkoutPage.submitOrder();

    await expect(await checkoutPage.isConfirmationVisible()).toBeTruthy();
  });

  test('should not place order with empty form', async () => {
    await loginPage.navigate();
    await loginPage.login('simran.choudhary@gmail.com', '123');

    await homePage.open();
    await homePage.selectProduct('Samsung galaxy s6');
    await productPage.addToCart();
    await homePage.goToCart();

    await checkoutPage.clickPlaceOrder();
    await checkoutPage.submitOrder();

    await expect(await checkoutPage.isConfirmationVisible()).toBeFalsy();
  });
});
