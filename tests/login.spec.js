const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const testData = require('../utils/testData');

test.describe('Login Functionality - DemoBlaze', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('should successfully log in with valid credentials', async ({ page }) => {
    await loginPage.login(testData.validUser.email, testData.validUser.password);
    await expect(page.locator('#nameofuser')).toBeVisible();
  });

  test('should display alert when credentials are invalid', async ({ page }) => {
    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('User does not exist');
      await dialog.accept();
    });

    await loginPage.login('wrong_user', 'wrong_pass');
  });

  test('should display alert when username and password are empty', async ({ page }) => {
    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('Please fill');
      await dialog.accept();
    });

    await loginPage.login('', '');
  });

  test('should log out and return to login state', async ({ page }) => {
    await loginPage.login(testData.validUser.email, testData.validUser.password);
    await page.click('#logout2');
    await expect(page.locator('#login2')).toBeVisible();
  });
});
