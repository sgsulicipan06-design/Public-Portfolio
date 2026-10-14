const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  await page.goto('https://www.saucedemo.com/inventory.html');
  await page.locator('[data-test="inventory-item-description"]').first().click();
  // await expect(page.locator('[data-test="item-3-title-link"] [data-test="inventory-item-name"]')).toContainText('Test.allTheThings() T-Shirt (Red)');

  // ---------------------
  await context.close();
  await browser.close();
})();