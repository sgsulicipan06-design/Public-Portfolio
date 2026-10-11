const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const HomePage = require('../pages/homePage');

test.describe('User Authentication Tests', () => {
    let loginPage;
    let homePage;
    let errorMessage;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
        errorMessage = await loginPage.getErrorMessage();
    });

    test('Should display error message for invalid login invalid username or password is provided', async ({ page }) => {

      await loginPage.login('', '');
      errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toContain('Epic sadface: Username is required');
      await page.screenshot({ path: 'screenshots/sample.png'});

      await loginPage.login('', 'secret_sauce');
      errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toContain('Epic sadface: Username is required');

      await loginPage.login('locked_out_user', 'secret_sauce');
      errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toContain('Epic sadface: Sorry, this user has been locked out.');

      await loginPage.login('locked_out_user', '');
      errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toContain('Epic sadface: Password is required');

    });

    test('Should log user in successfully', async ({ page }) => {

      await loginPage.login('standard_user', 'secret_sauce');
      expect(await homePage.getPageTitle()).toBe('Products');

    });

    test('Should log user out successfully', async ({ page }) => {

      await loginPage.login('standard_user', 'secret_sauce');
      await homePage.clickMenuButton();
      await homePage.clickLogout();
      expect(await loginPage.isLoginButtonDisplayed()).toBeTruthy();

    });

});