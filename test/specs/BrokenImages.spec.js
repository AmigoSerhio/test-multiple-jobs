const helper = require('../../helper/helper');
const envURLs = helper.parseJsonFile('./environments/env.json');
const brokenImages = require('../pages/BrokenImages.page');
const commonElements = require('../pages/CommonElements');
const {expect} = require('chai');

const h3TitleTex = "Broken Images";

//#region //Preparation
before('land to main url', () => {
  browser.url(envURLs.LOG_IN+"broken_images");
});
//#endregion
describe('Verify broken images',()=>{
  it('Verify Title',()=>{
    expect(commonElements.isTitleDistpayed()).true;
    expect(commonElements.getH3HeaderText()).contain(h3TitleTex);
  });
});