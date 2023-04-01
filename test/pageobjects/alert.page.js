

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Alert extends Page {
    /**
     * define selectors using getter methods
     */
    async getAlertMesage () {
        await browser.waitUntil(async () =>{
            return await browser.isAlertOpen()
        },{
            timeout:2000,
            timeoutMsg:"didn't change after 2s"
        });

        const text = await browser.getAlertText()
        return text;
    }
}

module.exports = new Alert();
