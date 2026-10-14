const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const HomePage = require('../pages/homePage');

test.describe('Products Sort', () => {
    let loginPage;
    let homePage;
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
        await loginPage.login('standard_user', 'secret_sauce');
    });

    test('Products should be sorted correctly when sorted', async ({ page }) => {
        
        expect(await homePage.isSortContainerValueTrue('az')).toBe(true);
        expect(await homePage.isFirstProductDisplayed('Sauce Labs Backpack')).toBe(true);
        expect(await homePage.isLastProductDisplayed('Test.allTheThings() T-Shirt (Red)')).toBe(true);

        await homePage.selectProductSortContainer('za');
        expect(await homePage.isSortContainerValueTrue('za')).toBe(true);
        expect(await homePage.isFirstProductDisplayed('Test.allTheThings() T-Shirt (Red)')).toBe(true);
        expect(await homePage.isLastProductDisplayed('Sauce Labs Backpack')).toBe(true);
        
        await homePage.selectProductSortContainer('lohi');
        expect(await homePage.isSortContainerValueTrue('lohi')).toBe(true);
        expect(await homePage.isFirstProductDisplayed('Sauce Labs Onesie')).toBe(true);
        expect(await homePage.isLastProductDisplayed('Sauce Labs Fleece Jacket')).toBe(true);

        await homePage.selectProductSortContainer('hilo');
        expect(await homePage.isSortContainerValueTrue('hilo')).toBe(true);
        expect(await homePage.isFirstProductDisplayed('Sauce Labs Fleece Jacket')).toBe(true);
        expect(await homePage.isLastProductDisplayed('Sauce Labs Onesie')).toBe(true);
    });

});