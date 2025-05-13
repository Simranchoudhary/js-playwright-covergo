const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Cart Functionality - DemoBlaze (POM)', () => {
  let homePage, productPage, cartPage, loginPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
    loginPage = new LoginPage(page);
    await homePage.open();
  });

  test('should add a single product to cart', async () => {
    await homePage.selectProduct('Samsung galaxy s6');
    await productPage.addToCart();
    await homePage.goToCart();
    await expect(cartPage.cartRows).toHaveCount(1);
  });

  test('should remove product from cart', async () => {
    await homePage.selectProduct('Samsung galaxy s6');
    await productPage.addToCart();
    await homePage.goToCart();
    await expect(cartPage.cartRows).toHaveCount(1);
    await cartPage.deleteFirstItem();
    await expect(cartPage.cartRows).toHaveCount(0);
  });

  test('should add multiple products to cart', async () => {
    await homePage.selectProduct('Samsung galaxy s6');
    await productPage.addToCart();

    await homePage.open();
    await homePage.selectProduct('Nokia lumia 1520');
    await productPage.addToCart();

    await homePage.goToCart();
    await expect(cartPage.cartRows).toHaveCount(2);
  });

  test('logged-in user can add to cart', async () => {
    await loginPage.navigate();
    await loginPage.login('simran.choudhary@gmail.com', '123');
    await homePage.open();
    await homePage.selectProduct('Samsung galaxy s6');
    await productPage.addToCart();
    await homePage.goToCart();
    await expect(cartPage.cartRows).toHaveCount(1);
  });
  
});
