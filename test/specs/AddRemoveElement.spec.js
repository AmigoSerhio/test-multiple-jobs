const helper = require('../../helper/helper');
const envURLs = helper.parseJsonFile('./environments/env.json');
const addRemovePage = require('../pages/AddRemove.page');
const {expect} = require('chai');

const h3TitleTex = "Add/Remove Elements";
const h3Title = "h3";

//#region //Preparation
before('land to main url', () => {
  browser.url(envURLs.LOG_IN+"add_remove_elements/");
});
//#endregion
describe('Check Add Remove elements page defaults', () => {
  //#region //Inspect login form
  it('Check h3 header displayed', () => {
    expect(addRemovePage.isTitleDistpayed(h3Title)).true;
    expect(addRemovePage.getHeaderText(h3Title)).contain(h3TitleTex);
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