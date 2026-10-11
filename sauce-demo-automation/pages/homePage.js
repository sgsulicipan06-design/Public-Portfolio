class HomePage {
    constructor(page) {
        this.page = page;
        this.pageTitleSelector = '.title';
        this.menuButtonSelector = '#react-burger-menu-btn';
        this.logoutLinkSelector = '#logout_sidebar_link';
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

}

module.exports = HomePage;