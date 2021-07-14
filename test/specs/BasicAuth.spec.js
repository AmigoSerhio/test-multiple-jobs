const helper = require('../../helper/helper');
const envURLs = helper.parseJsonFile('./environments/env.json');
const accounts = helper.parseJsonFile('./environments/accounts.json');
const logInPage = require('../pages/LogIn.page');
const {expect} = require('chai');

const confirmMessageText = "Congratulations! You must have the proper credentials.";

//#region //Preparation
before('land to main url', () => {
  browser.url(envURLs.LOG_IN+"basic_auth/");
});
//#endregion
describe('Basic Auth in modal',()=>{
  it('Login with correct credential',()=>{
    browser.url(`https://${accounts["superuser"].username}:${accounts["superuser"].password}@the-internet.herokuapp.com/basic_auth`);
    expect(logInPage.getMessageText()).contain(confirmMessageText);
  });
});