module.exports = class BasePage {
    constructor() {
    }

    navigateToURL() {
        browser.get(`${this.urlRoute}`)
    }


} 