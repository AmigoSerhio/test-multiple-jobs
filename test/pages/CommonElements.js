const Page = require('./Page');

const h3Header = 'h3';

class CommonElements{
  getH3HeaderText(){
    return Page.getElementText(h3Header);
  }
  waitTitleDistpayed(){
      Page.waitUntilDisplayed(h3Header);
  }
  isTitleDistpayed(){
      return Page.isElementDisplayed(h3Header)
  }
}

module.exports = new CommonElements();