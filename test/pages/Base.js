const Page = require('./Page');

module.exports = class Base{
  getHeaderText(header){
    return Page.getElementText(header);
  }
  waitTitleDistpayed(header){
      Page.waitUntilDisplayed(header);
  }
  isTitleDistpayed(header){
      return Page.isElementDisplayed(header)
  }
}