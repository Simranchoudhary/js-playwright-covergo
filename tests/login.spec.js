const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const testData = require('../utils/testData');

test.describe('Login Tests - DemoBlaze', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('should login with valid credentials', async ({ page }) => {
    await loginPage.login(testData.validUser.email, testData.validUser.password);
    await expect(page.locator('#nameofuser')).toBeVisible();
  });

  test('should show alert on invalid credentials', async ({ page }) => {
    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('User does not exist');
      await dialog.accept();
    });

    await loginPage.login('wrong_user', 'wrong_pass');
  });

  test('should show alert on empty credentials', async ({ page }) => {
    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('Please fill');
      await dialog.accept();
    });

    await loginPage.login('', '');
  });

  test('should logout successfully', async ({ page }) => {
    await loginPage.login('simran.choudhary@gmail.com', '123');
    await page.click('#logout2');
    await expect(page.locator('#login2')).toBeVisible();
  });
  
});
