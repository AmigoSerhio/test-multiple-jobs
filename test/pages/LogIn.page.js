const Page = require('./Page');
const Base = require('./Base.js');

const footerSelector = '#page-footer';
const confirmMessage = "#content p";

class LogInPage extends Base{
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