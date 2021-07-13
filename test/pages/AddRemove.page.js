const Page = require('./Page');

const h3Header = 'h3';
const addButton = "//button[text()='Add Element']";
const deleteBtn = "#elements button";

class AddRemovePage{
  getH3HeaderText(){
    return Page.getElementText(h3Header);
  }
  waitTitleDistpayed(){
      Page.waitUntilDisplayed(h3Header);
  }
  isTitleDistpayed(){
      return Page.isElementDisplayed(h3Header)
  }
  isAddBtnDisplayed(){
    return Page.isElementDisplayed(addButton);
  }
  clickAddBtn(){
    Page.click(addButton);
  }
  isDeleteBtnDisplayed(){
    return Page.isElementDisplayed(deleteBtn);
  }
  clickDeleteBtn(){
    Page.click(deleteBtn);
  }
}

module.exports = new AddRemovePage();