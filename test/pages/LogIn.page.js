const Page = require('./Page');

const h2Header = 'h2';
const footerSelector = '#page-footer';
const confirmMessage = "#content p";

class LogInPage {
    getH2HeaderText(){
        return Page.getElementText(h2Header);
    }
    waitTitleDistpayed(){
        Page.waitUntilDisplayed(h2Header);
    }
    isTitleDistpayed(){
        return Page.isElementDisplayed(h2Header)
    }
    getPageText(){
        browser.pause(10000);
        return Page.getElementText("body");
    }
    getMessageText(){
        return Page.getElementText(confirmMessage)
    }
    //#region //links
    isLinkDisplayed(linkSelector){
        return Page.isElementDisplayed(linkSelector);
    }
    getLinkText(linkSelector){
        return Page.getElementText(linkSelector);
    }
    getFooterText(){
        return Page.getElementText(footerSelector);
    }
    //#endregion
}

module.exports = new LogInPage();