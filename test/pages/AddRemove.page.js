const Page = require('./Page');

const addButton = "//button[text()='Add Element']";
const deleteBtn = "#elements button";

class AddRemovePage{
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