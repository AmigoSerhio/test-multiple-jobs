const helper = require('../../helper/helper');
const envURLs = helper.parseJsonFile('./environments/env.json');
const addRemovePage = require('../pages/AddRemove.page');
const commonElements = require('../pages/CommonElements');
const {expect} = require('chai');

const h3TitleTex = "Add/Remove Elements";

//#region //Preparation
before('land to main url', () => {
  browser.url(envURLs.LOG_IN+"add_remove_elements/");
});
//#endregion
describe('Check Add Remove elements page defaults', () => {
  //#region //Inspect login form
  it('Check h3 header displayed', () => {
    expect(commonElements.isTitleDistpayed()).true;
    expect(commonElements.getH3HeaderText()).contain(h3TitleTex);
  });
  it('Verify Add button',()=>{
    expect(addRemovePage.isAddBtnDisplayed()).true;
  });
});

describe('Verify Add Remove elements', () => {
  //#region //Inspect login form
  it('Add element', () => {
    addRemovePage.clickAddBtn();
    expect(addRemovePage.isDeleteBtnDisplayed()).true;
  });
  it('Remove element',()=>{
    expect(addRemovePage.isDeleteBtnDisplayed()).true;
    addRemovePage.clickDeleteBtn();
    expect(addRemovePage.isDeleteBtnDisplayed()).false;
  });
});