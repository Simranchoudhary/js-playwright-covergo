// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 30000,
  use: {
    headless: true,
    baseURL: 'https://www.demoblaze.com',
  },
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
});
