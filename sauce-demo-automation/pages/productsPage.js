class ProductsPage {
    constructor(page) {
        this.page = page;
        this.productsSelector = '.inventory_item_name';
        this.addToCartButtonsSelector = '.btn_inventory';
        this.cartBadgeSelector = '.shopping_cart_badge';
    }

    async selectProduct(index) {
        const products = await this.page.$$(this.productsSelector);
        if (index >= 0 && index < products.length) {
            await products[index].click();
        } else {
            throw new IndexOutOfBoundsException(`Invalid product index: ${index}`);
        }
    }

    async addProductToCart(index) {
        const addToCartButtons = await this.page.$$(this.addToCartButtonsSelector);
        if (index >= 0 && index < addToCartButtons.length) {
            await addToCartButtons[index].click();
        } else {
            throw new IndexOutOfBoundsException(`Invalid product index: ${index}`);
        }
    }

    async getCartBadgeCount() {
        return await this.page.textContent(this.cartBadgeSelector);
    }

}

module.exports = ProductsPage;