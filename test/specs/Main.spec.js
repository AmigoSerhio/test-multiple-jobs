const helper = require('../../helper/helper');
const envURLs = helper.parseJsonFile('./environments/env.json');
const logInPage = require('../pages/LogIn.page');
const {expect} = require('chai');

const footerLinkText = "Elemental Selenium";
const footerLink = '#page-footer a';
const h2Header = 'h2';

//#region //Preparation
before('land to main url', () => {
    browser.url(envURLs.LOG_IN);
    logInPage.waitTitleDistpayed(h2Header);
});
//#endregion
describe('Check login page defaults', () => {
    //#region //Inspect login form
    it('Check h2 header displayed', () => {
        expect(logInPage.isTitleDistpayed(h2Header)).true;
        expect(logInPage.getHeaderText(h2Header)).contain('Available Examples');
    });
    it('Ispect footer text', () => {
        expect(logInPage.getFooterText()).contain('Powered by Elemental Selenium');

    });
    it('Verify Footer link',()=>{
        expect(logInPage.isLinkDisplayed(footerLink)).true;
        expect(logInPage.getLinkText(footerLink)).contain(footerLinkText);
    });
    //#endregion
});
