class HomePage {
    constructor(page) {
        this.page = page;
        this.pageTitleSelector = '.title';
        this.menuButtonSelector = '#react-burger-menu-btn';
        this.logoutLinkSelector = '#logout_sidebar_link';
        this.productSortContainerSelector = '.product_sort_container';
        this.productsSelector = '.inventory_item_name';
    }

    
    async getPageTitle() {
        return await this.page.textContent(this.pageTitleSelector);
    }

    async clickMenuButton() {
        await this.page.click(this.menuButtonSelector);
    }

    async clickLogout() {
        await this.page.click(this.logoutLinkSelector);
    }

    async isSortContainerValueTrue(expectedValue) {
    const selectedValue = await this.page
        .locator(this.productSortContainerSelector)
        .inputValue();
        return selectedValue === expectedValue;
    }

    async selectProductSortContainer(expectedSortOption) {
        const selectedOption = await this.page
        .locator(this.productSortContainerSelector)
        .selectOption(expectedSortOption);
        return selectedOption === expectedSortOption;
    }
    
    async isFirstProductDisplayed(expectedProductName) {
    const productName = await this.page
        .locator(this.productsSelector)
        .first()
        .textContent();
        return productName === expectedProductName;
    }

    async isLastProductDisplayed(expectedProductName) {
    const productName = await this.page
        .locator(this.productsSelector)
        .last()
        .textContent();
        return productName === expectedProductName; 
    }
}

module.exports = HomePage;